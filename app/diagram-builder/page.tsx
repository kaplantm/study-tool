"use client";

import { DiagramLabelTarget, Question } from "@/app/types";
import { Button } from "@mui/material";
import Link from "next/link";
import {
  ChangeEvent,
  memo,
  useCallback,
  useDeferredValue,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const STORAGE_KEY = "review-diagram-question-builder";
const COLLAPSED_SECTIONS_STORAGE_KEY = "review-diagram-collapsed-sections";

type SectionKey = "details" | "targets" | "json";
type CollapsedSections = Record<SectionKey, boolean>;

const defaultCollapsedSections: CollapsedSections = {
  details: false,
  targets: false,
  json: false,
};

type BuilderDraft = {
  question: string;
  alt: string;
  hint: string;
  imageUrl: string;
  targets: DiagramLabelTarget[];
};

type Corner = { x: number; y: number };

const emptyDraft: BuilderDraft = {
  question: "",
  alt: "",
  hint: "",
  imageUrl: "",
  targets: [],
};

const roundCoordinate = (value: number) => Math.round(value * 10) / 10;

type TargetLabelInputProps = {
  targetId: string;
  label: string;
  placeholder: string;
  onFocusTarget: (id: string) => void;
  onCommit: (id: string, label: string) => void;
};

const TargetLabelInput = memo(function TargetLabelInput({
  targetId,
  label,
  placeholder,
  onFocusTarget,
  onCommit,
}: TargetLabelInputProps) {
  const [value, setValue] = useState(label);

  useEffect(() => {
    setValue(label);
  }, [label]);

  return (
    <input
      value={value}
      onFocus={() => onFocusTarget(targetId)}
      onChange={(event) => setValue(event.target.value)}
      onBlur={() => onCommit(targetId, value)}
      placeholder={placeholder}
    />
  );
});

export default function DiagramBuilderPage() {
  const [draft, setDraft] = useState<BuilderDraft>(emptyDraft);
  const [collapsedSections, setCollapsedSections] = useState<CollapsedSections>(
    defaultCollapsedSections,
  );
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [firstCorner, setFirstCorner] = useState<Corner | null>(null);
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">(
    "idle",
  );
  const [jsonText, setJsonText] = useState("");
  const [jsonError, setJsonError] = useState<string | null>(null);
  const [isEditingJson, setIsEditingJson] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const imageInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let savedDraft: BuilderDraft | null = null;
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) savedDraft = { ...emptyDraft, ...JSON.parse(saved) };
      const savedCollapsedSections = window.localStorage.getItem(
        COLLAPSED_SECTIONS_STORAGE_KEY,
      );
      if (savedCollapsedSections) {
        const parsed = JSON.parse(
          savedCollapsedSections,
        ) as Partial<CollapsedSections>;
        setCollapsedSections({
          ...defaultCollapsedSections,
          details: parsed.details === true,
          targets: parsed.targets === true,
          json: parsed.json === true,
        });
      }
    } catch {
      // Ignore malformed or unavailable local storage and start fresh.
    }
    window.setTimeout(() => {
      if (savedDraft) setDraft(savedDraft);
      setIsLoaded(true);
    }, 0);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    const saveTimer = window.setTimeout(() => {
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(draft));
      } catch {
        // The preview and JSON remain usable if storage is full or unavailable.
      }
    }, 1000);
    return () => window.clearTimeout(saveTimer);
  }, [draft, isLoaded]);

  useEffect(() => {
    if (!isLoaded) return;
    try {
      window.localStorage.setItem(
        COLLAPSED_SECTIONS_STORAGE_KEY,
        JSON.stringify(collapsedSections),
      );
    } catch {
      // Collapse state is a convenience and does not affect the draft.
    }
  }, [collapsedSections, isLoaded]);

  const deferredDraft = useDeferredValue(draft);
  const questionJson = useMemo(() => {
    const question: Question = {
      question: deferredDraft.question,
      diagram: {
        imageUrl: deferredDraft.imageUrl,
        alt: deferredDraft.alt,
        targets: deferredDraft.targets,
      },
    };
    if (deferredDraft.hint.trim()) question.hint = deferredDraft.hint;
    return JSON.stringify(question, null, 2);
  }, [deferredDraft]);

  useEffect(() => {
    if (!isEditingJson) setJsonText(questionJson);
  }, [isEditingJson, questionJson]);

  const updateDraft = <K extends keyof BuilderDraft>(
    key: K,
    value: BuilderDraft[K],
  ) => {
    setDraft((current) => ({ ...current, [key]: value }));
  };

  const toggleSection = (section: SectionKey) => {
    setCollapsedSections((current) => ({
      ...current,
      [section]: !current[section],
    }));
  };

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => updateDraft("imageUrl", String(reader.result));
    reader.readAsDataURL(file);
  };

  const handleImageClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!draft.imageUrl) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = roundCoordinate(
      ((event.clientX - bounds.left) / bounds.width) * 100,
    );
    const y = roundCoordinate(
      ((event.clientY - bounds.top) / bounds.height) * 100,
    );
    if (!firstCorner) {
      setFirstCorner({ x, y });
      return;
    }

    const left = Math.min(firstCorner.x, x);
    const top = Math.min(firstCorner.y, y);
    const right = Math.max(firstCorner.x, x);
    const bottom = Math.max(firstCorner.y, y);
    const nextId = String(
      draft.targets.reduce(
        (highest, target) => Math.max(highest, Number(target.id) || 0),
        0,
      ) + 1,
    );
    const target = {
      id: nextId,
      label: "",
      x: left,
      y: top,
      width: roundCoordinate(right - left),
      height: roundCoordinate(bottom - top),
    };
    setDraft((current) => ({
      ...current,
      targets: [...current.targets, target],
    }));
    setSelectedId(nextId);
    setFirstCorner(null);
  };

  const updateTarget = useCallback(
    (id: string, changes: Partial<DiagramLabelTarget>) => {
      setDraft((current) => ({
        ...current,
        targets: current.targets.map((target) =>
          target.id === id ? { ...target, ...changes } : target,
        ),
      }));
    },
    [],
  );

  const commitTargetLabel = useCallback(
    (id: string, label: string) => {
      updateTarget(id, { label });
    },
    [updateTarget],
  );

  const selectTarget = useCallback((id: string) => {
    setSelectedId(id);
  }, []);

  const applyJson = () => {
    try {
      const parsed = JSON.parse(jsonText) as Partial<Question>;
      if (
        typeof parsed.question !== "string" ||
        !parsed.diagram ||
        typeof parsed.diagram.imageUrl !== "string" ||
        typeof parsed.diagram.alt !== "string" ||
        !Array.isArray(parsed.diagram.targets) ||
        parsed.diagram.targets.some(
          (target) =>
            !target ||
            typeof target !== "object" ||
            typeof target.id !== "string" ||
            typeof target.label !== "string" ||
            typeof target.x !== "number" ||
            typeof target.y !== "number" ||
            (target.width !== undefined && typeof target.width !== "number") ||
            (target.height !== undefined && typeof target.height !== "number"),
        )
      ) {
        throw new Error("JSON must contain a valid question and diagram.");
      }

      const nextDraft = {
        question: parsed.question,
        alt: parsed.diagram.alt,
        hint: typeof parsed.hint === "string" ? parsed.hint : "",
        imageUrl: parsed.diagram.imageUrl,
        targets: parsed.diagram.targets as DiagramLabelTarget[],
      };
      setDraft(nextDraft);
      setSelectedId((current) =>
        nextDraft.targets.some((target) => target.id === current)
          ? current
          : null,
      );
      setJsonError(null);
      setIsEditingJson(false);
    } catch {
      setJsonError("Enter valid question JSON before leaving this field.");
    }
  };

  const removeTarget = (id: string) => {
    setDraft((current) => ({
      ...current,
      targets: current.targets.filter((target) => target.id !== id),
    }));
    setSelectedId((current) => (current === id ? null : current));
  };

  const resetDraft = () => {
    if (!window.confirm("Clear this diagram and all of its saved work?"))
      return;
    setDraft(emptyDraft);
    setCollapsedSections(defaultCollapsedSections);
    setSelectedId(null);
    setFirstCorner(null);
    window.localStorage.removeItem(STORAGE_KEY);
    window.localStorage.removeItem(COLLAPSED_SECTIONS_STORAGE_KEY);
    if (imageInputRef.current) imageInputRef.current.value = "";
  };

  const copyJson = async () => {
    try {
      await navigator.clipboard.writeText(questionJson);
      setCopyState("copied");
    } catch {
      setCopyState("error");
    }
    window.setTimeout(() => setCopyState("idle"), 2200);
  };

  return (
    <main>
      <div>
        <header>
          <div>
            <Link
              href="/"
            >
              <span aria-hidden="true">←</span> Back to courses
            </Link>
            <p>
              Question tools
            </p>
            <h1>
              Diagram question builder
            </h1>
            <p>
              Upload a diagram, place targets, and copy a ready-to-paste
              question object.
            </p>
          </div>
          <Button
            type="button"
            onClick={resetDraft}
          >
            Start over
          </Button>
        </header>

        <div>
          <section>
            <div>
              <Button
                type="button"
                onClick={() => toggleSection("targets")}
                aria-expanded={!collapsedSections.targets}
              >
                <span>
                  2. Place target boxes
                </span>
                <span>
                  {firstCorner
                    ? "Now click the bottom-right corner."
                    : "Click the top-left, then bottom-right corner of each label."}
                </span>
              </Button>
              <span>
                {draft.targets.length} target
                {draft.targets.length === 1 ? "" : "s"}
              </span>
            </div>

            {!collapsedSections.targets && (
              <div>
                <div>
                  {!draft.imageUrl ? (
                    <Button
                      type="button"
                      onClick={() => imageInputRef.current?.click()}
                    >
                      <span
                        aria-hidden="true"
                      >
                        ＋
                      </span>
                      <span>Upload a diagram</span>
                      <span>
                        PNG, JPG, GIF, or WebP from your computer
                      </span>
                    </Button>
                  ) : (
                    <div
                      onClick={handleImageClick}
                    >
                      <img
                        src={draft.imageUrl}
                        alt={draft.alt || "Diagram preview"}
                      />
                      {firstCorner && (
                        <span
                          aria-hidden="true"
                          style={{
                            left: `${firstCorner.x}%`,
                            top: `${firstCorner.y}%`,
                          }}
                        />
                      )}
                      {draft.targets.map((target) => (
                        <Button
                          key={target.id}
                          type="button"
                          aria-label={`Target ${target.id}${target.label ? `: ${target.label}` : ": missing label"}`}
                          onClick={(event) => {
                            event.stopPropagation();
                            setSelectedId(target.id);
                          }}
                          style={{
                            left: `${target.x}%`,
                            top: `${target.y}%`,
                            width: `${target.width ?? 0}%`,
                            height: `${target.height ?? 0}%`,
                          }}
                        >
                          <span
                          >
                            {target.id}
                          </span>
                        </Button>
                      ))}
                    </div>
                  )}
                  <input
                    ref={imageInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                  {draft.imageUrl && (
                    <Button
                      type="button"
                      onClick={() => imageInputRef.current?.click()}
                    >
                      Replace image
                    </Button>
                  )}
                </div>

                <aside>
                  <div>
                    <h3>Target labels</h3>
                    <p>
                      Add labels here while keeping the diagram in view.
                    </p>
                    {draft.targets.length > 0 && (
                      <p>
                        <span>
                          {
                            draft.targets.filter((target) =>
                              target.label.trim(),
                            ).length
                          }{" "}
                          labeled
                        </span>
                        <span>·</span>
                        <span>
                          {
                            draft.targets.filter(
                              (target) => !target.label.trim(),
                            ).length
                          }{" "}
                          missing
                        </span>
                      </p>
                    )}
                  </div>
                  {draft.targets.length === 0 ? (
                    <p>
                      Draw a box on the diagram to add a target.
                    </p>
                  ) : (
                    <div>
                      {[...draft.targets].reverse().map((target, index) => (
                        <div
                          key={target.id}
                        >
                          <div>
                            <div>
                              <span>
                                {target.id}
                              </span>
                              <span
                              >
                                <span aria-hidden="true">
                                  {target.label.trim() ? "✓" : "!"}
                                </span>
                                {target.label.trim()
                                  ? "Labeled"
                                  : "Missing label"}
                              </span>
                            </div>
                            <Button
                              type="button"
                              onClick={() => removeTarget(target.id)}
                            >
                              Remove
                            </Button>
                          </div>
                          <label>
                            Answer label
                          </label>
                          <TargetLabelInput
                            targetId={target.id}
                            label={target.label}
                            onFocusTarget={selectTarget}
                            onCommit={commitTargetLabel}
                            placeholder={`e.g. ${index === 0 ? "Mitochondrion" : "Cell membrane"}`}
                          />
                          <p>
                            Box: {target.width}% wide × {target.height}% high
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </aside>
              </div>
            )}
          </section>

          <div>
            <section>
              <Button
                type="button"
                onClick={() => toggleSection("details")}
                aria-expanded={!collapsedSections.details}
              >
                <span>
                  1. Add question details
                </span>
                <span>
                  These fields map directly to your question JSON.
                </span>
              </Button>
              {!collapsedSections.details && (
                <div>
                  <label>
                    Question prompt
                    <input
                      value={draft.question}
                      onChange={(event) =>
                        updateDraft("question", event.target.value)
                      }
                      placeholder="Label the structures in this diagram."
                    />
                  </label>
                  <label>
                    Image description (alt text)
                    <input
                      value={draft.alt}
                      onChange={(event) =>
                        updateDraft("alt", event.target.value)
                      }
                      placeholder="Diagram of a eukaryotic cell"
                    />
                  </label>
                  <label>
                    Hint{" "}
                    <span>
                      (optional)
                    </span>
                    <textarea
                      value={draft.hint}
                      onChange={(event) =>
                        updateDraft("hint", event.target.value)
                      }
                      placeholder="Think about the organelle that produces ATP."
                      rows={3}
                    />
                  </label>
                </div>
              )}
            </section>

            <section>
              <div>
                <Button
                  type="button"
                  onClick={() => toggleSection("json")}
                  aria-expanded={!collapsedSections.json}
                >
                  <span>
                    3. Copy question JSON
                  </span>
                  <span>
                    Paste this into a section&apos;s questions array.
                  </span>
                </Button>
                <Button
                  type="button"
                  onClick={copyJson}
                >
                  {copyState === "copied" ? "Copied!" : "Copy JSON"}
                </Button>
              </div>
              {!collapsedSections.json && copyState === "error" && (
                <p>
                  Clipboard access was blocked. Select and copy the JSON
                  manually.
                </p>
              )}
              {!collapsedSections.json && (
                <textarea
                  value={isEditingJson ? jsonText : questionJson}
                  onFocus={() => {
                    if (!isEditingJson) setJsonText(questionJson);
                    setIsEditingJson(true);
                    setJsonError(null);
                  }}
                  onChange={(event) => setJsonText(event.target.value)}
                  onBlur={applyJson}
                  spellCheck={false}
                  aria-label="Question JSON"
                />
              )}
              {!collapsedSections.json && jsonError && (
                <p>{jsonError}</p>
              )}
              {!collapsedSections.json && (
                <p>
                  Drafts save automatically in this browser.
                </p>
              )}
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
