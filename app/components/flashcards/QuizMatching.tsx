"use client";

import { MatchingGroup, MatchingPair, Question } from "@/app/types";
import { Alert, Box, Button, Paper, Stack, Typography } from "@mui/material";
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
      .map(([id]) => optionsByColumn.flat().find((option) => option.id === id))
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
    <Paper component="section" sx={{ p: 3 }}>
      <Stack spacing={3}>
        <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Question {currentIndex + 1} of {totalQuestions}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: colorForPercent(correctPercent) }}
          >
            {correctCount} correct ({correctPercent}%)
          </Typography>
        </Box>
        <Paper
          variant="outlined"
          sx={{
            p: 2.5,
            bgcolor: "action.hover",
            fontWeight: 700,
            fontSize: "1.1rem",
          }}
        >
          <Typography sx={{ fontWeight: 700, fontSize: "1.1rem" }}>
            {currentQuestion.question}
          </Typography>
        </Paper>
        <Typography variant="body2" color="text.secondary">
          Select one item from each column to create a match.
        </Typography>
        <Box sx={{ overflowX: "auto" }}>
          <Box
            style={{
              gridTemplateColumns:
                columnCount <= 3
                  ? `repeat(${columnCount}, minmax(0, 1fr))`
                  : `repeat(${columnCount}, 14rem)`,
            }}
            sx={{ display: "grid", gap: 2, pb: 1 }}
          >
            {optionsByColumn.map((options, column) => (
              <Stack key={column} spacing={1}>
                <Typography
                  variant="overline"
                  color="text.secondary"
                  sx={{ fontWeight: 700 }}
                >
                  {currentQuestion.columnLabels?.[column] ??
                    `Column ${column + 1}`}
                </Typography>
                {options.map((option) => {
                  const assignedGroup = assignments[option.id];
                  const isMatched = assignedGroup !== undefined;
                  const isSelected = selected.some(
                    (item) => item.id === option.id,
                  );
                  const correct = isMatched && correctGroups.has(assignedGroup);
                  return (
                    <Button
                      key={option.id}
                      type="button"
                      disabled={isSubmitted}
                      onClick={() => selectItem(option)}
                      sx={{
                        display: "block",
                        width: "100%",
                        padding: "12px",
                        borderRadius: 10,
                        border: "1px solid",
                        textAlign: "left",
                        fontWeight: 600,
                        color: isSubmitted
                          ? correct
                            ? "success.main"
                            : "error.main"
                          : "text.primary",
                        backgroundColor: isSelected
                          ? "action.selected"
                          : isMatched
                            ? "action.hover"
                            : "background.paper",
                        borderColor: "divider",
                        cursor: isSubmitted ? "default" : "pointer",
                        ...(isMatched
                          ? {
                              boxShadow: `inset 4px 0 0 ${colorsByGroup[assignedGroup]}`,
                            }
                          : {}),
                      }}
                    >
                      {option.value}
                    </Button>
                  );
                })}
              </Stack>
            ))}
          </Box>
        </Box>
        {currentQuestion.hint && !isSubmitted && (
          <Stack spacing={1}>
            <Button
              variant="text"
              size="small"
              onClick={onToggleHint}
              sx={{ alignSelf: "flex-start" }}
            >
              {hintVisible ? "Hide hint" : "Need a hint?"}
            </Button>
            {hintVisible && (
              <Alert severity="warning">
                <Typography>{currentQuestion.hint}</Typography>
              </Alert>
            )}
          </Stack>
        )}
        {isSubmitted && <MoreInfo items={currentQuestion.moreInfo} />}
        {!isSubmitted ? (
          <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
            <Button
              variant="outlined"
              onClick={() => onAnswer(false, answerText)}
            >
              Skip
            </Button>
            <Button
              variant="contained"
              disabled={!isComplete}
              onClick={() => setIsSubmitted(true)}
            >
              Check matches
            </Button>
          </Box>
        ) : (
          <Stack spacing={1.5} sx={{ alignItems: "center" }}>
            <Typography
              color={isCorrect ? "success.main" : "error.main"}
              sx={{ fontWeight: 700 }}
            >
              {isCorrect
                ? "All matches are correct."
                : "Some matches need review."}
            </Typography>
            <Button
              variant="contained"
              color={isCorrect ? "success" : "error"}
              onClick={() => onAnswer(isCorrect, answerText)}
            >
              Next
            </Button>
          </Stack>
        )}
      </Stack>
      <Button
        variant="text"
        color={isFlagged ? "warning" : "inherit"}
        onClick={() => onClickFlag(!isFlagged)}
      >
        {isFlagged ? "🚩 Remove Flag" : "🚩 Flag for Review"}
      </Button>
    </Paper>
  );
}
