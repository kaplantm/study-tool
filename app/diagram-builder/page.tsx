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
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [firstCorner, setFirstCorner] = useState<Corner | null>(null);
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">(
    "idle",
  );
  const [isLoaded, setIsLoaded] = useState(false);
  const imageInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let savedDraft: BuilderDraft | null = null;
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) savedDraft = { ...emptyDraft, ...JSON.parse(saved) };
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

  const updateDraft = <K extends keyof BuilderDraft>(
    key: K,
    value: BuilderDraft[K],
  ) => {
    setDraft((current) => ({ ...current, [key]: value }));
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
    setSelectedId(null);
    setFirstCorner(null);
    window.localStorage.removeItem(STORAGE_KEY);
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

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(340px,0.65fr)]">
          <section className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-7">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold">1. Place target boxes</h2>
                <p className="text-sm text-zinc-500">
                  {firstCorner
                    ? "Now click the bottom-right corner."
                    : "Click the top-left, then bottom-right corner of each label."}
                </p>
              </div>
              <span className="rounded-full bg-sky-50 px-3 py-1 text-sm font-bold text-sky-700">
                {draft.targets.length} target
                {draft.targets.length === 1 ? "" : "s"}
              </span>
            </div>

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
                className="relative mx-auto w-full cursor-crosshair overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100"
                onClick={handleImageClick}
              >
                <img
                  src={draft.imageUrl}
                  alt={draft.alt || "Diagram preview"}
                  className="block h-auto max-h-[680px] w-full object-contain"
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
                    aria-label={`Target ${target.id}${target.label ? `: ${target.label}` : ""}`}
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
                    className={`absolute grid place-items-center rounded-md border-2 text-sm font-bold shadow-lg transition ${selectedId === target.id ? "border-sky-600 bg-sky-100/50 text-sky-700 ring-4 ring-sky-300/60" : "border-zinc-800 bg-white/50 text-zinc-900 hover:bg-sky-50/60"}`}
                  >
                    {target.id}
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

            {draft.targets.length > 0 && (
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[...draft.targets].reverse().map((target, index) => (
                  <div
                    key={`${target.id}-${target.label}`}
                    className={`rounded-2xl border p-4 transition ${selectedId === target.id ? "border-sky-400 bg-sky-50/50" : "border-zinc-200 bg-zinc-50"}`}
                  >
                    <div className="mb-3 flex items-center justify-between">
                      <span className="grid size-7 place-items-center rounded-full bg-zinc-900 text-xs font-bold text-white">
                        {target.id}
                      </span>
                      <button
                        type="button"
                        onClick={() => removeTarget(target.id)}
                        className="text-xs font-semibold text-zinc-400 hover:text-rose-600"
                      >
                        Remove
                      </button>
                    </div>
                    <label className="block text-xs font-bold uppercase tracking-wide text-zinc-500">
                      Answer label
                    </label>
                    <input
                      defaultValue={target.label}
                      onBlur={(event) =>
                        updateTarget(target.id, { label: event.currentTarget.value })
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
          </section>

          <div className="flex flex-col gap-6">
            <section className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-7">
              <div className="mb-5">
                <h2 className="text-lg font-bold">2. Add question details</h2>
                <p className="text-sm text-zinc-500">
                  These fields map directly to your question JSON.
                </p>
              </div>
              <div className="grid gap-4">
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
              </div>
            </section>

            <section className="rounded-3xl border border-zinc-200 bg-zinc-950 p-5 text-zinc-100 shadow-sm sm:p-7">
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-lg font-bold">3. Copy question JSON</h2>
                  <p className="text-sm text-zinc-400">
                    Paste this into a section&apos;s questions array.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={copyJson}
                  className="shrink-0 rounded-xl bg-white px-3.5 py-2 text-sm font-bold text-zinc-900 transition hover:bg-sky-100"
                >
                  {copyState === "copied" ? "Copied!" : "Copy JSON"}
                </button>
              </div>
              {copyState === "error" && (
                <p className="mb-3 text-xs text-rose-300">
                  Clipboard access was blocked. Select and copy the JSON
                  manually.
                </p>
              )}
              <pre className="max-h-[360px] overflow-auto rounded-2xl bg-zinc-900 p-4 text-xs leading-6 text-sky-100">
                <code>{questionJson}</code>
              </pre>
              <p className="mt-4 text-xs text-zinc-500">
                Drafts save automatically in this browser.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
