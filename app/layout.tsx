import { Container } from "@mui/material";
import type { Metadata, Viewport } from "next";
import MuiProviders from "./components/MuiProviders";
import ThemeModeToggle from "./components/ThemeModeToggle";
import ServiceWorkerRegistration from "./components/ServiceWorkerRegistration";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_PAGES_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Review",
  description: "Study courses and build diagram questions.",
  manifest: `${basePath}/manifest.webmanifest`,
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Review",
  },
};

export const viewport: Viewport = {
  themeColor: "#2563eb",
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
          <ServiceWorkerRegistration />
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
