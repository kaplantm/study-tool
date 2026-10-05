"use client";

import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import type { ThemeOptions } from "@mui/material/styles";
import { ReactNode, createContext, startTransition, useContext, useEffect, useMemo, useState } from "react";

export type ColorMode = "light" | "dark";

type ColorModeContextValue = {
  mode: ColorMode;
  toggleColorMode: () => void;
};

const ColorModeContext = createContext<ColorModeContextValue | undefined>(
  undefined,
);

export function useColorMode() {
  const context = useContext(ColorModeContext);

  if (!context) {
    throw new Error("useColorMode must be used within MuiProviders");
  }

  return context;
}

const themeOptions: ThemeOptions = {
  shape: { borderRadius: 16 },
  typography: {
    fontFamily: "Arial, Helvetica, sans-serif",
  },
  components: {
    MuiButton: { defaultProps: { disableElevation: true } },
    MuiPaper: { defaultProps: { variant: "outlined" } },
  },
};

export default function MuiProviders({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ColorMode>("light");

  useEffect(() => {
    const savedMode = window.localStorage.getItem("review-color-mode");

    if (savedMode === "light" || savedMode === "dark") {
      startTransition(() => setMode(savedMode));
      return;
    }

    startTransition(() => {
      setMode(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    });
  }, []);

  const theme = useMemo(
    () =>
      createTheme({
        ...themeOptions,
        palette: {
          mode,
          primary: { main: mode === "dark" ? "#90caf9" : "#2563eb" },
          background:
            mode === "dark"
              ? { default: "#101418", paper: "#171c21" }
              : { default: "#f8fafc", paper: "#ffffff" },
        },
      }),
    [mode],
  );

  const colorMode = useMemo(
    () => ({
      mode,
      toggleColorMode: () => {
        setMode((currentMode) => {
          const nextMode = currentMode === "light" ? "dark" : "light";
          window.localStorage.setItem("review-color-mode", nextMode);
          return nextMode;
        });
      },
    }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
