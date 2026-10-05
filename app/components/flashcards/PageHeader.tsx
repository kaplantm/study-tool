"use client";
import { Typography } from "@mui/material";

export default function PageHeader() {
  return (
    <header>
      <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: "0.2em", fontWeight: 700 }}>
        Flashcard Study
      </Typography>
    </header>
  );
}
