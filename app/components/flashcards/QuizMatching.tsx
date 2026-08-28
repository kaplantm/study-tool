"use client";

import { Question } from "@/app/types";
import { useMemo, useState } from "react";

type MatchingCardProps = {
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
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
};

export default function QuizMatchingCard({
  currentQuestion, currentIndex, totalQuestions, correctCount, onAnswer,
  hintVisible, onToggleHint, isFlagged, onClickFlag,
}: MatchingCardProps) {
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [assignments, setAssignments] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [rightOptions] = useState(() =>
    shuffle(currentQuestion?.matches?.map(({ right }) => right) ?? []),
  );
  const matches = currentQuestion?.matches ?? [];

  const correctPercent = useMemo(() => {
    if (currentIndex === 0) return 0;
    return Math.round((correctCount / currentIndex) * 1000) / 10;
  }, [correctCount, currentIndex]);

  if (!currentQuestion || matches.length === 0) return null;

  const isComplete = matches.every(({ left }) => assignments[left]);
  const isCorrect = matches.every(({ left, right }) => assignments[left] === right);
  const answerText = matches
    .map(({ left }) => `${left} → ${assignments[left] ?? "(blank)"}`)
    .join("; ");

  const selectRight = (right: string) => {
    if (!selectedLeft || isSubmitted) return;
    setAssignments((previous) => {
      const next = { ...previous };
      const priorLeft = Object.keys(next).find((left) => next[left] === right);
      if (priorLeft) delete next[priorLeft];
      next[selectedLeft] = right;
      return next;
    });
    setSelectedLeft(null);
  };

  const colorForPercent = (percent: number) => percent >= 80 ? "#2ecc71" : percent >= 50 ? "#f1c40f" : "#e74c3c";

  return (
    <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between text-sm text-zinc-500 dark:text-zinc-400">
          <span>Question {currentIndex + 1} of {totalQuestions}</span>
          <span style={{ color: colorForPercent(correctPercent) }}>{correctCount} correct ({correctPercent}%)</span>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 text-lg font-semibold dark:border-zinc-800 dark:bg-zinc-900/60">
          {currentQuestion.question}
        </div>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">Select an item on the left, then select its match on the right.</p>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Column A</h2>
            {matches.map(({ left, right }) => {
              const assigned = assignments[left];
              const correct = assigned === right;
              const stateClasses = isSubmitted
                ? correct
                  ? "border-emerald-500 bg-emerald-50 text-emerald-800 dark:bg-emerald-500/10 dark:text-emerald-300"
                  : "border-rose-500 bg-rose-50 text-rose-800 dark:bg-rose-500/10 dark:text-rose-300"
                : selectedLeft === left
                  ? "border-sky-500 bg-sky-50 dark:bg-sky-500/10"
                  : "border-zinc-200 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900";
              return <button key={left} type="button" disabled={isSubmitted} onClick={() => setSelectedLeft(left)} className={`rounded-xl border p-3 text-left text-sm font-medium transition ${stateClasses}`}>
                <span>{left}</span>
                {assigned && <span className="mt-1 block text-xs font-normal opacity-75">{assigned}</span>}
              </button>;
            })}
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Column B</h2>
            {rightOptions.map((right) => <button key={right} type="button" disabled={isSubmitted || !selectedLeft} onClick={() => selectRight(right)} className="rounded-xl border border-zinc-200 p-3 text-left text-sm font-medium transition hover:bg-zinc-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:hover:bg-zinc-900">{right}</button>)}
          </div>
        </div>

        {currentQuestion.hint && !isSubmitted && <div className="flex flex-col gap-2">
          <button onClick={onToggleHint} className="self-start text-xs font-semibold text-zinc-500 underline underline-offset-4">{hintVisible ? "Hide hint" : "Need a hint?"}</button>
          {hintVisible && <div className="rounded-xl bg-amber-50 p-3 text-sm text-amber-900 dark:bg-amber-500/10 dark:text-amber-100">{currentQuestion.hint}</div>}
        </div>}

        {!isSubmitted ? <div className="flex justify-center gap-2">
          <button type="button" onClick={() => onAnswer(false, answerText)} className="rounded-full bg-zinc-900 px-5 py-2 text-sm font-semibold text-white dark:bg-zinc-100 dark:text-black">Skip</button>
          <button type="button" disabled={!isComplete} onClick={() => setIsSubmitted(true)} className="rounded-full bg-sky-600 px-5 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40">Check matches</button>
        </div> : <div className="flex flex-col items-center gap-3">
          <p className={`text-sm font-semibold ${isCorrect ? "text-emerald-600" : "text-rose-600"}`}>{isCorrect ? "All matches are correct." : "Some matches need review."}</p>
          <button type="button" onClick={() => onAnswer(isCorrect, answerText)} className={`rounded-full px-5 py-2 text-sm font-semibold text-white ${isCorrect ? "bg-emerald-600" : "bg-rose-600"}`}>Next</button>
        </div>}
      </div>
      <button onClick={() => onClickFlag(!isFlagged)} className="mt-5 rounded-full bg-amber-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-amber-600">{isFlagged ? "🚩 Remove Flag" : "🚩 Flag for Review"}</button>
    </section>
  );
}
