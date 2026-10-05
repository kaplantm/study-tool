"use client";

import { Box, ButtonBase, Stack, Typography } from "@mui/material";
import { SectionOption } from "./types";

type SectionListProps = {
  options: SectionOption[];
  selectedSectionId: string | null;
  onSelectSection: (option: SectionOption) => void;
};

export default function SectionList({
  options,
  selectedSectionId,
  onSelectSection,
}: SectionListProps) {
  return (
    <Stack spacing={2}>
      <Typography variant="h6">Select a section</Typography>
      <Box
        sx={{
          display: "grid",
          gap: 1.5,
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
        }}
      >
        {options.map((option) => (
          <ButtonBase
            key={`${option.unit.id}${option.chapter.id}${option.sectionIndex}`}
            onClick={() => onSelectSection(option)}
            sx={{
              display: "block",
              p: 2,
              border: 1,
              textAlign: "left",
              borderColor:
                selectedSectionId === option.section.id
                  ? "primary.main"
                  : "divider",
              bgcolor:
                selectedSectionId === option.section.id
                  ? "primary.main"
                  : "action.hover",
              color:
                selectedSectionId === option.section.id
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
                selectedSectionId === option.section.id
                  ? "inherit"
                  : "text.secondary"
              }
            >
              Unit {option.unit.number} · Chapter {option.chapter.number} ·
              Section {option.section.number}
            </Typography>
            <Typography variant="h6">{option.section.title}</Typography>
            <Typography
              variant="body2"
              color={
                selectedSectionId === option.section.id
                  ? "inherit"
                  : "text.secondary"
              }
            >
              {option.section.description}
            </Typography>
          </ButtonBase>
        ))}
      </Box>
    </Stack>
  );
}
