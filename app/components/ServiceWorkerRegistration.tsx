"use client";

import { useEffect } from "react";

export default function ServiceWorkerRegistration() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      const basePath = process.env.NEXT_PUBLIC_PAGES_BASE_PATH ?? "";
      navigator.serviceWorker.register(`${basePath}/sw.js`, {
        scope: `${basePath}/`,
      }).catch(() => {
        // Offline support is an enhancement; the app remains usable if registration fails.
      });
    }
  }, []);

  return null;
}
