import { Container } from "@mui/material";
import type { Metadata } from "next";
import MuiProviders from "./components/MuiProviders";
import ThemeModeToggle from "./components/ThemeModeToggle";
import "./globals.css";

export const metadata: Metadata = {
  title: "Review",
  description: "Study courses and build diagram questions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MuiProviders>
          <Container maxWidth="xl" sx={{ minHeight: "100vh", py: 2 }}>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <ThemeModeToggle />
            </div>
            {children}
          </Container>
        </MuiProviders>
      </body>
    </html>
  );
}
