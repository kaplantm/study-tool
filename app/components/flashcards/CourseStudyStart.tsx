"use client";

type CourseStudyStartProps = {
  onStart: () => void;
};

export default function CourseStudyStart({ onStart }: CourseStudyStartProps) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-dashed border-zinc-300 p-4 dark:border-zinc-700">
      <div>
        <p className="text-sm font-semibold">Entire course</p>
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          Includes every question across all units and chapters.
        </p>
      </div>
      <button
        onClick={onStart}
        className="rounded-full bg-zinc-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-zinc-700 dark:bg-zinc-100 dark:text-black dark:hover:bg-white"
      >
        Start quiz
      </button>
    </div>
  );
}
