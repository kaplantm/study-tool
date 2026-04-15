"use client";

import { Question } from "@/app/types";
import { useEffect, useMemo, useState } from "react";

type MultipleChoiceCardProps = {
  currentQuestion: Question | undefined;
  currentIndex: number;
  totalQuestions: number;
  correctCount: number;
  // We'll use cardFlipped to represent "isAnswered" to keep your parent logic intact
  isAnswered: boolean;
  onRevealAnswer: () => void;
  onMarkCorrect: () => void;
  onMarkIncorrect: () => void;
  hintVisible: boolean;
  onToggleHint: () => void;
  isFlagged: boolean;
  onClickFlag: (flag: boolean) => void;
};

export default function QuizMultipleChoiceCard({
  currentQuestion,
  currentIndex,
  totalQuestions,
  correctCount,
  isAnswered,
  onRevealAnswer,
  onMarkCorrect,
  onMarkIncorrect,
  hintVisible,
  onToggleHint,
  isFlagged,
  onClickFlag,
}: MultipleChoiceCardProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  // Reset local selection when question changes
  useEffect(() => {
    setSelectedOption(null);
  }, [currentQuestion?.id, currentIndex]);

  const correctPercent = useMemo(() => {
    if (currentIndex === 0) return 0;
    const decimal = correctCount / currentIndex;
    const percent = Math.round(decimal * 100 * 10) / 10;
    return percent;
  }, [correctCount, currentIndex]);

  if (!currentQuestion) return null;

  const handleOptionClick = (option: string) => {
    if (isAnswered) return;

    setSelectedOption(option);
    onRevealAnswer(); // This "flips" the state to revealed
  };

  const handleGoToNext = () => {
    if (selectedOption === currentQuestion.answer) {
      onMarkCorrect();
    } else {
      onMarkIncorrect();
    }
  };

  const manyOptions = Boolean(
    currentQuestion.options?.length && currentQuestion.options.length > 6,
  );

  const getColor = (percent: number) => {
    if (percent >= 80) return "#2ecc71"; // Green
    if (percent >= 50) return "#f1c40f"; // Yellow
    return "#e74c3c"; // Red
  };

  return (
    <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between text-sm text-zinc-500 dark:text-zinc-400">
          <span>
            Question {currentIndex + 1} of {totalQuestions}
          </span>
          <span style={{ color: getColor(correctPercent) }}>
            {correctCount} correct ({correctPercent}%)
          </span>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 text-lg font-semibold text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-100">
          {currentQuestion.question}
        </div>

        {/* Options List */}
        <div
          className={`grid gap-3 ${
            manyOptions
              ? "grid-cols-[repeat(auto-fill,minmax(200px,1fr))]"
              : "grid-cols-1"
          }`}
        >
          {currentQuestion.options?.map((option) => {
            const isCorrect = option === currentQuestion.answer;
            const isSelected = option === selectedOption;

            let variantClasses =
              "border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900";

            if (isAnswered) {
              if (isCorrect) {
                variantClasses =
                  "border-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400";
              } else if (isSelected && !isCorrect) {
                variantClasses =
                  "border-rose-500 bg-rose-50 dark:bg-rose-500/10 text-rose-700 dark:text-rose-400";
              } else {
                variantClasses =
                  "opacity-50 border-zinc-200 dark:border-zinc-800";
              }
            }

            return (
              <button
                key={option}
                disabled={isAnswered}
                onClick={() => handleOptionClick(option)}
                className={`w-full rounded-xl border p-4 text-left text-sm font-medium transition-all ${variantClasses}`}
              >
                {option}
              </button>
            );
          })}
        </div>

        {/* Hint Section */}
        {currentQuestion.hint && !isAnswered && (
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

        <div className="mt-2 flex justify-center gap-2 text-center animate-in fade-in slide-in-from-top-1">
          <button
            disabled={isAnswered}
            onClick={handleGoToNext}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition text-white 
      disabled:opacity-50 disabled:cursor-not-allowed bg-zinc-900 hover:bg-zinc-700 dark:bg-zinc-100 dark:text-black dark:hover:bg-white`}
          >
            Skip
          </button>
          <button
            disabled={!isAnswered}
            onClick={handleGoToNext}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition text-white 
    disabled:opacity-40 disabled:cursor-not-allowed
    ${
      isAnswered
        ? selectedOption === currentQuestion.answer
          ? "bg-emerald-600 hover:bg-emerald-500"
          : "bg-rose-600 hover:bg-rose-500"
        : "bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 hover:border-zinc-600 dark:bg-zinc-100 dark:text-black dark:hover:bg-white"
    }`}
          >
            Next
          </button>
        </div>
      </div>
      <button
        onClick={() => onClickFlag(!isFlagged)}
        className="mt-5 flex-1 rounded-full bg-amber-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-amber-600 dark:bg-amber-400 dark:hover:bg-amber-500"
      >
        {isFlagged ? "🚩 Remove Flag" : "🚩 Flag for Review"}
      </button>
    </section>
  );
}
