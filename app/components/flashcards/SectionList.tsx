"use client";

import { SectionOption } from "./types";

type SectionListProps = {
  options: SectionOption[];
  selectedSectionId: string | null;
  onSelectSection: (option: SectionOption) => void;
};

export default function SectionList({
  options,
  selectedSectionId,
  onSelectSection,
}: SectionListProps) {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-base font-semibold">Select a section</h4>
      <div className="grid gap-3 sm:grid-cols-2">
        {options.map((option) => (
          <button
            key={`${option.unit.id}${option.chapter.id}${option.sectionIndex}`}
            onClick={() => onSelectSection(option)}
            className={`rounded-2xl border p-4 text-left transition ${
              selectedSectionId === option.section.id
                ? "border-zinc-900 bg-zinc-900 text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-black"
                : "border-zinc-200 bg-zinc-50 hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-900/60"
            }`}
          >
            <p className="text-xs font-semibold uppercase text-zinc-500 dark:text-zinc-400">
              Unit {option.unit.number} · Chapter {option.chapter.number} · Section {option.section.number}
            </p>
            <p className="text-lg font-semibold">{option.section.title}</p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {option.section.description}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
