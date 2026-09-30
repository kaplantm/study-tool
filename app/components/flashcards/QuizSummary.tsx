"use client";

import { Question } from "@/app/types";

import { QuizResponse } from "./types";

const correctAnswerText = (question: Question) => {
  if (question.diagram) {
    return question.diagram.targets
      .map(({ id, label }) => `${id}: ${label}`)
      .join(", ");
  }
  if (question.matches?.length) {
    return question.matches
      .map((match) =>
        "values" in match
          ? match.values.join(" — ")
          : `${match.left} — ${match.right}`,
      )
      .join(", ");
  }
  return question.answer;
};

type QuizSummaryProps = {
  totalQuestions: number;
  correctCount: number;
  responses: QuizResponse[];
  quizQuestions: Question[];
  onStudyAnother: () => void;
  onPickNewCourse: () => void;
  flaggedIds: string[];
};

export default function QuizSummary({
  totalQuestions,
  correctCount,
  responses,
  quizQuestions,
  onStudyAnother,
  onPickNewCourse,
  flaggedIds,
}: QuizSummaryProps) {
  // Failed = incorrect in this session
  const incorrectResponses = responses.filter((response) => !response.correct);
  // Flagged = flagged in localStorage, but not failed in this session
  const failedIds = new Set(incorrectResponses.map((r) => r.questionId));
  const flaggedOnlyIds = flaggedIds.filter((id) => !failedIds.has(id));

  return (
    <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <div className="flex flex-col gap-6">
        <div>
          <h2 className="text-2xl font-semibold">Session summary</h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            You answered {correctCount} out of {totalQuestions} correctly.
          </p>
        </div>

        {incorrectResponses.length === 0 && flaggedOnlyIds.length === 0 ? (
          <div className="rounded-2xl bg-emerald-100 p-4 text-sm font-medium text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-200">
            Perfect score! You’re ready to move on.
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            {incorrectResponses.length > 0 && (
              <div className="flex flex-col gap-3">
                <h3 className="text-sm font-semibold uppercase text-zinc-500 dark:text-zinc-400">
                  Failed this session
                </h3>
                <div className="flex flex-col gap-3">
                  {incorrectResponses.map((response) => {
                    const question = quizQuestions.find(
                      (item) => item.id === response.questionId,
                    );
                    if (!question) return null;
                    return (
                      <div
                        key={`response-${response.questionId}`}
                        className="rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-900 dark:border-rose-500/40 dark:bg-rose-500/10 dark:text-rose-200"
                      >
                        <p className="font-semibold">{question.question}</p>
                        <p className="mt-2 text-xs text-rose-700 dark:text-rose-300">
                          Your answer: {response.userAnswer || "(blank)"}
                        </p>
                        <p className="text-xs text-rose-700 dark:text-rose-300">
                          Correct answer: {correctAnswerText(question)}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            {flaggedOnlyIds.length > 0 && (
              <div className="flex flex-col gap-3">
                <h3 className="text-sm font-semibold uppercase text-amber-600 dark:text-amber-300">
                  Flagged for Review
                </h3>
                <div className="flex flex-col gap-3">
                  {flaggedOnlyIds.map((id) => {
                    const question = quizQuestions.find(
                      (item) => item.id === id,
                    );
                    if (!question) return null;
                    return (
                      <div
                        key={`flagged-${id}`}
                        className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900 dark:border-amber-500/40 dark:bg-amber-500/10 dark:text-amber-200"
                      >
                        <p className="font-semibold">{question.question}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        <div className="flex flex-wrap gap-3">
          <button
            onClick={onStudyAnother}
            className="rounded-full bg-zinc-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-zinc-100 dark:text-black dark:hover:bg-zinc-800"
          >
            Study another set
          </button>
          <button
            onClick={onPickNewCourse}
            className="rounded-full border border-zinc-300 px-5 py-2 text-sm font-semibold text-zinc-700 transition hover:border-zinc-500 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-zinc-500"
          >
            Pick a new course
          </button>
        </div>
      </div>
    </section>
  );
}
