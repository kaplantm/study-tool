"use client";

import { useState } from "react";

import { Question } from "@/app/types";

type QuizCardProps = {
  currentQuestion: Question | undefined;
  currentIndex: number;
  totalQuestions: number;
  correctCount: number;
  cardFlipped: boolean;
  onFlipCard: () => void;
  onMarkCorrect: () => void;
  onMarkIncorrect: () => void;
  hintVisible: boolean;
  onToggleHint: () => void;
  isFlagged: boolean;
  onClickFlag: (flag: boolean) => void;
};

export default function QuizCard({
  currentQuestion,
  currentIndex,
  totalQuestions,
  correctCount,
  cardFlipped,
  onFlipCard,
  onMarkCorrect,
  onMarkIncorrect,
  hintVisible,
  onToggleHint,
  isFlagged,
  onClickFlag,
}: QuizCardProps) {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  if (!currentQuestion) {
    return null;
  }

  const hasHint = Boolean(currentQuestion.hint);
  const hasMoreInfo = Array.isArray(currentQuestion.moreInfo) && currentQuestion.moreInfo.length > 0;

  return (
    <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between text-sm text-zinc-500 dark:text-zinc-400">
          <span>
            Question {currentIndex + 1} of {totalQuestions}
          </span>
          <span>{correctCount} correct</span>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 text-lg font-semibold text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-100">
          {currentQuestion.question}
        </div>

        {hasHint && !cardFlipped && (
          <div className="flex flex-col gap-2">
            <button
              type="button"
              onClick={onToggleHint}
              className="self-start rounded-full border border-zinc-300 px-4 py-1 text-xs font-semibold text-zinc-600 transition hover:border-zinc-500 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-500"
            >
              {hintVisible ? "Hide hint" : "Show hint"}
            </button>
            {hintVisible && (
              <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900 dark:border-amber-500/40 dark:bg-amber-500/10 dark:text-amber-100">
                {currentQuestion.hint}
              </div>
            )}
          </div>
        )}

        {!cardFlipped ? (
          <div className="flex flex-col gap-3">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Think of your answer, then flip the card to check.
            </p>
            <button
              onClick={onFlipCard}
              className="rounded-full bg-zinc-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-zinc-700 dark:bg-zinc-100 dark:text-black dark:hover:bg-white"
            >
              Flip card
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 dark:border-emerald-500/40 dark:bg-emerald-500/10">
              <p className="text-xs font-semibold uppercase text-emerald-700 dark:text-emerald-300">
                Answer
              </p>
              <p className="mt-1 text-base font-medium text-emerald-900 dark:text-emerald-100">
                {currentQuestion.answer}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Did you get it right?
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => {
                    onClickFlag(true);
                    onMarkIncorrect();
                  }}
                  className="flex-1 rounded-full bg-rose-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-rose-700 dark:bg-rose-500 dark:hover:bg-rose-600"
                >
                  ✗ Incorrect
                </button>
                <button
                  onClick={() => onClickFlag(true)}
                  className="flex-1 rounded-full bg-amber-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-amber-600 dark:bg-amber-400 dark:hover:bg-amber-500"
                >
                  {isFlagged
                    ? "🚩 Keep Flagged for Review"
                    : "🚩 Flag for Review"}
                </button>
                <button
                  onClick={onMarkCorrect}
                  className="flex-1 rounded-full bg-emerald-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600"
                >
                  ✓ Correct
                </button>
              </div>
            </div>

            {hasMoreInfo && (
              <div className="mt-4 flex flex-col gap-3 border-t border-zinc-100 pt-4 dark:border-zinc-800">
                {!showMoreInfo ? (
                  <button
                    onClick={() => setShowMoreInfo(true)}
                    className="self-start rounded-full border border-zinc-300 px-4 py-1 text-xs font-semibold text-zinc-600 transition hover:border-zinc-500 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-500"
                  >
                    💡 More Info
                  </button>
                ) : (
                  <div className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-blue-900 dark:border-blue-500/40 dark:bg-blue-500/10 dark:text-blue-100">
                    <ul className="list-disc list-inside space-y-1">
                      {currentQuestion.moreInfo?.map((info, idx) => (
                        <li key={idx}>{info}</li>
                      ))}
                    </ul>
                    <button
                      onClick={() => setShowMoreInfo(false)}
                      className="mt-2 text-xs font-semibold underline text-blue-700 dark:text-blue-300"
                    >
                      Hide info
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
