"use client";

import { Question } from "@/app/types";

import { QuizResponse } from "./types";
import { Alert, Box, Button, Paper, Stack, Typography } from "@mui/material";

const correctAnswerText = (question: Question) => {
  if (question.diagram) {
    return question.diagram.targets
      .map(({ id, label }) => `${id}: ${label}`)
      .join(", ");
  }
  if (question.matches?.length) {
    return question.matches
      .map((match) =>
        "values" in match
          ? match.values.join(" — ")
          : `${match.left} — ${match.right}`,
      )
      .join(", ");
  }
  return question.answer;
};

type QuizSummaryProps = {
  totalQuestions: number;
  correctCount: number;
  responses: QuizResponse[];
  quizQuestions: Question[];
  onStudyAnother: () => void;
  onPickNewCourse: () => void;
  onRetryFailed: () => void;
  flaggedIds: string[];
};

export default function QuizSummary({
  totalQuestions,
  correctCount,
  responses,
  quizQuestions,
  onStudyAnother,
  onPickNewCourse,
  onRetryFailed,
  flaggedIds,
}: QuizSummaryProps) {
  // Failed = incorrect in this session
  const incorrectResponses = responses.filter((response) => !response.correct);
  // Flagged = flagged in localStorage, but not failed in this session
  const failedIds = new Set(incorrectResponses.map((r) => r.questionId));
  const flaggedOnlyIds = flaggedIds.filter((id) => !failedIds.has(id));

  return (
    <Paper component="section" sx={{ p: 3, borderRadius: 3 }}>
      <Stack spacing={3}>
        <Box>
          <Typography variant="h5">Session summary</Typography>
          <Typography color="text.secondary">
            You answered {correctCount} out of {totalQuestions} correctly.
          </Typography>
        </Box>

        {incorrectResponses.length === 0 && flaggedOnlyIds.length === 0 ? (
          <Alert severity="success">
            <Typography>Perfect score! You’re ready to move on.</Typography>
          </Alert>
        ) : (
          <Stack spacing={2}>
            {incorrectResponses.length > 0 && (
              <Stack spacing={1}>
                <Typography variant="subtitle1" color="error.main" sx={{ fontWeight: 700 }}>
                  Failed this session
                </Typography>
                <Stack spacing={1}>
                  {incorrectResponses.map((response) => {
                    const question = quizQuestions.find(
                      (item) => item.id === response.questionId,
                    );
                    if (!question) return null;
                    return (
                      <Alert
                        key={`response-${response.questionId}`}
                        severity="error"
                      >
                        <Typography sx={{ fontWeight: 600 }}>{question.question}</Typography>
                        <Typography variant="caption" sx={{ display: "block" }}>
                          Your answer: {response.userAnswer || "(blank)"}
                        </Typography>
                        <Typography variant="caption" sx={{ display: "block" }}>
                          Correct answer: {correctAnswerText(question)}
                        </Typography>
                      </Alert>
                    );
                  })}
                </Stack>
              </Stack>
            )}
            {flaggedOnlyIds.length > 0 && (
              <Stack spacing={1}>
                <Typography variant="subtitle1" color="warning.main" sx={{ fontWeight: 700 }}>
                  Flagged for Review
                </Typography>
                <Stack spacing={1}>
                  {flaggedOnlyIds.map((id) => {
                    const question = quizQuestions.find(
                      (item) => item.id === id,
                    );
                    if (!question) return null;
                    return (
                      <Alert
                        key={`flagged-${id}`}
                        severity="warning"
                      >
                        <Typography>{question.question}</Typography>
                      </Alert>
                    );
                  })}
                </Stack>
              </Stack>
            )}
          </Stack>
        )}

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {incorrectResponses.length > 0 && (
            <Button variant="contained" color="error"
              onClick={onRetryFailed}
            >
              Retry failed questions
            </Button>
          )}
          <Button variant="outlined"
            onClick={onStudyAnother}
          >
            Study another set
          </Button>
          <Button variant="outlined"
            onClick={onPickNewCourse}
          >
            Pick a new course
          </Button>
        </Box>
      </Stack>
    </Paper>
  );
}
