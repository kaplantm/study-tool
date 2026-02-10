"use client";

import { Unit } from "@/app/types";

type UnitListProps = {
  units: Unit[];
  selectedUnitId: string | null;
  onSelectUnit: (unit: Unit) => void;
};

export default function UnitList({
  units,
  selectedUnitId,
  onSelectUnit,
}: UnitListProps) {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-base font-semibold">Select a unit</h4>
      <div className="grid gap-3 sm:grid-cols-2">
        {units.map((unit) => (
          <button
            key={unit.id}
            onClick={() => onSelectUnit(unit)}
            className={`rounded-2xl border p-4 text-left transition ${
              selectedUnitId === unit.id
                ? "border-zinc-900 bg-zinc-900 text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-black"
                : "border-zinc-200 bg-zinc-50 hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-900/60"
            }`}
          >
            <p className="text-xs font-semibold uppercase text-zinc-500 dark:text-zinc-400">
              Unit {unit.number}
            </p>
            <p className="text-lg font-semibold">{unit.title}</p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {unit.description}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
