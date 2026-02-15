"use client";

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
  flaggedOnlyMode?: boolean;
  flaggedIds: string[];
  setFlaggedIds: (ids: string[]) => void;
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
  flaggedOnlyMode = false,
  flaggedIds,
  setFlaggedIds,
}: QuizCardProps) {
  if (!currentQuestion) {
    return null;
  }

  const hasHint = Boolean(currentQuestion.hint);
  const isFlagged = flaggedIds.includes(currentQuestion.id);

  // Flag/unflag handlers
  const handleFlag = () => {
    if (!isFlagged) {
      setFlaggedIds([...flaggedIds, currentQuestion.id]);
    }
  };
  const handleUnflag = () => {
    setFlaggedIds(flaggedIds.filter((id) => id !== currentQuestion.id));
  };

  return (
    <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between text-sm text-zinc-500 dark:text-zinc-400">
          <span>
            Question {currentIndex + 1} of {totalQuestions}
          </span>
          <span>{correctCount} correct</span>
          <button
            type="button"
            aria-label={isFlagged ? "Flagged for review" : "Flag for review"}
            onClick={isFlagged ? handleUnflag : handleFlag}
            className={`ml-2 flex items-center rounded-full border px-2 py-1 text-xs font-semibold transition ${isFlagged ? "border-amber-400 bg-amber-100 text-amber-700 dark:border-amber-500/40 dark:bg-amber-500/10 dark:text-amber-200" : "border-zinc-300 text-zinc-600 hover:border-zinc-500 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-500"}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={isFlagged ? "#f59e42" : "none"}
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 3v18m0 0l6-6h6V3H6z"
              />
            </svg>
            {isFlagged ? "Flagged" : "Flag"}
          </button>
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
                {flaggedOnlyMode
                  ? "Unflag this card?"
                  : "Did you get it right?"}
              </p>
              <div className="flex flex-wrap gap-3">
                {flaggedOnlyMode ? (
                  <button
                    onClick={handleUnflag}
                    className="flex-1 rounded-full bg-amber-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-amber-600 dark:bg-amber-400 dark:hover:bg-amber-500"
                  >
                    🚩 Unflag
                  </button>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        handleFlag();
                        onMarkIncorrect();
                      }}
                      className="flex-1 rounded-full bg-rose-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-rose-700 dark:bg-rose-500 dark:hover:bg-rose-600"
                    >
                      ✗ Incorrect
                    </button>
                    <button
                      onClick={handleFlag}
                      className="flex-1 rounded-full bg-amber-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-amber-600 dark:bg-amber-400 dark:hover:bg-amber-500"
                    >
                      🚩 Flag for Review
                    </button>
                    <button
                      onClick={onMarkCorrect}
                      className="flex-1 rounded-full bg-emerald-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600"
                    >
                      ✓ Correct
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
