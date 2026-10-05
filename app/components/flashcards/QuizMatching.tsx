"use client";

import { MatchingGroup, MatchingPair, Question } from "@/app/types";
import { useMemo, useState } from "react";
import MoreInfo from "./MoreInfo";

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

type MatchingOption = { id: string; value: string; column: number };
type Selection = MatchingOption;

const shuffle = <T,>(items: T[]) => {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [
      shuffled[swapIndex],
      shuffled[index],
    ];
  }
  return shuffled;
};

const colors: string[] = [
  "#FF3B30",
  "#007AFF",
  "#34C759",
  "#FFCC00",
  "#AF52DE",
  "#FF9500",
  "#5AC8FA",
  "#FF2D55",
  "#4CD964",
  "#5856D6",
  "#A2845E",
  "#E056FD",
  "#10AC84",
  "#FF6B6B",
  "#01CBC6",
  "#1DD1A1",
  "#FF9FF3",
  "#576574",
  "#222F3E",
  "#95A5A6",
];

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
    () =>
      (currentQuestion?.matches ?? []).map((match) =>
        isMatchingGroup(match) ? match.values : [match.left, match.right],
      ),
    [currentQuestion],
  );
  const columnCount = Math.max(...rows.map((row) => row.length), 0);
  const optionsByColumn = useMemo(
    () =>
      Array.from({ length: columnCount }, (_, column) =>
        shuffle(
          rows
            .map((row, rowIndex) =>
              row[column]
                ? { id: `${rowIndex}-${column}`, value: row[column], column }
                : null,
            )
            .filter((option): option is MatchingOption => option !== null),
        ),
      ),
    [rows, columnCount],
  );
  const colorsByGroup = useMemo(
    () =>
      Object.fromEntries(
        rows.map((_, rowIndex) => [rowIndex, colors[rowIndex % colors.length]]),
      ) as Record<number, string>,
    [rows],
  );
  const correctPercent = useMemo(() => {
    if (currentIndex === 0) return 0;
    return Math.round((correctCount / currentIndex) * 1000) / 10;
  }, [correctCount, currentIndex]);

  if (!currentQuestion || rows.length === 0 || columnCount < 2) return null;

  const groupItems = (group: number) =>
    Object.entries(assignments)
      .filter(([, assignedGroup]) => assignedGroup === group)
      .map(([id]) =>
        optionsByColumn.flat().find((option) => option.id === id),
      )
      .filter((option): option is MatchingOption => option !== undefined);
  const assignedGroups = [...new Set(Object.values(assignments))];
  const isSameGroupAsRow = (group: number, row: string[]) => {
    const assignedValues = groupItems(group);
    return (
      assignedValues.length === row.length &&
      row.every((value) => {
        const matchIndex = assignedValues.findIndex(
          (item) => item.value === value,
        );
        if (matchIndex < 0) return false;
        assignedValues.splice(matchIndex, 1);
        return true;
      })
    );
  };
  const isGroupComplete = (group: number) => {
    const items = groupItems(group);
    return (
      items.length === columnCount &&
      new Set(items.map((item) => item.column)).size === columnCount
    );
  };
  const isComplete =
    assignedGroups.length === rows.length &&
    assignedGroups.every(isGroupComplete);
  const correctGroups = new Set(
    assignedGroups.filter((group) =>
      rows.some((row) => isSameGroupAsRow(group, row)),
    ),
  );
  const isCorrect =
    isComplete &&
    rows.every((row) =>
      assignedGroups.some((group) => isSameGroupAsRow(group, row)),
    );
  const answerText = assignedGroups
    .map((group) =>
      Array.from(
        { length: columnCount },
        (_, column) =>
          groupItems(group).find((item) => item.column === column)?.value ??
          "(blank)",
      ).join(" → "),
    )
    .join("; ");

  const assignMatch = (selections: Selection[]) => {
    setAssignments((previous) => {
      const next = { ...previous };
      const selectedGroups = selections
        .map(({ id }) => next[id])
        .filter((group): group is number => group !== undefined);
      const targetGroup =
        selectedGroups[0] ??
        rows.findIndex((_, index) => !Object.values(next).includes(index));
      const sourceGroups = new Set(
        selectedGroups.filter((group) => group !== targetGroup),
      );

      if (sourceGroups.size > 0) {
        Object.keys(next).forEach((value) => {
          if (sourceGroups.has(next[value])) next[value] = targetGroup;
        });
      }

      // A group can contain only one item from each column. Keep the items
      // explicitly selected for this merge, then remove any other conflicts.
      const preferredByColumn = new Map(
        selections.map(({ column, id }) => [column, id]),
      );
      const keptColumns = new Set<number>();
      Object.keys(next)
        .filter((item) => next[item] === targetGroup)
        .sort(
          (left, right) =>
            Number(
              preferredByColumn.has(
                optionsByColumn.flat().find((option) => option.id === right)
                  ?.column ?? -1,
              ),
            ) -
            Number(
              preferredByColumn.has(
                optionsByColumn.flat().find((option) => option.id === left)
                  ?.column ?? -1,
              ),
            ),
        )
        .forEach((item) => {
          if (next[item] !== targetGroup) return;
          const option = optionsByColumn
            .flat()
            .find((candidate) => candidate.id === item);
          if (!option) return;
          const preferred = preferredByColumn.get(option.column);
          if (preferred && item !== preferred) {
            delete next[item];
          } else if (keptColumns.has(option.column)) {
            delete next[item];
          } else {
            keptColumns.add(option.column);
          }
        });
      selections.forEach(({ id }) => {
        next[id] = targetGroup;
      });
      return next;
    });
    setSelected([]);
  };

  const selectItem = (option: MatchingOption) => {
    if (isSubmitted) return;
    const nextSelection = option;
    const selectedInColumn = selected.findIndex(
      (item) => item.column === option.column,
    );
    if (selectedInColumn >= 0) {
      if (selected[selectedInColumn].id === option.id) {
        setSelected((previous) =>
          previous.filter((_, index) => index !== selectedInColumn),
        );
      } else {
        setSelected((previous) =>
          previous.map((item, index) =>
            index === selectedInColumn ? nextSelection : item,
          ),
        );
      }
      return;
    }
    const nextSelected = [...selected, nextSelection];
    if (nextSelected.length === columnCount) assignMatch(nextSelected);
    else setSelected(nextSelected);
  };
  const colorForPercent = (percent: number) =>
    percent >= 80 ? "#2ecc71" : percent >= 50 ? "#f1c40f" : "#e74c3c";

  return (
    <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between text-sm text-zinc-500 dark:text-zinc-400">
          <span>
            Question {currentIndex + 1} of {totalQuestions}
          </span>
          <span style={{ color: colorForPercent(correctPercent) }}>
            {correctCount} correct ({correctPercent}%)
          </span>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 text-lg font-semibold dark:border-zinc-800 dark:bg-zinc-900/60">
          {currentQuestion.question}
        </div>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Select one item from each column to create a match.
        </p>
        <div className="min-w-0 overflow-x-auto pb-2">
          <div
            className={`grid gap-4 ${columnCount <= 3 ? "w-full" : "min-w-max"}`}
            style={{
              gridTemplateColumns:
                columnCount <= 3
                  ? `repeat(${columnCount}, minmax(0, 1fr))`
                  : `repeat(${columnCount}, 14rem)`,
            }}
          >
            {optionsByColumn.map((options, column) => (
              <div className="flex min-w-0 flex-col gap-2" key={column}>
                <h2 className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  {currentQuestion.columnLabels?.[column] ?? `Column ${column + 1}`}
                </h2>
                {options.map((option) => {
                  const assignedGroup = assignments[option.id];
                  const isMatched = assignedGroup !== undefined;
                  const isSelected = selected.some(
                    (item) => item.id === option.id,
                  );
                  const correct = isMatched && correctGroups.has(assignedGroup);
                  const stateClasses = isSubmitted
                    ? correct
                      ? "border-emerald-500 bg-emerald-50 text-emerald-800 dark:bg-emerald-500/10 dark:text-emerald-300"
                      : "border-rose-500 bg-rose-50 text-rose-800 dark:bg-rose-500/10 dark:text-rose-300"
                    : isMatched
                      ? isSelected
                        ? "border-zinc-200 bg-sky-50 text-sky-800 ring-2 ring-sky-500 dark:border-zinc-800 dark:bg-sky-500/10 dark:text-sky-300"
                        : "border-zinc-200 bg-zinc-100 text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-500"
                      : isSelected
                        ? "border-sky-500 bg-sky-50 dark:bg-sky-500/10"
                        : "border-zinc-200 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900";
                  return (
                    <button
                      key={option.id}
                      type="button"
                      disabled={isSubmitted}
                      onClick={() => selectItem(option)}
                      style={
                        isMatched
                          ? {
                              boxShadow: `inset 4px 0 0 ${colorsByGroup[assignedGroup]}`,
                            }
                          : undefined
                      }
                      className={`rounded-xl border p-3 text-left text-sm font-medium transition ${stateClasses}`}
                    >
                      {option.value}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
        {currentQuestion.hint && !isSubmitted && (
          <div className="flex flex-col gap-2">
            <button
              onClick={onToggleHint}
              className="self-start text-xs font-semibold text-zinc-500 underline underline-offset-4"
            >
              {hintVisible ? "Hide hint" : "Need a hint?"}
            </button>
            {hintVisible && (
              <div className="rounded-xl bg-amber-50 p-3 text-sm text-amber-900 dark:bg-amber-500/10 dark:text-amber-100">
                {currentQuestion.hint}
              </div>
            )}
          </div>
        )}
        {isSubmitted && <MoreInfo items={currentQuestion.moreInfo} />}
        {!isSubmitted ? (
          <div className="flex justify-center gap-2">
            <button
              type="button"
              onClick={() => onAnswer(false, answerText)}
              className="rounded-full bg-zinc-900 px-5 py-2 text-sm font-semibold text-white dark:bg-zinc-100 dark:text-black"
            >
              Skip
            </button>
            <button
              type="button"
              disabled={!isComplete}
              onClick={() => setIsSubmitted(true)}
              className="rounded-full bg-sky-600 px-5 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40"
            >
              Check matches
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3">
            <p
              className={`text-sm font-semibold ${isCorrect ? "text-emerald-600" : "text-rose-600"}`}
            >
              {isCorrect
                ? "All matches are correct."
                : "Some matches need review."}
            </p>
            <button
              type="button"
              onClick={() => onAnswer(isCorrect, answerText)}
              className={`rounded-full px-5 py-2 text-sm font-semibold text-white ${isCorrect ? "bg-emerald-600" : "bg-rose-600"}`}
            >
              Next
            </button>
          </div>
        )}
      </div>
      <button
        onClick={() => onClickFlag(!isFlagged)}
        className="mt-5 rounded-full bg-amber-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-amber-600"
      >
        {isFlagged ? "🚩 Remove Flag" : "🚩 Flag for Review"}
      </button>
    </section>
  );
}
