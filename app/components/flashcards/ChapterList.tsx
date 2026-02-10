"use client";

import { ChapterOption } from "./types";

type ChapterListProps = {
  options: ChapterOption[];
  selectedChapterId: string | null;
  onSelectChapter: (option: ChapterOption) => void;
};

export default function ChapterList({
  options,
  selectedChapterId,
  onSelectChapter,
}: ChapterListProps) {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-base font-semibold">Select a chapter</h4>
      <div className="grid gap-3 sm:grid-cols-2">
        {options.map((option) => (
          <button
            key={option.chapter.id}
            onClick={() => onSelectChapter(option)}
            className={`rounded-2xl border p-4 text-left transition ${
              selectedChapterId === option.chapter.id
                ? "border-zinc-900 bg-zinc-900 text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-black"
                : "border-zinc-200 bg-zinc-50 hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-900/60"
            }`}
          >
            <p className="text-xs font-semibold uppercase text-zinc-500 dark:text-zinc-400">
              Unit {option.unit.number} · Chapter {option.chapter.number}
            </p>
            <p className="text-lg font-semibold">{option.chapter.title}</p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {option.chapter.description}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
