"use client";

import ChapterList from "@/app/components/flashcards/ChapterList";
import CourseStudyStart from "@/app/components/flashcards/CourseStudyStart";
import StudyModeSelector from "@/app/components/flashcards/StudyModeSelector";
import UnitList from "@/app/components/flashcards/UnitList";
import { ChapterOption, StudyMode } from "@/app/components/flashcards/types";
import { courses } from "@/app/lib/courses/courses";
import { useParams, useRouter } from "next/navigation";
import { useMemo, useState } from "react";

export default function StudyPage() {
  const router = useRouter();
  const { courseId } = useParams();

  const [studyMode, setStudyMode] = useState<StudyMode>(null);
  const [selectedUnitId, setSelectedUnitId] = useState<string | null>(null);
  const [selectedChapterId, setSelectedChapterId] = useState<string | null>(
    null,
  );
  const [shuffleEnabled, setShuffleEnabled] = useState(true);

  const selectedCourse = useMemo(
    () => courses.find((course) => course.id === courseId) ?? null,
    [courseId],
  );

  const chapterOptions = useMemo<ChapterOption[]>(() => {
    if (!selectedCourse) {
      return [];
    }

    return selectedCourse.units.flatMap((unit) =>
      unit.chapters.map((chapter) => ({ chapter, unit })),
    );
  }, [selectedCourse]);

  const handleStudyModeSelect = (mode: StudyMode) => {
    setStudyMode(mode);
    setSelectedUnitId(null);
    setSelectedChapterId(null);
  };

  const startQuiz = ({
    chapterId,
    unitId,
  }: {
    chapterId?: string;
    unitId?: string;
  } = {}) => {
    if (!selectedCourse) return;
    const params = {
      unitId: unitId ?? "",
      chapterId: chapterId ?? "",
      shuffle: shuffleEnabled ? "true" : "false",
    };
    const queryString = new URLSearchParams(params).toString();
    router.push(`/courses/${selectedCourse.id}/study?${queryString}`);
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
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            Flashcard Study
          </p>
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">
            {selectedCourse.title}
          </h1>
          <p className="max-w-2xl text-base text-zinc-600 dark:text-zinc-400">
            {selectedCourse.description}
          </p>
        </header>

        <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
          <div className="flex flex-col gap-8">
            <StudyModeSelector
              studyMode={studyMode}
              onSelectMode={handleStudyModeSelect}
              shuffleEnabled={shuffleEnabled}
              onToggleShuffle={setShuffleEnabled}
            />

            {studyMode === "unit" && (
              <UnitList
                units={selectedCourse.units}
                selectedUnitId={selectedUnitId}
                onSelectUnit={(unit) => startQuiz({ unitId: unit.id })}
              />
            )}

            {studyMode === "chapter" && (
              <ChapterList
                options={chapterOptions}
                selectedChapterId={selectedChapterId}
                onSelectChapter={(option) => {
                  startQuiz({
                    chapterId: option.chapter.id,
                  });
                }}
              />
            )}

            {studyMode === "course" && (
              <CourseStudyStart onStart={() => startQuiz()} />
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
