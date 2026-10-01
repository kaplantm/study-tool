"use client";

import { Question } from "@/app/types";
import { useMemo, useState } from "react";

type DiagramLabelingCardProps = {
  currentQuestion: Question | undefined;
  currentIndex: number;
  totalQuestions: number;
  correctCount: number;
  onAnswer: (correct: boolean, userAnswer: string) => void;
  hintVisible: boolean;
  onToggleHint: () => void;
  isFlagged: boolean;
  onClickFlag: (flag: boolean) => void;
};

const shuffle = <T,>(items: T[]) => {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [
      shuffled[swapIndex],
      shuffled[index],
    ];
  }
  return shuffled;
};

export default function QuizDiagramLabelingCard({
  currentQuestion,
  currentIndex,
  totalQuestions,
  correctCount,
  onAnswer,
  hintVisible,
  onToggleHint,
  isFlagged,
  onClickFlag,
}: DiagramLabelingCardProps) {
  const diagram = currentQuestion?.diagram;
  const [selectedLabel, setSelectedLabel] = useState<string | null>(null);
  const [assignments, setAssignments] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [labels] = useState(() =>
    shuffle(diagram?.targets.map(({ label }) => label) ?? []),
  );

  const correctPercent = useMemo(() => {
    if (currentIndex === 0) return 0;
    return Math.round((correctCount / currentIndex) * 1000) / 10;
  }, [correctCount, currentIndex]);

  if (!currentQuestion || !diagram || diagram.targets.length === 0) return null;

  const isComplete = diagram.targets.every(({ id }) => assignments[id]);
  const isCorrect = diagram.targets.every(
    ({ id, label }) => assignments[id] === label,
  );
  const answerText = diagram.targets
    .map(({ id }) => `${id}: ${assignments[id] ?? "(blank)"}`)
    .join("; ");

  const assignLabel = (targetId: string) => {
    if (!selectedLabel || isSubmitted) return;
    setAssignments((previous) => {
      const next = { ...previous };
      const previousTarget = Object.keys(next).find(
        (id) => next[id] === selectedLabel,
      );
      if (previousTarget) delete next[previousTarget];
      next[targetId] = selectedLabel;
      return next;
    });
    setSelectedLabel(null);
  };

  return (
    <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between text-sm text-zinc-500 dark:text-zinc-400">
          <span>
            Question {currentIndex + 1} of {totalQuestions}
          </span>
          <span>
            {correctCount} correct ({correctPercent}%)
          </span>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 text-lg font-semibold dark:border-zinc-800 dark:bg-zinc-900/60">
          {currentQuestion.question}
        </div>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Select a label below, then click its numbered box on the diagram.
        </p>

        <div className="relative mx-auto w-full max-w-3xl overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">
          <img
            src={diagram.imageUrl}
            alt={diagram.alt}
            className="block h-auto w-full"
          />
          {diagram.targets.map(({ id, label, x, y, width, height }) => {
            const assigned = assignments[id];
            const correct = assigned === label;
            const isRectangle = width !== undefined && height !== undefined;
            const stateClasses = isSubmitted
              ? correct
                ? "border-emerald-600 bg-white text-emerald-700"
                : "border-rose-600 bg-white text-rose-700"
              : assigned
                ? "border-sky-600 bg-white text-sky-700"
                : "border-zinc-800 bg-white text-zinc-900 hover:bg-zinc-100";
            return (
              <button
                key={id}
                type="button"
                aria-label={`Target ${id}`}
                disabled={isSubmitted || !selectedLabel}
                onClick={() => assignLabel(id)}
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  ...(isRectangle
                    ? { width: `${width}%`, height: `${height}%` }
                    : { transform: "translate(-50%, -50%)" }),
                }}
                className={`absolute grid place-items-center border-2 text-sm font-bold shadow-lg transition disabled:cursor-not-allowed ${isRectangle ? "rounded-md" : "size-9 -translate-x-1/2 -translate-y-1/2 rounded-full"} ${stateClasses}`}
              >
                {isRectangle ? (
                  <span className="absolute right-1 top-1 grid size-6 place-items-center rounded-full border border-current bg-white px-1 text-xs leading-none dark:bg-zinc-950">
                    {id}
                  </span>
                ) : (
                  id
                )}
              </button>
            );
          })}
        </div>

        <div className="flex flex-wrap gap-2">
          {labels.map((label) => (
            <button
              key={label}
              type="button"
              disabled={isSubmitted}
              onClick={() => setSelectedLabel(label)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${selectedLabel === label ? "border-sky-500 bg-sky-50 text-sky-800 dark:bg-sky-500/10 dark:text-sky-300" : "border-zinc-200 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"}`}
            >
              {label}
            </button>
          ))}
        </div>

        {isSubmitted && (
          <div className="grid gap-2 sm:grid-cols-2">
            {diagram.targets.map(({ id, label }) => (
              <p
                key={id}
                className={`rounded-lg p-2 text-sm ${assignments[id] === label ? "bg-emerald-50 text-emerald-800 dark:bg-emerald-500/10 dark:text-emerald-300" : "bg-rose-50 text-rose-800 dark:bg-rose-500/10 dark:text-rose-300"}`}
              >
                {id}. {label}
              </p>
            ))}
          </div>
        )}

        {currentQuestion.hint && !isSubmitted && (
          <div className="flex flex-col gap-2">
            <button
              onClick={onToggleHint}
              className="self-start text-xs font-semibold text-zinc-500 underline underline-offset-4"
            >
              {hintVisible ? "Hide hint" : "Need a hint?"}
            </button>
            {hintVisible && (
              <div className="rounded-xl bg-amber-50 p-3 text-sm text-amber-900 dark:bg-amber-500/10 dark:text-amber-100">
                {currentQuestion.hint}
              </div>
            )}
          </div>
        )}

        {!isSubmitted ? (
          <div className="flex justify-center gap-2">
            <button
              type="button"
              onClick={() => onAnswer(false, answerText)}
              className="rounded-full bg-zinc-900 px-5 py-2 text-sm font-semibold text-white dark:bg-zinc-100 dark:text-black"
            >
              Skip
            </button>
            <button
              type="button"
              disabled={!isComplete}
              onClick={() => setIsSubmitted(true)}
              className="rounded-full bg-sky-600 px-5 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40"
            >
              Check labels
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3">
            <p
              className={`text-sm font-semibold ${isCorrect ? "text-emerald-600" : "text-rose-600"}`}
            >
              {isCorrect
                ? "All labels are correct."
                : "Some labels need review."}
            </p>
            <button
              type="button"
              onClick={() => onAnswer(isCorrect, answerText)}
              className={`rounded-full px-5 py-2 text-sm font-semibold text-white ${isCorrect ? "bg-emerald-600" : "bg-rose-600"}`}
            >
              Next
            </button>
          </div>
        )}
      </div>
      <button
        onClick={() => onClickFlag(!isFlagged)}
        className="mt-5 rounded-full bg-amber-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-amber-600"
      >
        {isFlagged ? "🚩 Remove Flag" : "🚩 Flag for Review"}
      </button>
    </section>
  );
}
