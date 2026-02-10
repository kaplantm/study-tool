"use client";

import { StudyMode } from "./types";

type StudyModeSelectorProps = {
  studyMode: StudyMode;
  onSelectMode: (mode: StudyMode) => void;
  shuffleEnabled: boolean;
  onToggleShuffle: (value: boolean) => void;
};

export default function StudyModeSelector({
  studyMode,
  onSelectMode,
  shuffleEnabled,
  onToggleShuffle,
}: StudyModeSelectorProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-lg font-semibold">How do you want to study?</h3>
        <label className="flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-300">
          <input
            type="checkbox"
            checked={shuffleEnabled}
            onChange={(event) => onToggleShuffle(event.target.checked)}
            className="h-4 w-4 rounded border-zinc-300 text-zinc-900 focus:ring-0 dark:border-zinc-600"
          />
          Shuffle questions
        </label>
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        <button
          onClick={() => onSelectMode("unit")}
          className={`rounded-2xl border px-4 py-3 text-left transition ${
            studyMode === "unit"
              ? "border-zinc-900 bg-zinc-900 text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-black"
              : "border-zinc-200 bg-zinc-50 hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-900/60"
          }`}
        >
          <p className="text-sm font-semibold">Study by unit</p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Focus on one unit at a time.
          </p>
        </button>
        <button
          onClick={() => onSelectMode("chapter")}
          className={`rounded-2xl border px-4 py-3 text-left transition ${
            studyMode === "chapter"
              ? "border-zinc-900 bg-zinc-900 text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-black"
              : "border-zinc-200 bg-zinc-50 hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-900/60"
          }`}
        >
          <p className="text-sm font-semibold">Study by chapter</p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Drill down into a chapter.
          </p>
        </button>
        <button
          onClick={() => onSelectMode("course")}
          className={`rounded-2xl border px-4 py-3 text-left transition ${
            studyMode === "course"
              ? "border-zinc-900 bg-zinc-900 text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-black"
              : "border-zinc-200 bg-zinc-50 hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-900/60"
          }`}
        >
          <p className="text-sm font-semibold">Study entire course</p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Mix every question together.
          </p>
        </button>
      </div>
    </div>
  );
}
