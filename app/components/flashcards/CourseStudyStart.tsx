"use client";
import { Button, Paper, Stack, Typography } from "@mui/material";

type CourseStudyStartProps = {
  onStart: () => void;
};

export default function CourseStudyStart({ onStart }: CourseStudyStartProps) {
  return (
    <Paper sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2, p: 2, borderStyle: "dashed" }}>
      <Stack>
        <Typography variant="body2" sx={{ fontWeight: 600 }}>Entire course</Typography>
        <Typography variant="caption" color="text.secondary">
          Includes every question across all units and chapters.
        </Typography>
      </Stack>
      <Button
        onClick={onStart}
        variant="contained"
        color="inherit"
      >
        Start quiz
      </Button>
    </Paper>
  );
}
