"use client";

import { ChapterOption } from "./types";
import { useEffect, useRef } from "react";
import {
  Box,
  Button,
  ButtonBase,
  Checkbox,
  FormControlLabel,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

type ChapterListProps = {
  options: ChapterOption[];
  selectedChapterId: string | null;
  onSelectChapter: (option: ChapterOption) => void;
  selectedSectionIds: string[];
  includeChapterQuestions: boolean;
  onToggleSection: (sectionId: string) => void;
  onToggleChapterQuestions: () => void;
  onStartQuiz: () => void;
};

export default function ChapterList({
  options,
  selectedChapterId,
  onSelectChapter,
  selectedSectionIds,
  includeChapterQuestions,
  onToggleSection,
  onToggleChapterQuestions,
  onStartQuiz,
}: ChapterListProps) {
  const selectedOption = options.find(
    (option) => option.chapter.id === selectedChapterId,
  );
  const hasSelection = includeChapterQuestions || selectedSectionIds.length > 0;
  const selectedQuestionCount = selectedOption
    ? (includeChapterQuestions ? selectedOption.chapter.questions.length : 0) +
      selectedOption.chapter.sections
        .filter((section) => selectedSectionIds.includes(section.id))
        .reduce((total, section) => total + section.questions.length, 0)
    : 0;
  const selectionPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!selectedChapterId || !selectionPanelRef.current) return;
    selectionPanelRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [selectedChapterId]);

  return (
    <Stack spacing={2}>
      <Typography variant="h6">Select a chapter</Typography>
      <Box sx={{ display: "grid", gap: 3, gridTemplateColumns: { xs: "1fr", lg: "minmax(0, 1fr) 320px" }, alignItems: "start" }}>
        <Box sx={{ display: "grid", gap: 1.5, gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" } }}>
          {options.map((option) => (
            <ButtonBase
              key={`${option.chapter.id}${option.unit.number}`}
              onClick={() => onSelectChapter(option)}
              sx={{
                display: "block",
                p: 2,
                border: 1,
                textAlign: "left",
                borderColor:
                  selectedChapterId === option.chapter.id
                    ? "primary.main"
                    : "divider",
                bgcolor:
                  selectedChapterId === option.chapter.id
                    ? "primary.main"
                    : "action.hover",
                color:
                  selectedChapterId === option.chapter.id
                    ? "primary.contrastText"
                    : "text.primary",
                "&:hover": { borderColor: "text.secondary" },
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  display: "block",
                  fontWeight: 700,
                  textTransform: "uppercase",
                }}
                color={
                  selectedChapterId === option.chapter.id
                    ? "inherit"
                    : "text.secondary"
                }
              >
                Unit {option.unit.number} · Chapter {option.chapter.number}
              </Typography>
              <Typography variant="h6">{option.chapter.title}</Typography>
              <Typography
                variant="body2"
                color={
                  selectedChapterId === option.chapter.id
                    ? "inherit"
                    : "text.secondary"
                }
              >
                {option.chapter.description}
              </Typography>
            </ButtonBase>
          ))}
        </Box>

      {selectedOption && (
        <Paper
          ref={selectionPanelRef}
          sx={{ p: 2, position: { lg: "sticky" }, top: { lg: 16 } }}
        >
          <Stack spacing={1.5}>
            <Box>
              <Typography sx={{ fontWeight: 700 }}>Choose what to study</Typography>
              <Typography variant="body2" color="text.secondary">
                Select one or more sections, or include the chapter&apos;s main questions.
              </Typography>
            </Box>

            <FormControlLabel control={<Checkbox
                checked={includeChapterQuestions}
                onChange={onToggleChapterQuestions}
              />} label={`Main chapter questions (${selectedOption.chapter.questions.length})`} />

            {selectedOption.chapter.sections.map((section) => (
              <FormControlLabel
                key={section.id}
                control={<Checkbox
                  checked={selectedSectionIds.includes(section.id)}
                  onChange={() => onToggleSection(section.id)}
                />} label={`Section ${section.number}: ${section.title} (${section.questions.length})`} />
            ))}

            <Box sx={{ display: "flex", justifyContent: "space-between", borderTop: 1, borderColor: "divider", pt: 1 }}>
              <Typography sx={{ fontWeight: 700 }}>Selected questions</Typography>
              <Typography sx={{ fontWeight: 700 }}>{selectedQuestionCount}</Typography>
            </Box>

            <Button
              type="button"
              onClick={onStartQuiz}
              disabled={!hasSelection}
              variant="contained"
            >
              Start quiz
            </Button>
          </Stack>
        </Paper>
      )}
      </Box>
    </Stack>
  );
}
