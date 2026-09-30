"use client";

import { MatchingGroup, MatchingPair, Question } from "@/app/types";
import { useMemo, useState } from "react";

type MatchingCardProps = {
  currentQuestion: Question | undefined;
  currentIndex: number;
  totalQuestions: number;
  correctCount: number;
  onAnswer: (correct: boolean, userAnswer: string) => void;
  hintVisible: boolean;
  onToggleHint: () => void;
  isFlagged: boolean;
  onClickFlag: (flag: boolean) => void;
};

type Selection = { column: number; value: string };

const shuffle = <T,>(items: T[]) => {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
};

const generateMatchColor = () => {
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * 90);
  const luminosity = Math.floor(Math.random() * 80);
  return `hsl(${hue} ${saturation + 10}% ${luminosity + 20}%)`;
};

const isMatchingGroup = (
  match: MatchingPair | MatchingGroup,
): match is MatchingGroup => "values" in match;

export default function QuizMatchingCard({
  currentQuestion,
  currentIndex,
  totalQuestions,
  correctCount,
  onAnswer,
  hintVisible,
  onToggleHint,
  isFlagged,
  onClickFlag,
}: MatchingCardProps) {
  const [selected, setSelected] = useState<Selection[]>([]);
  const [assignments, setAssignments] = useState<Record<string, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const rows = useMemo(
    () => (currentQuestion?.matches ?? []).map((match) =>
      isMatchingGroup(match) ? match.values : [match.left, match.right],
    ),
    [currentQuestion],
  );
  const columnCount = Math.max(...rows.map((row) => row.length), 0);
  const optionsByColumn = useMemo(
    () => Array.from({ length: columnCount }, (_, column) =>
      shuffle(rows.map((row) => row[column]).filter(Boolean)),
    ),
    [rows, columnCount],
  );
  const colorsByGroup = useMemo(
    () => Object.fromEntries(rows.map((_, rowIndex) => [rowIndex, generateMatchColor()])) as Record<number, string>,
    [rows],
  );
  const correctPercent = useMemo(() => {
    if (currentIndex === 0) return 0;
    return Math.round((correctCount / currentIndex) * 1000) / 10;
  }, [correctCount, currentIndex]);

  if (!currentQuestion || rows.length === 0 || columnCount < 2) return null;

  const groupItems = (group: number) => Object.entries(assignments)
    .filter(([, assignedGroup]) => assignedGroup === group)
    .map(([value]) => value);
  const columnForValue = (value: string) => optionsByColumn.findIndex((options) => options.includes(value));
  const assignedGroups = [...new Set(Object.values(assignments))];
  const isSameGroupAsRow = (group: number, row: string[]) => {
    const assignedValues = groupItems(group);
    return assignedValues.length === row.length && row.every((value) => assignedValues.includes(value));
  };
  const isGroupComplete = (group: number) => {
    const items = groupItems(group);
    return items.length === columnCount &&
      new Set(items.map(columnForValue)).size === columnCount;
  };
  const isComplete = assignedGroups.length === rows.length && assignedGroups.every(isGroupComplete);
  const correctGroups = new Set(
    assignedGroups.filter((group) => rows.some((row) => isSameGroupAsRow(group, row))),
  );
  const isCorrect = isComplete && rows.every(
    (row) => assignedGroups.some((group) => isSameGroupAsRow(group, row)),
  );
  const answerText = assignedGroups.map((group) =>
    Array.from({ length: columnCount }, (_, column) =>
      groupItems(group).find((item) => optionsByColumn[column].includes(item)) ?? "(blank)",
    ).join(" → "),
  ).join("; ");

  const assignMatch = (selections: Selection[]) => {
    setAssignments((previous) => {
      const next = { ...previous };
      const selectedGroups = selections
        .map(({ value }) => next[value])
        .filter((group): group is number => group !== undefined);
      const targetGroup = selectedGroups[0] ?? rows.findIndex((_, index) =>
        !Object.values(next).includes(index),
      );
      const sourceGroups = new Set(selectedGroups.filter((group) => group !== targetGroup));

      if (sourceGroups.size > 0) {
        Object.keys(next).forEach((value) => {
          if (sourceGroups.has(next[value])) next[value] = targetGroup;
        });
      }

      // A group can contain only one item from each column. Keep the items
      // explicitly selected for this merge, then remove any other conflicts.
      const preferredByColumn = new Map(
        selections.map(({ column, value }) => [column, value]),
      );
      const keptColumns = new Set<number>();
      Object.keys(next)
        .filter((item) => next[item] === targetGroup)
        .sort((left, right) =>
          Number(preferredByColumn.has(columnForValue(right))) -
          Number(preferredByColumn.has(columnForValue(left))),
        )
        .forEach((item) => {
        if (next[item] !== targetGroup) return;
        const column = columnForValue(item);
        const preferred = preferredByColumn.get(column);
        if (preferred && item !== preferred) {
          delete next[item];
        } else if (keptColumns.has(column)) {
          delete next[item];
        } else {
          keptColumns.add(column);
        }
        });
      selections.forEach(({ value }) => {
        next[value] = targetGroup;
      });
      return next;
    });
    setSelected([]);
  };

  const selectItem = (column: number, value: string) => {
    if (isSubmitted) return;
    const nextSelection = { column, value };
    const selectedInColumn = selected.findIndex((item) => item.column === column);
    if (selectedInColumn >= 0) {
      if (selected[selectedInColumn].value === value) {
        setSelected((previous) => previous.filter((_, index) => index !== selectedInColumn));
      } else {
        setSelected((previous) => previous.map((item, index) =>
          index === selectedInColumn ? nextSelection : item,
        ));
      }
      return;
    }
    const nextSelected = [...selected, nextSelection];
    if (nextSelected.length === columnCount) assignMatch(nextSelected);
    else setSelected(nextSelected);
  };
  const colorForPercent = (percent: number) => percent >= 80 ? "#2ecc71" : percent >= 50 ? "#f1c40f" : "#e74c3c";

  return (
    <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between text-sm text-zinc-500 dark:text-zinc-400">
          <span>Question {currentIndex + 1} of {totalQuestions}</span>
          <span style={{ color: colorForPercent(correctPercent) }}>{correctCount} correct ({correctPercent}%)</span>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 text-lg font-semibold dark:border-zinc-800 dark:bg-zinc-900/60">{currentQuestion.question}</div>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">Select one item from each column to create a match.</p>
        <div className="grid min-w-0 gap-4 [grid-template-columns:repeat(auto-fit,minmax(14rem,1fr))]">
          {optionsByColumn.map((options, column) => (
            <div className="flex min-w-0 flex-col gap-2" key={column}>
              <h2 className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Column {column + 1}</h2>
              {options.map((value) => {
                const assignedGroup = assignments[value];
                const isMatched = assignedGroup !== undefined;
                const isSelected = selected.some((item) => item.column === column && item.value === value);
                const correct = isMatched && correctGroups.has(assignedGroup);
                const stateClasses = isSubmitted
                  ? correct ? "border-emerald-500 bg-emerald-50 text-emerald-800 dark:bg-emerald-500/10 dark:text-emerald-300" : "border-rose-500 bg-rose-50 text-rose-800 dark:bg-rose-500/10 dark:text-rose-300"
                  : isMatched
                    ? isSelected ? "border-zinc-200 bg-sky-50 text-sky-800 ring-2 ring-sky-500 dark:border-zinc-800 dark:bg-sky-500/10 dark:text-sky-300" : "border-zinc-200 bg-zinc-100 text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-500"
                    : isSelected ? "border-sky-500 bg-sky-50 dark:bg-sky-500/10" : "border-zinc-200 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900";
                return <button key={value} type="button" disabled={isSubmitted} onClick={() => selectItem(column, value)} style={isMatched ? { boxShadow: `inset 4px 0 0 ${colorsByGroup[assignedGroup]}` } : undefined} className={`rounded-xl border p-3 text-left text-sm font-medium transition ${stateClasses}`}>{value}</button>;
              })}
            </div>
          ))}
        </div>
        {currentQuestion.hint && !isSubmitted && <div className="flex flex-col gap-2"><button onClick={onToggleHint} className="self-start text-xs font-semibold text-zinc-500 underline underline-offset-4">{hintVisible ? "Hide hint" : "Need a hint?"}</button>{hintVisible && <div className="rounded-xl bg-amber-50 p-3 text-sm text-amber-900 dark:bg-amber-500/10 dark:text-amber-100">{currentQuestion.hint}</div>}</div>}
        {!isSubmitted ? <div className="flex justify-center gap-2"><button type="button" onClick={() => onAnswer(false, answerText)} className="rounded-full bg-zinc-900 px-5 py-2 text-sm font-semibold text-white dark:bg-zinc-100 dark:text-black">Skip</button><button type="button" disabled={!isComplete} onClick={() => setIsSubmitted(true)} className="rounded-full bg-sky-600 px-5 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40">Check matches</button></div> : <div className="flex flex-col items-center gap-3"><p className={`text-sm font-semibold ${isCorrect ? "text-emerald-600" : "text-rose-600"}`}>{isCorrect ? "All matches are correct." : "Some matches need review."}</p><button type="button" onClick={() => onAnswer(isCorrect, answerText)} className={`rounded-full px-5 py-2 text-sm font-semibold text-white ${isCorrect ? "bg-emerald-600" : "bg-rose-600"}`}>Next</button></div>}
      </div>
      <button onClick={() => onClickFlag(!isFlagged)} className="mt-5 rounded-full bg-amber-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-amber-600">{isFlagged ? "🚩 Remove Flag" : "🚩 Flag for Review"}</button>
    </section>
  );
}
