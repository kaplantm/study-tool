"use client";

import ChapterList from "@/app/components/flashcards/ChapterList";
import CourseStudyStart from "@/app/components/flashcards/CourseStudyStart";
import SectionList from "@/app/components/flashcards/SectionList";
import StudyModeSelector from "@/app/components/flashcards/StudyModeSelector";
import UnitList from "@/app/components/flashcards/UnitList";
import {
  ChapterOption,
  SectionOption,
  StudyMode,
} from "@/app/components/flashcards/types";
import { courses } from "@/app/lib/courses/courses";
import { useParams, useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { Box, Button, Container, Paper, Stack, Typography } from "@mui/material";

export default function StudyPage() {
  const router = useRouter();
  const { courseId } = useParams();

  const [studyMode, setStudyMode] = useState<StudyMode>(null);
  const [selectedUnitId, setSelectedUnitId] = useState<string | null>(null);
  const [selectedChapterId, setSelectedChapterId] = useState<string | null>(
    null,
  );
  const [selectedSectionIds, setSelectedSectionIds] = useState<string[]>([]);
  const [includeChapterQuestions, setIncludeChapterQuestions] = useState(true);
  const [selectedSectionId, setSelectedSectionId] = useState<string | null>(
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

  const sectionOptions = useMemo<SectionOption[]>(() => {
    if (!selectedCourse) {
      return [];
    }

    return selectedCourse.units.flatMap((unit) =>
      unit.chapters.flatMap((chapter) =>
        chapter.sections.map((section, sectionIndex) => ({
          chapter,
          section,
          sectionIndex,
          unit,
        })),
      ),
    );
  }, [selectedCourse]);

  const handleStudyModeSelect = (mode: StudyMode) => {
    setStudyMode(mode);
    setSelectedUnitId(null);
    setSelectedChapterId(null);
    setSelectedSectionIds([]);
    setIncludeChapterQuestions(true);
    setSelectedSectionId(null);
  };

  const startQuiz = ({
    chapterId,
    sectionId,
    sectionIndex,
    sectionIds,
    includeChapterQuestions,
    unitId,
  }: {
    chapterId?: string;
    sectionId?: string;
    sectionIndex?: number;
    sectionIds?: string[];
    includeChapterQuestions?: boolean;
    unitId?: string;
  } = {}) => {
    if (!selectedCourse) return;
    const params = {
      unitId: unitId ?? "",
      chapterId: chapterId ?? "",
      sectionId: sectionId ?? "",
      sectionIndex: sectionIndex?.toString() ?? "",
      sectionIds: sectionIds?.join(",") ?? "",
      includeMain: includeChapterQuestions === undefined
        ? ""
        : includeChapterQuestions
          ? "true"
          : "false",
      fresh: "true",
      shuffle: shuffleEnabled ? "true" : "false",
    };
    const queryString = new URLSearchParams(params).toString();
    router.push(`/courses/${selectedCourse.id}/study?${queryString}`);
  };

  const handleChangeCourse = () => {
    router.push("/");
  };

  if (!selectedCourse) {
    return (
      <Box sx={{ minHeight: "100vh", py: 6 }}><Container maxWidth="lg">
          <Paper sx={{ p: 3, textAlign: "center" }}>
            <Typography color="text.secondary">
              Course not found
            </Typography>
            <Box sx={{ mt: 2 }}><Button
                onClick={handleChangeCourse}
                variant="outlined">
                Back to courses
            </Button></Box>
          </Paper>
      </Container></Box>
    );
  }

  return (
    <Box sx={{ minHeight: "100vh", py: 6 }}><Container maxWidth="lg" sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
        <Stack spacing={1.5} component="header">
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2 }}>
            <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: "0.2em", fontWeight: 700 }}>
              Flashcard Study
            </Typography>
            <Button
              onClick={handleChangeCourse}
              variant="outlined" size="small">
              ← Back to courses
            </Button>
          </Box>
          <Typography variant="h3" sx={{ fontWeight: 600 }}>{selectedCourse.title}</Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 720 }}>
            {selectedCourse.description}
          </Typography>
        </Stack>

        <Paper sx={{ p: 3 }}><Stack spacing={4}>
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
                  setSelectedChapterId(option.chapter.id);
                  setSelectedSectionIds(option.chapter.sections.map((section) => section.id));
                  setIncludeChapterQuestions(true);
                }}
                selectedSectionIds={selectedSectionIds}
                includeChapterQuestions={includeChapterQuestions}
                onToggleSection={(sectionId) => {
                  setSelectedSectionIds((current) =>
                    current.includes(sectionId)
                      ? current.filter((id) => id !== sectionId)
                      : [...current, sectionId],
                  );
                }}
                onToggleChapterQuestions={() =>
                  setIncludeChapterQuestions((current) => !current)
                }
                onStartQuiz={() => {
                  if (!selectedChapterId) return;
                  startQuiz({
                    chapterId: selectedChapterId,
                    sectionIds: selectedSectionIds,
                    includeChapterQuestions,
                  });
                }}
              />
            )}

            {studyMode === "section" && (
              <SectionList
                options={sectionOptions}
                selectedSectionId={selectedSectionId}
                onSelectSection={(option) => {
                  startQuiz({
                    chapterId: option.chapter.id,
                    sectionId: option.section.id,
                    sectionIndex: option.sectionIndex,
                  });
                }}
              />
            )}

            {studyMode === "course" && (
              <CourseStudyStart onStart={() => startQuiz()} />
            )}
        </Stack></Paper>
      </Container></Box>
  );
}
