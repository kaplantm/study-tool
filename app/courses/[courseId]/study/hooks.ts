import { courses } from "@/app/lib/courses/courses";
import { Chapter, Course, Question, Section, Unit } from "@/app/types";
import { useCallback, useEffect, useMemo, useState } from "react";

type QuestionWithId = Question & { id: string };

export type QuestionStats = {
  correct: number;
  incorrect: number;
};

export type QuestionStatsMap = Record<string, QuestionStats>;

export const readQuestionStats = (key: string): QuestionStatsMap => {
  if (typeof window === "undefined") return {};
  try {
    const stored = JSON.parse(localStorage.getItem(key) || "{}");
    return stored && typeof stored === "object" ? stored : {};
  } catch {
    return {};
  }
};

export const recordQuestionResult = (
  key: string,
  questionId: string,
  correct: boolean,
) => {
  if (typeof window === "undefined") return;
  const stats = readQuestionStats(key);
  const previous = stats[questionId] ?? { correct: 0, incorrect: 0 };
  stats[questionId] = {
    correct: previous.correct + (correct ? 1 : 0),
    incorrect: previous.incorrect + (correct ? 0 : 1),
  };
  localStorage.setItem(key, JSON.stringify(stats));
};

export function useFlaggedFlashcardIds(key: string) {
  const [flaggedIds, setFlaggedIds] = useState<string[] | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      // eslint-disable-next-line react-hooks/set-state-in-effect
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
  sectionId,
  sectionIndex,
  sectionIds,
  includeChapterQuestions,
  shuffleEnabled,
}: {
  courseId: string | string[] | undefined;
  unitId?: string | null;
  chapterId?: string | null;
  sectionId?: string | null;
  sectionIndex?: string | null;
  sectionIds?: string[] | null;
  includeChapterQuestions?: boolean;
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
    let sectionFound = false;
    if (sectionId) {
      const index = Number(sectionIndex);
      if (chapterId && Number.isInteger(index) && index >= 0) {
        for (const unit of course.units) {
          const chapter = unit.chapters.find((ch) => ch.id === chapterId);
          const section = chapter?.sections[index];
          if (section?.id === sectionId) {
            questions = withIds(section.questions);
            sectionFound = true;
            break;
          }
        }
      }

      if (!sectionFound) {
        for (const unit of course.units) {
          for (const chapter of unit.chapters) {
            const section = chapter.sections.find((s) => s.id === sectionId);
            if (section) {
              questions = withIds(section.questions);
              sectionFound = true;
              break;
            }
          }
          if (sectionFound) break;
        }
      }
    } else if (chapterId) {
      for (const unit of course.units) {
        const chapter = unit.chapters.find((ch) => ch.id === chapterId);
        if (chapter) {
          if (sectionIds === null || sectionIds === undefined) {
            questions = collectQuestionsFromChapter(chapter);
          } else {
            questions = [
              ...(includeChapterQuestions ? withIds(chapter.questions) : []),
              ...chapter.sections
                .filter((section) => sectionIds.includes(section.id))
                .flatMap((section) => withIds(section.questions)),
            ];
          }
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
    sectionId,
    sectionIndex,
    sectionIds,
    includeChapterQuestions,
    shuffleEnabled,
    collectQuestionsFromChapter,
    collectQuestionsFromCourse,
    collectQuestionsFromUnit,
    shuffleQuestions,
  ]);
}
