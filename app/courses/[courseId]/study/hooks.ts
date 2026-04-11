import { courses } from "@/app/lib/courses/courses";
import { Chapter, Course, Question, Section, Unit } from "@/app/types";
import { useCallback, useEffect, useMemo, useState } from "react";

type QuestionWithId = Question & { id: string };

export function useFlaggedFlashcardIds(key: string) {
  const [flaggedIds, setFlaggedIds] = useState<string[] | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      setFlaggedIds(JSON.parse(localStorage.getItem(key) || "[]"));
    } catch {
      setFlaggedIds([]);
    }
  }, [key]);

  const updateFlaggedIds = (ids: string[]) => {
    setFlaggedIds(ids);
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(ids));
    }
  };

  return [flaggedIds, updateFlaggedIds] as const;
}

const withIds = (questions: Question[]) =>
  questions.map((q) => ({ ...q, id: q.id || q.question }));

export function useQuizQuestions({
  courseId,
  unitId,
  chapterId,
  shuffleEnabled,
}: {
  courseId: string | string[] | undefined;
  unitId?: string | null;
  chapterId?: string | null;
  shuffleEnabled: boolean;
}) {
  const collectQuestionsFromChapter = useCallback(
    (chapter: Chapter): QuestionWithId[] => [
      ...withIds(chapter.questions),
      ...chapter.sections.flatMap((section: Section) =>
        withIds(section.questions),
      ),
    ],
    [],
  );
  const collectQuestionsFromUnit = useCallback(
    (unit: Unit): QuestionWithId[] => [
      ...withIds(unit.questions),
      ...unit.chapters.flatMap((chapter: Chapter) =>
        collectQuestionsFromChapter(chapter),
      ),
    ],
    [collectQuestionsFromChapter],
  );
  const collectQuestionsFromCourse = useCallback(
    (course: Course): QuestionWithId[] =>
      course.units.flatMap((unit) => collectQuestionsFromUnit(unit)),
    [collectQuestionsFromUnit],
  );
  const shuffleQuestions = useCallback((questions: QuestionWithId[]) => {
    const shuffled = [...questions];
    for (let index = shuffled.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [shuffled[index], shuffled[swapIndex]] = [
        shuffled[swapIndex],
        shuffled[index],
      ];
    }
    return shuffled;
  }, []);

  return useMemo((): QuestionWithId[] => {
    const course = courses.find((c) => c.id === courseId);
    if (!course) return [];
    let questions: QuestionWithId[] = [];
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
    return shuffleEnabled ? shuffleQuestions(questions) : questions;
  }, [
    courseId,
    unitId,
    chapterId,
    shuffleEnabled,
    collectQuestionsFromChapter,
    collectQuestionsFromCourse,
    collectQuestionsFromUnit,
    shuffleQuestions,
  ]);
}
