"use client";

import { DiagramLabelTarget, Question } from "@/app/types";
import {
  Box,
  Button,
  Chip,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
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
    <TextField
      size="small"
      value={value}
      onFocus={() => onFocusTarget(targetId)}
      onChange={(event) => setValue(event.target.value)}
      onBlur={() => onCommit(targetId, value)}
      placeholder={placeholder}
      fullWidth
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
    } catch (e) {
      console.log(e);
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
    <Box component="main" sx={{ minHeight: "100vh", py: { xs: 3, sm: 6 } }}>
      <Stack spacing={4}>
        <Box
          component="header"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { sm: "flex-end" },
            justifyContent: "space-between",
            gap: 3,
          }}
        >
          <Stack spacing={1}>
            <Link
              href="/"
              style={{
                color: "inherit",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              ← Back to courses
            </Link>
            <Typography
              variant="overline"
              color="primary"
              sx={{ letterSpacing: "0.18em", fontWeight: 700 }}
            >
              Question tools
            </Typography>
            <Typography
              variant="h3"
              sx={{ fontWeight: 700, fontSize: { xs: "2rem", sm: "2.5rem" } }}
            >
              Diagram question builder
            </Typography>
            <Typography color="text.secondary">
              Upload a diagram, place targets, and copy a ready-to-paste
              question object.
            </Typography>
          </Stack>
          <Button variant="outlined" color="inherit" onClick={resetDraft}>
            Start over
          </Button>
        </Box>

        <Paper component="section" sx={{ p: { xs: 2, sm: 3 }, order: 2 }}>
          <Stack spacing={3}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 2,
              }}
            >
              <Button
                onClick={() => toggleSection("targets")}
                aria-expanded={!collapsedSections.targets}
                sx={{ minWidth: 0, textAlign: "left", display: "block", p: 0 }}
              >
                <Typography sx={{ fontWeight: 700, fontSize: "1.1rem" }}>
                  2. Place target boxes
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {firstCorner
                    ? "Now click the bottom-right corner."
                    : "Click the top-left, then bottom-right corner of each label."}
                </Typography>
              </Button>
              <Chip
                color="primary"
                label={`${draft.targets.length} target${draft.targets.length === 1 ? "" : "s"}`}
              />
            </Box>

            {!collapsedSections.targets && (
              <Box
                sx={{
                  display: "grid",
                  gap: 2.5,
                  gridTemplateColumns: {
                    xs: "1fr",
                    lg: "minmax(0, 1fr) minmax(230px, 300px)",
                  },
                  alignItems: "start",
                }}
              >
                <Box>
                  {!draft.imageUrl ? (
                    <Button
                      variant="outlined"
                      onClick={() => imageInputRef.current?.click()}
                      sx={{
                        minHeight: 360,
                        width: "100%",
                        flexDirection: "column",
                        gap: 1,
                        borderStyle: "dashed",
                        bgcolor: "action.hover",
                      }}
                    >
                      <Typography variant="h3" aria-hidden="true">
                        ＋
                      </Typography>
                      <Typography sx={{ fontWeight: 700 }}>
                        Upload a diagram
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        PNG, JPG, GIF, or WebP from your computer
                      </Typography>
                    </Button>
                  ) : (
                    <Box
                      onClick={handleImageClick}
                      sx={{
                        position: "relative",
                        mx: "auto",
                        width: "fit-content",
                        maxWidth: "100%",
                        cursor: "crosshair",
                        overflow: "visible",
                        border: 1,
                        borderColor: "divider",
                        borderRadius: 2,
                        bgcolor: "action.hover",
                      }}
                    >
                      <Box
                        component="img"
                        src={draft.imageUrl}
                        alt={draft.alt || "Diagram preview"}
                        sx={{
                          display: "block",
                          maxWidth: "100%",
                          maxHeight: 680,
                          height: "auto",
                          borderRadius: 2,
                        }}
                      />
                      {firstCorner && (
                        <Box
                          aria-hidden="true"
                          sx={{
                            position: "absolute",
                            left: `${firstCorner.x}%`,
                            top: `${firstCorner.y}%`,
                            width: 16,
                            height: 16,
                            transform: "translate(-50%, -50%)",
                            border: 2,
                            borderColor: "common.white",
                            borderRadius: "50%",
                            bgcolor: "primary.main",
                            boxShadow: 2,
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
                          sx={{
                            position: "absolute",
                            left: `${target.x}%`,
                            top: `${target.y}%`,
                            width: `${target.width ?? 0}%`,
                            height: `${target.height ?? 0}%`,
                            minWidth: 0,
                            p: 0,
                            border: 2,
                            borderColor: "text.primary",
                            borderRadius: 1,
                            bgcolor: "rgba(255,255,255,.5)",
                            color: "text.primary",
                            ...(selectedId === target.id
                              ? {
                                  outline: "2px solid",
                                  outlineColor: "primary.main",
                                  outlineOffset: 2,
                                }
                              : {}),
                          }}
                        >
                          <Box
                            component="span"
                            sx={{
                              position: "absolute",
                              right: -16,
                              top: -16,
                              zIndex: 1,
                              minWidth: 20,
                              height: 20,
                              px: 0.5,
                              display: "grid",
                              placeItems: "center",
                              border: 2,
                              borderColor: "common.white",
                              borderRadius: "50%",
                              bgcolor: target.label.trim()
                                ? "success.main"
                                : "error.main",
                              color: "common.white",
                              fontSize: 10,
                              fontWeight: 700,
                            }}
                          >
                            {target.id}
                          </Box>
                        </Button>
                      ))}
                    </Box>
                  )}
                  <input
                    ref={imageInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    style={{ display: "none" }}
                  />
                  {draft.imageUrl && (
                    <Button
                      size="small"
                      onClick={() => imageInputRef.current?.click()}
                      sx={{ mt: 1 }}
                    >
                      Replace image
                    </Button>
                  )}
                </Box>

                <Paper
                  component="aside"
                  sx={{
                    p: 2,
                    bgcolor: "action.hover",
                    position: { lg: "sticky" },
                    top: { lg: 16 },
                    maxHeight: { lg: 680 },
                    overflowY: { lg: "auto" },
                  }}
                >
                  <Stack spacing={1.5}>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                        Target labels
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Add labels here while keeping the diagram in view.
                      </Typography>
                      {draft.targets.length > 0 && (
                        <Typography
                          variant="caption"
                          sx={{ display: "block", mt: 1 }}
                        >
                          <Box
                            component="span"
                            sx={{ color: "success.main", fontWeight: 700 }}
                          >
                            {
                              draft.targets.filter((target) =>
                                target.label.trim(),
                              ).length
                            }{" "}
                            labeled
                          </Box>{" "}
                          ·{" "}
                          <Box
                            component="span"
                            sx={{ color: "error.main", fontWeight: 700 }}
                          >
                            {
                              draft.targets.filter(
                                (target) => !target.label.trim(),
                              ).length
                            }{" "}
                            missing
                          </Box>
                        </Typography>
                      )}
                    </Box>
                    {draft.targets.length === 0 ? (
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          p: 2,
                          textAlign: "center",
                          border: 1,
                          borderStyle: "dashed",
                          borderColor: "divider",
                          borderRadius: 2,
                          bgcolor: "background.paper",
                        }}
                      >
                        Draw a box on the diagram to add a target.
                      </Typography>
                    ) : (
                      <Stack spacing={1.5}>
                        {[...draft.targets].reverse().map((target, index) => (
                          <Paper
                            key={target.id}
                            sx={{
                              p: 2,
                              borderColor: target.label.trim()
                                ? "success.light"
                                : "error.light",
                              ...(selectedId === target.id
                                ? {
                                    outline: "2px solid",
                                    outlineColor: "primary.main",
                                  }
                                : {}),
                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                gap: 1,
                                alignItems: "center",
                              }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 1,
                                }}
                              >
                                <Chip
                                  size="small"
                                  label={target.id}
                                  color="default"
                                />
                                <Typography
                                  variant="caption"
                                  sx={{
                                    color: target.label.trim()
                                      ? "success.main"
                                      : "error.main",
                                    fontWeight: 700,
                                  }}
                                >
                                  {target.label.trim()
                                    ? "✓ Labeled"
                                    : "! Missing label"}
                                </Typography>
                              </Box>
                              <Button
                                size="small"
                                color="error"
                                onClick={() => removeTarget(target.id)}
                              >
                                Remove
                              </Button>
                            </Box>
                            <Typography
                              variant="caption"
                              sx={{
                                display: "block",
                                mt: 1.5,
                                mb: 0.5,
                                fontWeight: 700,
                              }}
                            >
                              Answer label
                            </Typography>
                            <TargetLabelInput
                              targetId={target.id}
                              label={target.label}
                              onFocusTarget={selectTarget}
                              onCommit={commitTargetLabel}
                              placeholder={`e.g. ${index === 0 ? "Mitochondrion" : "Cell membrane"}`}
                            />
                            <Typography
                              variant="caption"
                              color="text.secondary"
                            >
                              Box: {target.width}% wide × {target.height}% high
                            </Typography>
                          </Paper>
                        ))}
                      </Stack>
                    )}
                  </Stack>
                </Paper>
              </Box>
            )}
          </Stack>
        </Paper>

        <Paper component="section" sx={{ p: { xs: 2, sm: 3 }, order: 1 }}>
          <Button
            onClick={() => toggleSection("details")}
            aria-expanded={!collapsedSections.details}
            sx={{ display: "block", p: 0, mb: 2, textAlign: "left" }}
          >
            <Typography sx={{ fontWeight: 700, fontSize: "1.1rem" }}>
              1. Add question details
            </Typography>
            <Typography variant="body2" color="text.secondary">
              These fields map directly to your question JSON.
            </Typography>
          </Button>
          {!collapsedSections.details && (
            <Stack spacing={2}>
              <TextField
                label="Question prompt"
                value={draft.question}
                onChange={(event) =>
                  updateDraft("question", event.target.value)
                }
                placeholder="Label the structures in this diagram."
                fullWidth
              />
              <TextField
                label="Image description (alt text)"
                value={draft.alt}
                onChange={(event) => updateDraft("alt", event.target.value)}
                placeholder="Diagram of a eukaryotic cell"
                fullWidth
              />
              <TextField
                label="Hint (optional)"
                value={draft.hint}
                onChange={(event) => updateDraft("hint", event.target.value)}
                placeholder="Think about the organelle that produces ATP."
                multiline
                rows={3}
                fullWidth
              />
            </Stack>
          )}
        </Paper>

        <Paper
          component="section"
          sx={{
            p: { xs: 2, sm: 3 },
            bgcolor: "grey.900",
            color: "common.white",
            order: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: 2,
              mb: 2,
            }}
          >
            <Button
              onClick={() => toggleSection("json")}
              aria-expanded={!collapsedSections.json}
              sx={{
                display: "block",
                p: 0,
                textAlign: "left",
                color: "inherit",
              }}
            >
              <Typography sx={{ fontWeight: 700, fontSize: "1.1rem" }}>
                3. Copy question JSON
              </Typography>
              <Typography variant="body2" sx={{ color: "grey.400" }}>
                Paste this into a section&apos;s questions array.
              </Typography>
            </Button>
            <Button
              variant="contained"
              color="inherit"
              onClick={copyJson}
              sx={{ color: "grey.900", flexShrink: 0 }}
            >
              {copyState === "copied" ? "Copied!" : "Copy JSON"}
            </Button>
          </Box>
          {!collapsedSections.json && copyState === "error" && (
            <Typography
              variant="caption"
              sx={{ display: "block", mb: 1, color: "error.light" }}
            >
              Clipboard access was blocked. Select and copy the JSON manually.
            </Typography>
          )}
          {!collapsedSections.json && (
            <TextField
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
              multiline
              minRows={16}
              fullWidth
              sx={{
                "& .MuiInputBase-root": {
                  bgcolor: "grey.800",
                  color: "primary.200",
                  fontFamily: "monospace",
                  fontSize: "0.75rem",
                  lineHeight: 1.8,
                },
                "& fieldset": { border: 0 },
              }}
            />
          )}
          {!collapsedSections.json && jsonError && (
            <Typography
              variant="caption"
              sx={{ display: "block", mt: 1, color: "error.light" }}
            >
              {jsonError}
            </Typography>
          )}
          {!collapsedSections.json && (
            <Typography
              variant="caption"
              sx={{ display: "block", mt: 2, color: "grey.500" }}
            >
              Drafts save automatically in this browser.
            </Typography>
          )}
        </Paper>
      </Stack>
    </Box>
  );
}
