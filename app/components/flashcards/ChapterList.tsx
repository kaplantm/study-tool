"use client";

import { ChapterOption } from "./types";
import { useEffect, useRef } from "react";

type ChapterListProps = {
  options: ChapterOption[];
  selectedChapterId: string | null;
  onSelectChapter: (option: ChapterOption) => void;
  selectedSectionIds: string[];
  includeChapterQuestions: boolean;
  onToggleSection: (sectionId: string) => void;
  onToggleChapterQuestions: () => void;
  onStartQuiz: () => void;
};

export default function ChapterList({
  options,
  selectedChapterId,
  onSelectChapter,
  selectedSectionIds,
  includeChapterQuestions,
  onToggleSection,
  onToggleChapterQuestions,
  onStartQuiz,
}: ChapterListProps) {
  const selectedOption = options.find(
    (option) => option.chapter.id === selectedChapterId,
  );
  const hasSelection = includeChapterQuestions || selectedSectionIds.length > 0;
  const selectedQuestionCount = selectedOption
    ? (includeChapterQuestions ? selectedOption.chapter.questions.length : 0) +
      selectedOption.chapter.sections
        .filter((section) => selectedSectionIds.includes(section.id))
        .reduce((total, section) => total + section.questions.length, 0)
    : 0;
  const selectionPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!selectedChapterId || !selectionPanelRef.current) return;
    selectionPanelRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [selectedChapterId]);

  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-base font-semibold">Select a chapter</h4>
      <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.8fr)]">
        <div className="grid gap-3 sm:grid-cols-2">
          {options.map((option) => (
            <button
              key={`${option.chapter.id}${option.unit.number}`}
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

      {selectedOption && (
        <div
          ref={selectionPanelRef}
          className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 lg:sticky lg:top-4 dark:border-zinc-800 dark:bg-zinc-900/60"
        >
          <div className="flex flex-col gap-3">
            <div>
              <p className="font-semibold">Choose what to study</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Select one or more sections, or include the chapter&apos;s main questions.
              </p>
            </div>

            <label className="group flex cursor-pointer items-center gap-3 rounded-xl border border-zinc-200 bg-white p-3 dark:border-zinc-700 dark:bg-zinc-950">
              <input
                type="checkbox"
                checked={includeChapterQuestions}
                onChange={onToggleChapterQuestions}
                className="peer sr-only"
              />
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-zinc-400 bg-white text-transparent transition peer-checked:border-zinc-900 peer-checked:bg-zinc-900 peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-zinc-500 dark:border-zinc-500 dark:bg-zinc-900 dark:peer-checked:border-zinc-100 dark:peer-checked:bg-zinc-100 dark:peer-checked:text-black" aria-hidden="true">✓</span>
              <span className="text-sm font-medium">Main chapter questions</span>
              <span className="ml-auto text-xs text-zinc-500">
                {selectedOption.chapter.questions.length}
              </span>
            </label>

            {selectedOption.chapter.sections.map((section) => (
              <label
                key={section.id}
                className="group flex cursor-pointer items-center gap-3 rounded-xl border border-zinc-200 bg-white p-3 dark:border-zinc-700 dark:bg-zinc-950"
              >
                <input
                  type="checkbox"
                  checked={selectedSectionIds.includes(section.id)}
                  onChange={() => onToggleSection(section.id)}
                  className="peer sr-only"
                />
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-zinc-400 bg-white text-transparent transition peer-checked:border-zinc-900 peer-checked:bg-zinc-900 peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-zinc-500 dark:border-zinc-500 dark:bg-zinc-900 dark:peer-checked:border-zinc-100 dark:peer-checked:bg-zinc-100 dark:peer-checked:text-black" aria-hidden="true">✓</span>
                <span className="flex-1 text-sm font-medium">
                  Section {section.number}: {section.title}
                </span>
                <span className="text-xs text-zinc-500">{section.questions.length}</span>
              </label>
            ))}

            <div className="flex items-center justify-between border-t border-zinc-200 pt-3 text-sm dark:border-zinc-700">
              <span className="font-semibold">Selected questions</span>
              <span className="font-semibold tabular-nums">{selectedQuestionCount}</span>
            </div>

            <button
              type="button"
              onClick={onStartQuiz}
              disabled={!hasSelection}
              className="mt-2 rounded-full bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-zinc-100 dark:text-black dark:hover:bg-zinc-300"
            >
              Start quiz
            </button>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}
