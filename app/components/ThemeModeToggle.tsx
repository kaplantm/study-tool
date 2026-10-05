"use client";

import { IconButton, Tooltip } from "@mui/material";
import { useColorMode } from "./MuiProviders";

export default function ThemeModeToggle() {
  const { mode, toggleColorMode } = useColorMode();
  const isDark = mode === "dark";

  return (
    <Tooltip title={isDark ? "Use light mode" : "Use dark mode"}>
      <IconButton
        aria-label={isDark ? "Use light mode" : "Use dark mode"}
        onClick={toggleColorMode}
        size="small"
        sx={{ color: "text.primary" }}
      >
        {isDark ? "☀" : "☾"}
      </IconButton>
    </Tooltip>
  );
}
