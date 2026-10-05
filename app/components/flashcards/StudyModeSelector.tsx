"use client";

import { StudyMode } from "./types";
import { Checkbox, FormControlLabel, Box, ButtonBase, Stack, Typography } from "@mui/material";

type StudyModeSelectorProps = {
  studyMode: StudyMode;
  onSelectMode: (mode: StudyMode) => void;
  shuffleEnabled: boolean;
  onToggleShuffle: (value: boolean) => void;
};

export default function StudyModeSelector({
  studyMode,
  onSelectMode,
  shuffleEnabled,
  onToggleShuffle,
}: StudyModeSelectorProps) {
  const modes = [
    ["unit", "Study by unit", "Focus on one unit at a time."],
    ["section", "Study by section", "Focus on one section."],
    ["chapter", "Study by chapter", "Drill down into a chapter."],
    ["course", "Study entire course", "Mix every question together."],
  ] as const;
  return (
    <Stack spacing={2}>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2 }}>
        <Typography variant="h6">How do you want to study?</Typography>
        <FormControlLabel control={<Checkbox checked={shuffleEnabled} onChange={(event) => onToggleShuffle(event.target.checked)} />} label="Shuffle questions" />
      </Box>
      <Box sx={{ display: "grid", gap: 1.5, gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" } }}>
        {modes.map(([id, title, description]) => {
          const selected = studyMode === id;
          return <ButtonBase key={id} onClick={() => onSelectMode(id)} sx={{ display: "block", p: 2, border: 1, borderRadius: 3, textAlign: "left", borderColor: selected ? "text.primary" : "divider", bgcolor: selected ? "text.primary" : "action.hover", color: selected ? "common.white" : "text.primary", "&:hover": { borderColor: "text.secondary" } }}>
            <Typography variant="body2" sx={{ fontWeight: 600 }}>{title}</Typography>
            <Typography variant="caption" color={selected ? "inherit" : "text.secondary"}>{description}</Typography>
          </ButtonBase>;
        })}
      </Box>
    </Stack>
  );
}
