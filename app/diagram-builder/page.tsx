"use client";

import { DiagramLabelTarget, Question } from "@/app/types";
import Link from "next/link";
import {
  ChangeEvent,
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

export default function DiagramBuilderPage() {
  const [draft, setDraft] = useState<BuilderDraft>(emptyDraft);
  const [collapsedSections, setCollapsedSections] =
    useState<CollapsedSections>(defaultCollapsedSections);
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
        const parsed = JSON.parse(savedCollapsedSections) as Partial<CollapsedSections>;
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

  const updateTarget = (id: string, changes: Partial<DiagramLabelTarget>) => {
    setDraft((current) => ({
      ...current,
      targets: current.targets.map((target) =>
        target.id === id ? { ...target, ...changes } : target,
      ),
    }));
  };

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
    <main className="min-h-screen bg-[#f6f7fb] px-4 py-8 text-zinc-950 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Link
              href="/"
              className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-zinc-500 transition hover:text-zinc-900"
            >
              <span aria-hidden="true">←</span> Back to courses
            </Link>
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-sky-600">
              Question tools
            </p>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Diagram question builder
            </h1>
            <p className="mt-2 max-w-2xl text-zinc-600">
              Upload a diagram, place targets, and copy a ready-to-paste
              question object.
            </p>
          </div>
          <button
            type="button"
            onClick={resetDraft}
            className="rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-600 shadow-sm transition hover:border-rose-200 hover:text-rose-600"
          >
            Start over
          </button>
        </header>

        <div className="flex flex-col gap-6">
          <section className="order-2 rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-7">
            <div className="mb-6 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => toggleSection("targets")}
                aria-expanded={!collapsedSections.targets}
                className="min-w-0 text-left"
              >
                <span className="block text-lg font-bold">
                  2. Place target boxes
                </span>
                <span className="block text-sm text-zinc-500">
                  {firstCorner
                    ? "Now click the bottom-right corner."
                    : "Click the top-left, then bottom-right corner of each label."}
                </span>
              </button>
              <span className="rounded-full bg-sky-50 px-3 py-1 text-sm font-bold text-sky-700">
                {draft.targets.length} target
                {draft.targets.length === 1 ? "" : "s"}
              </span>
            </div>

            {!collapsedSections.targets && (
              <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(230px,300px)] lg:items-start">
              <div>
                {!draft.imageUrl ? (
                  <button
                    type="button"
                    onClick={() => imageInputRef.current?.click()}
                    className="flex min-h-[360px] w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-zinc-300 bg-zinc-50 px-6 text-center transition hover:border-sky-400 hover:bg-sky-50/40"
                  >
                    <span
                      className="mb-4 grid size-14 place-items-center rounded-2xl bg-white text-2xl shadow-sm"
                      aria-hidden="true"
                    >
                      ＋
                    </span>
                    <span className="font-bold">Upload a diagram</span>
                    <span className="mt-1 text-sm text-zinc-500">
                      PNG, JPG, GIF, or WebP from your computer
                    </span>
                  </button>
                ) : (
                  <div
                    className="relative mx-auto w-full cursor-crosshair overflow-visible rounded-2xl border border-zinc-200 bg-zinc-100"
                    onClick={handleImageClick}
                  >
                    <img
                      src={draft.imageUrl}
                      alt={draft.alt || "Diagram preview"}
                      className="block h-auto max-h-[680px] w-full rounded-2xl object-contain"
                    />
                    {firstCorner && (
                      <span
                        aria-hidden="true"
                        style={{
                          left: `${firstCorner.x}%`,
                          top: `${firstCorner.y}%`,
                        }}
                        className="pointer-events-none absolute size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-sky-600 shadow ring-2 ring-sky-500"
                      />
                    )}
                    {draft.targets.map((target) => (
                      <button
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
                        className={`absolute grid place-items-center rounded-md border-2 text-sm font-bold shadow-lg transition ${target.label.trim() ? "border-emerald-600 bg-emerald-100/30 text-emerald-800" : "border-rose-600 bg-rose-100/30 text-rose-800"} ${selectedId === target.id ? "ring-2 ring-sky-500 ring-offset-1" : "hover:bg-sky-50/60"}`}
                      >
                        <span className="absolute -right-2 -top-2 z-10 grid h-5 min-w-5 place-items-center rounded-full border-2 border-white bg-zinc-900 px-1 text-xs font-bold leading-none text-white shadow-sm">
                          {target.id}
                        </span>
                        <span
                          aria-hidden="true"
                          className={`absolute -left-2 -top-2 z-10 grid size-5 place-items-center rounded-full border-2 border-white text-xs font-bold leading-none text-white shadow-sm ${target.label.trim() ? "bg-emerald-600" : "bg-rose-600"}`}
                        >
                          {target.label.trim() ? "✓" : "!"}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
                <input
                  ref={imageInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                {draft.imageUrl && (
                  <button
                    type="button"
                    onClick={() => imageInputRef.current?.click()}
                    className="mt-3 text-sm font-semibold text-sky-700 hover:underline"
                  >
                    Replace image
                  </button>
                )}
              </div>

                <aside className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 lg:sticky lg:top-4 lg:max-h-[680px] lg:overflow-y-auto">
                <div className="mb-3">
                  <h3 className="text-sm font-bold">Target labels</h3>
                  <p className="mt-1 text-xs text-zinc-500">
                    Add labels here while keeping the diagram in view.
                  </p>
                  {draft.targets.length > 0 && (
                    <p className="mt-2 flex items-center gap-2 text-xs font-semibold">
                      <span className="text-emerald-700">
                        {draft.targets.filter((target) => target.label.trim()).length} labeled
                      </span>
                      <span className="text-zinc-400">·</span>
                      <span className="text-rose-700">
                        {draft.targets.filter((target) => !target.label.trim()).length} missing
                      </span>
                    </p>
                  )}
                </div>
                {draft.targets.length === 0 ? (
                  <p className="rounded-xl border border-dashed border-zinc-300 bg-white p-4 text-center text-sm text-zinc-500">
                    Draw a box on the diagram to add a target.
                  </p>
                ) : (
                  <div className="grid gap-3">
                    {[...draft.targets].reverse().map((target, index) => (
                      <div
                        key={`${target.id}-${target.label}`}
                        className={`rounded-2xl border p-4 transition ${target.label.trim() ? "border-emerald-200 bg-emerald-50/30" : "border-rose-200 bg-rose-50/30"} ${selectedId === target.id ? "ring-2 ring-sky-400" : ""}`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span className="grid size-7 shrink-0 place-items-center rounded-full bg-zinc-900 text-xs font-bold text-white">
                              {target.id}
                            </span>
                            <span
                              className={`inline-flex items-center gap-1 text-xs font-bold ${target.label.trim() ? "text-emerald-700" : "text-rose-700"}`}
                            >
                              <span aria-hidden="true">{target.label.trim() ? "✓" : "!"}</span>
                              {target.label.trim() ? "Labeled" : "Missing label"}
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeTarget(target.id)}
                            className="shrink-0 text-xs font-semibold text-zinc-400 hover:text-rose-600"
                          >
                            Remove
                          </button>
                        </div>
                        <label className="mt-3 block text-xs font-bold uppercase tracking-wide text-zinc-500">
                          Answer label
                        </label>
                        <input
                          value={target.label}
                          onChange={(event) =>
                            updateTarget(target.id, {
                              label: event.target.value,
                            })
                          }
                          onBlur={(event) =>
                            updateTarget(target.id, {
                              label: event.currentTarget.value,
                            })
                          }
                          placeholder={`e.g. ${index === 0 ? "Mitochondrion" : "Cell membrane"}`}
                          className="mt-1 w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm outline-none ring-sky-500 focus:ring-2"
                        />
                        <p className="mt-2 text-xs text-zinc-500">
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

          <div className="contents">
            <section className="order-1 rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-7">
              <button
                type="button"
                onClick={() => toggleSection("details")}
                aria-expanded={!collapsedSections.details}
                className="mb-5 text-left"
              >
                <span className="block text-lg font-bold">
                  1. Add question details
                </span>
                <span className="block text-sm text-zinc-500">
                  These fields map directly to your question JSON.
                </span>
              </button>
              {!collapsedSections.details && <div className="grid gap-4">
                <label className="grid gap-1.5 text-sm font-semibold">
                  Question prompt
                  <input
                    value={draft.question}
                    onChange={(event) =>
                      updateDraft("question", event.target.value)
                    }
                    placeholder="Label the structures in this diagram."
                    className="rounded-xl border border-zinc-200 px-3.5 py-3 font-normal outline-none ring-sky-500 focus:ring-2"
                  />
                </label>
                <label className="grid gap-1.5 text-sm font-semibold">
                  Image description (alt text)
                  <input
                    value={draft.alt}
                    onChange={(event) => updateDraft("alt", event.target.value)}
                    placeholder="Diagram of a eukaryotic cell"
                    className="rounded-xl border border-zinc-200 px-3.5 py-3 font-normal outline-none ring-sky-500 focus:ring-2"
                  />
                </label>
                <label className="grid gap-1.5 text-sm font-semibold">
                  Hint{" "}
                  <span className="font-normal text-zinc-400">(optional)</span>
                  <textarea
                    value={draft.hint}
                    onChange={(event) =>
                      updateDraft("hint", event.target.value)
                    }
                    placeholder="Think about the organelle that produces ATP."
                    rows={3}
                    className="resize-y rounded-xl border border-zinc-200 px-3.5 py-3 font-normal outline-none ring-sky-500 focus:ring-2"
                  />
                </label>
              </div>}
            </section>

            <section className="order-3 rounded-3xl border border-zinc-200 bg-zinc-950 p-5 text-zinc-100 shadow-sm sm:p-7">
              <div className="mb-4 flex items-start justify-between gap-4">
                <button
                  type="button"
                  onClick={() => toggleSection("json")}
                  aria-expanded={!collapsedSections.json}
                  className="text-left"
                >
                  <span className="block text-lg font-bold">
                    3. Copy question JSON
                  </span>
                  <span className="block text-sm text-zinc-400">
                    Paste this into a section&apos;s questions array.
                  </span>
                </button>
                <button
                  type="button"
                  onClick={copyJson}
                  className="shrink-0 rounded-xl bg-white px-3.5 py-2 text-sm font-bold text-zinc-900 transition hover:bg-sky-100"
                >
                  {copyState === "copied" ? "Copied!" : "Copy JSON"}
                </button>
              </div>
              {!collapsedSections.json && copyState === "error" && (
                <p className="mb-3 text-xs text-rose-300">
                  Clipboard access was blocked. Select and copy the JSON
                  manually.
                </p>
              )}
              {!collapsedSections.json && <textarea
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
                className="min-h-[360px] w-full resize-y rounded-2xl bg-zinc-900 p-4 font-mono text-xs leading-6 text-sky-100 outline-none ring-sky-500 focus:ring-2"
              />}
              {!collapsedSections.json && jsonError && (
                <p className="mt-3 text-xs text-rose-300">{jsonError}</p>
              )}
              {!collapsedSections.json && <p className="mt-4 text-xs text-zinc-500">
                Drafts save automatically in this browser.
              </p>}
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
