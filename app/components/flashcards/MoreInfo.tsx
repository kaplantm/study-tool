"use client";

import { useState } from "react";

type MoreInfoProps = {
  items?: string[] | null;
};

export default function MoreInfo({ items }: MoreInfoProps) {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  if (!items?.length) return null;

  return (
    <div className="flex flex-col gap-3 border-t border-zinc-100 pt-4 dark:border-zinc-800">
      {!showMoreInfo ? (
        <button
          type="button"
          onClick={() => setShowMoreInfo(true)}
          className="self-start rounded-full border border-zinc-300 px-4 py-1 text-xs font-semibold text-zinc-600 transition hover:border-zinc-500 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-500"
        >
          💡 More Info
        </button>
      ) : (
        <div className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-blue-900 dark:border-blue-500/40 dark:bg-blue-500/10 dark:text-blue-100">
          <ul className="list-inside list-disc space-y-1">
            {items.map((info, index) => (
              <li key={`${info}-${index}`}>{info}</li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => setShowMoreInfo(false)}
            className="mt-2 text-xs font-semibold text-blue-700 underline dark:text-blue-300"
          >
            Hide info
          </button>
        </div>
      )}
    </div>
  );
}
