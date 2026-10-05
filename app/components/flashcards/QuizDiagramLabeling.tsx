"use client";

import { Question } from "@/app/types";
import {
  Alert,
  Box,
  Button,
  Chip,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useMemo, useState } from "react";
import MoreInfo from "./MoreInfo";

type Props = {
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

const shuffle = <T,>(items: T[]) => {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }
  return result;
};

export default function QuizDiagramLabelingCard({
  currentQuestion,
  currentIndex,
  totalQuestions,
  correctCount,
  onAnswer,
  hintVisible,
  onToggleHint,
  isFlagged,
  onClickFlag,
}: Props) {
  const diagram = currentQuestion?.diagram;
  const [selectedLabelId, setSelectedLabelId] = useState<string | null>(null);
  const [selectedTargetId, setSelectedTargetId] = useState<string | null>(null);
  const [assignments, setAssignments] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [labels] = useState(() =>
    shuffle(diagram?.targets.map((target) => target) ?? []),
  );

  const correctPercent = useMemo(
    () =>
      currentIndex === 0
        ? 0
        : Math.round((correctCount / currentIndex) * 1000) / 10,
    [correctCount, currentIndex],
  );
  if (!currentQuestion || !diagram || diagram.targets.length === 0) return null;

  const isCorrect = diagram.targets.every(({ id }) => assignments[id] === id);
  const answerText = diagram.targets
    .map(({ id }) => {
      const assigned = assignments[id];
      const label = diagram.targets.find(
        ({ id: labelId }) => labelId === assigned,
      )?.label;
      return `${id}: ${label ?? "(blank)"}`;
    })
    .join("; ");

  const assignLabel = (targetId: string, labelId: string) => {
    if (isSubmitted) return;
    setAssignments((previous) => {
      const next = { ...previous };
      const previousTarget = Object.keys(next).find(
        (id) => next[id] === labelId,
      );
      if (previousTarget) delete next[previousTarget];
      delete next[targetId];
      next[targetId] = labelId;
      return next;
    });
    setSelectedLabelId(null);
    setSelectedTargetId(null);
  };

  const handleTargetClick = (targetId: string) => {
    if (isSubmitted) return;
    if (selectedLabelId) return assignLabel(targetId, selectedLabelId);
    setSelectedTargetId((current) => (current === targetId ? null : targetId));
  };

  return (
    <Paper component="section" sx={{ p: { xs: 2, sm: 3 }, borderRadius: 3 }}>
      <Stack spacing={3}>
        <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Question {currentIndex + 1} of {totalQuestions}
          </Typography>
          <Typography variant="body2" color="text.secondary">
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
          Select a label or numbered box first, then choose its match.
        </Typography>

        <Box
          sx={{
            display: "grid",
            gap: 3,
            gridTemplateColumns: { xs: "1fr", lg: "minmax(0, 1fr) 300px" },
            alignItems: "start",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "fit-content",
              maxWidth: "100%",
              mx: "auto",
              overflow: "hidden",
              border: 1,
              borderColor: "divider",
              borderRadius: 2,
            }}
          >
            <img
              src={diagram.imageUrl}
              alt={diagram.alt}
              style={{
                display: "block",
                maxWidth: "100%",
                maxHeight: 680,
                height: "auto",
                objectFit: "contain",
              }}
            />
            {diagram.targets.map(({ id, x, y, width, height }) => {
              const assigned = assignments[id];
              const correct = assigned === id;
              const isRectangle = width !== undefined && height !== undefined;
              const selected = selectedTargetId === id;
              return (
                <Button
                  key={id}
                  type="button"
                  aria-label={`Target ${id}${isSubmitted ? (correct ? ": correct" : assigned ? ": incorrect" : ": missing label") : ""}`}
                  disabled={isSubmitted}
                  onClick={() => handleTargetClick(id)}
                  sx={{
                    position: "absolute",
                    left: `${x}%`,
                    top: `${y}%`,
                    ...(isRectangle
                      ? { width: `${width}%`, height: `${height}%` }
                      : { transform: "translate(-50%, -50%)" }),
                    minWidth: isRectangle ? undefined : 36,
                    minHeight: isRectangle ? undefined : 36,
                    border: "2px solid",
                    borderColor: isSubmitted
                      ? correct
                        ? "#16a34a"
                        : "#dc2626"
                      : "#2563eb",
                    borderRadius: isRectangle ? 6 : "50%",
                    background: selected ? "#dbeafe" : "rgba(255,255,255,.9)",
                    color: isSubmitted
                      ? correct
                        ? "#15803d"
                        : "#b91c1c"
                      : "#1d4ed8",
                    fontWeight: 700,
                    cursor: isSubmitted ? "default" : "pointer",
                    boxShadow: "0 3px 8px rgba(0,0,0,.18)",
                  }}
                >
                  {id}
                </Button>
              );
            })}
          </Box>

          <Paper
            component="aside"
            variant="outlined"
            sx={{
              p: 2,
              bgcolor: "action.hover",
              maxHeight: 420,
              overflowY: "auto",
            }}
          >
            <Stack spacing={1.5}>
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                  Available labels
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Select a label or target first, then choose its match.
                </Typography>
              </Box>
              <Stack spacing={1}>
                {labels.map(({ label, id }) => {
                  const assignedTargetId = Object.entries(assignments).find(
                    ([, assignedLabelId]) => assignedLabelId === id,
                  )?.[0];
                  const isUsed = assignedTargetId !== undefined;
                  const isCorrectlyPlaced = assignedTargetId === id;
                  return (
                    <Button
                      key={id}
                      type="button"
                      disabled={isSubmitted}
                      onClick={() =>
                        selectedTargetId
                          ? assignLabel(selectedTargetId, id)
                          : setSelectedLabelId((current) =>
                              current === id ? null : id,
                            )
                      }
                      variant="outlined"
                      color={
                        isUsed
                          ? isCorrectlyPlaced
                            ? "success"
                            : "error"
                          : selectedLabelId === id
                            ? "primary"
                            : "inherit"
                      }
                      sx={{
                        justifyContent: "space-between",
                        textAlign: "left",
                        bgcolor:
                          selectedLabelId === id
                            ? "primary.50"
                            : "background.paper",
                      }}
                    >
                      <span>{label}</span>
                      {isUsed && (
                        <Chip
                          size="small"
                          label={assignedTargetId}
                          color={isCorrectlyPlaced ? "success" : "error"}
                        />
                      )}
                    </Button>
                  );
                })}
              </Stack>
            </Stack>
          </Paper>
        </Box>

        {isSubmitted && (
          <Stack spacing={1}>
            {diagram.targets.map(({ id, label }) => (
              <Alert
                key={id}
                severity={assignments[id] === id ? "success" : "error"}
              >
                <Box>
                  <Typography>
                    {id}.{" "}
                    {assignments[id]
                      ? `You chose: ${diagram.targets.find(({ id: labelId }) => labelId === assignments[id])?.label ?? "Unknown label"}`
                      : "Missing label"}
                  </Typography>
                  {assignments[id] !== id && (
                    <Typography variant="caption" sx={{ display: "block" }}>
                      Correct: {label}
                    </Typography>
                  )}
                </Box>
              </Alert>
            ))}
          </Stack>
        )}

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
            <Button variant="contained" onClick={() => setIsSubmitted(true)}>
              Check labels
            </Button>
          </Box>
        ) : (
          <Stack spacing={1.5} sx={{ alignItems: "center" }}>
            <Typography
              color={isCorrect ? "success.main" : "error.main"}
              sx={{ fontWeight: 700 }}
            >
              {isCorrect
                ? "All labels are correct."
                : "Some labels need review."}
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
      <Divider sx={{ my: 2 }} />
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
