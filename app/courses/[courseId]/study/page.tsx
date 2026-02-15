"use client";

import QuizCard from "@/app/components/flashcards/QuizCard";
import QuizSummary from "@/app/components/flashcards/QuizSummary";
import { QuizResponse } from "@/app/components/flashcards/types";
import { courses } from "@/app/lib/courses/courses";
import { Chapter, Course, Question, Unit } from "@/app/types";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

const collectQuestionsFromChapter = (chapter: Chapter) => [
  ...chapter.questions,
  ...chapter.sections.flatMap((section) => section.questions),
];

const collectQuestionsFromUnit = (unit: Unit) => [
  ...unit.questions,
  ...unit.chapters.flatMap((chapter) => collectQuestionsFromChapter(chapter)),
];

const collectQuestionsFromCourse = (course: Course) =>
  course.units.flatMap((unit) => collectQuestionsFromUnit(unit));

const shuffleQuestions = (questions: Question[]) => {
  const shuffled = [...questions];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [
      shuffled[swapIndex],
      shuffled[index],
    ];
  }

  return shuffled;
};

export default function StudyPage() {
  const FLAGGED_KEY = "flaggedFlashcardIds";
  const [flaggedIds, setFlaggedIds] = useState<string[] | null>(null);
  const router = useRouter();
  const { courseId } = useParams();
  const searchParams = useSearchParams();
  const [flaggedOnly, setFlaggedOnly] = useState(false);

  // Load flagged IDs from localStorage on mount (client only)
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      setFlaggedIds(JSON.parse(localStorage.getItem(FLAGGED_KEY) || "[]"));
    } catch {
      setFlaggedIds([]);
    }
  }, []);

  // Helper to update flagged IDs in state and localStorage
  const updateFlaggedIds = (ids: string[]) => {
    setFlaggedIds(ids);
    if (typeof window !== "undefined") {
      localStorage.setItem(FLAGGED_KEY, JSON.stringify(ids));
    }
  };
  const shuffleEnabled = searchParams.get("shuffle") === "true";
  const unitId = searchParams.get("unitId");
  const chapterId = searchParams.get("chapterId");

  const quizQuestions = useMemo(() => {
    const course = courses.find((c) => c.id === courseId);
    if (!course) return [];

    let questions: Question[] = [];

    if (chapterId) {
      for (const unit of course.units) {
        const chapter = unit.chapters.find((ch) => ch.id === chapterId);
        if (chapter) {
          questions = collectQuestionsFromChapter(chapter);
          break;
        }
      }
    } else if (unitId) {
      const unit = course.units.find((u) => u.id === unitId);
      if (unit) {
        questions = collectQuestionsFromUnit(unit);
      }
    } else {
      questions = collectQuestionsFromCourse(course);
    }

    if (flaggedOnly && flaggedIds) {
      questions = questions.filter((q) => flaggedIds.includes(q.id));
    }

    return shuffleEnabled ? shuffleQuestions(questions) : questions;
  }, [courseId, unitId, chapterId, shuffleEnabled, flaggedOnly, flaggedIds]);

  console.log("***Quiz questions:", quizQuestions);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardFlipped, setCardFlipped] = useState(false);
  const [responses, setResponses] = useState<QuizResponse[]>([]);
  const [quizComplete, setQuizComplete] = useState(false);
  const [hintVisible, setHintVisible] = useState(false);

  const selectedCourse = useMemo(
    () => courses.find((course) => course.id === courseId) ?? null,
    [courseId],
  );

  const currentQuestion = quizQuestions[currentIndex];
  const totalQuestions = quizQuestions.length;

  // Wait for flaggedIds to load on client before rendering anything that depends on them
  if (flaggedIds === null) return null;

  const handleFlipCard = () => {
    setCardFlipped(true);
  };

  const handleMarkCorrect = () => {
    if (!currentQuestion) return;

    setResponses((prev) => [
      ...prev,
      { questionId: currentQuestion.id, userAnswer: "", correct: true },
    ]);

    moveToNextQuestion();
  };

  const handleMarkIncorrect = () => {
    if (!currentQuestion) return;

    setResponses((prev) => [
      ...prev,
      { questionId: currentQuestion.id, userAnswer: "", correct: false },
    ]);

    moveToNextQuestion();
  };

  const handleToggleFlag = (questionId: string, flag: boolean) => {
    if (flag) {
      updateFlaggedIds([...flaggedIds, questionId]);
    } else {
      updateFlaggedIds(flaggedIds.filter((id) => id !== questionId));
    }

    moveToNextQuestion();
  };

  const moveToNextQuestion = () => {
    if (currentIndex + 1 >= totalQuestions) {
      setQuizComplete(true);
      return;
    }

    setCurrentIndex((prev) => prev + 1);
    setCardFlipped(false);
    setHintVisible(false);
  };
  const handleChangeCourse = () => {
    router.push("/courses");
  };

  if (!selectedCourse) {
    return (
      <div className="min-h-screen bg-zinc-50 px-4 py-12 text-zinc-900 dark:bg-black dark:text-zinc-100">
        <main className="mx-auto flex w-full max-w-5xl flex-col gap-10">
          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
            <p className="text-center text-zinc-600 dark:text-zinc-400">
              Course not found
            </p>
            <div className="mt-4 flex justify-center">
              <button
                onClick={handleChangeCourse}
                className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-600 transition hover:border-zinc-500 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-500"
              >
                Back to courses
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50 px-4 py-12 text-zinc-900 dark:bg-black dark:text-zinc-100">
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-10">
        <header className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              Flashcard Study
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => router.push(`/courses/${selectedCourse.id}`)}
                className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-600 transition hover:border-zinc-500 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-500"
              >
                ← Back to {selectedCourse.title}
              </button>
              <button
                onClick={handleChangeCourse}
                className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-600 transition hover:border-zinc-500 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-500"
              >
                All courses
              </button>
            </div>
          </div>
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">
            {selectedCourse.title}
          </h1>
          <p className="max-w-2xl text-base text-zinc-600 dark:text-zinc-400">
            {selectedCourse.description}
          </p>
        </header>

        <div className="flex items-center gap-4 mb-2">
          <label className="flex items-center gap-2 text-sm font-medium text-amber-700 dark:text-amber-300">
            <input
              type="checkbox"
              checked={flaggedOnly}
              onChange={(e) => setFlaggedOnly(e.target.checked)}
              className="h-4 w-4 rounded border-amber-400 text-amber-600 focus:ring-0 dark:border-amber-500"
            />
            Study flagged cards only
          </label>
        </div>
        {quizQuestions.length > 0 && !quizComplete && (
          <QuizCard
            currentQuestion={currentQuestion}
            currentIndex={currentIndex}
            totalQuestions={totalQuestions}
            correctCount={
              responses.filter((response) => response.correct).length
            }
            cardFlipped={cardFlipped}
            onFlipCard={handleFlipCard}
            onMarkCorrect={handleMarkCorrect}
            onMarkIncorrect={handleMarkIncorrect}
            hintVisible={hintVisible}
            onToggleHint={() => setHintVisible((prev) => !prev)}
            isFlagged={flaggedIds.includes(currentQuestion.id)}
            onClickFlag={(flag: boolean) =>
              handleToggleFlag(currentQuestion.id, flag)
            }
          />
        )}

        {quizComplete && (
          <QuizSummary
            totalQuestions={totalQuestions}
            correctCount={
              responses.filter((response) => response.correct).length
            }
            responses={responses}
            quizQuestions={quizQuestions}
            onStudyAnother={() => router.push(`/courses/${selectedCourse.id}`)}
            onPickNewCourse={handleChangeCourse}
            flaggedIds={flaggedIds}
          />
        )}
      </main>
    </div>
  );
}
