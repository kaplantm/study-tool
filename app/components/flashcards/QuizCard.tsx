"use client";

import { Question } from "@/app/types";
import MoreInfo from "./MoreInfo";
import { Paper, Stack } from "@mui/material";
import { Alert, Box, Button, Typography } from "@mui/material";

type QuizCardProps = {
  currentQuestion: Question | undefined;
  currentIndex: number;
  totalQuestions: number;
  correctCount: number;
  cardFlipped: boolean;
  onFlipCard: () => void;
  onMarkCorrect: () => void;
  onMarkIncorrect: () => void;
  hintVisible: boolean;
  onToggleHint: () => void;
  isFlagged: boolean;
  onClickFlag: (flag: boolean) => void;
};

export default function QuizCard({
  currentQuestion,
  currentIndex,
  totalQuestions,
  correctCount,
  cardFlipped,
  onFlipCard,
  onMarkCorrect,
  onMarkIncorrect,
  hintVisible,
  onToggleHint,
  isFlagged,
  onClickFlag,
}: QuizCardProps) {
  if (!currentQuestion) {
    return null;
  }

  const hasHint = Boolean(currentQuestion.hint);
  return (
    <Paper component="section" sx={{ p: 3, borderRadius: 3 }}>
      <Stack spacing={3}>
        <Box sx={{ display: "flex", justifyContent: "space-between", color: "text.secondary" }}>
          <Typography variant="body2">
            Question {currentIndex + 1} of {totalQuestions}
          </Typography>
          <Typography variant="body2">{correctCount} correct</Typography>
        </Box>

        <Paper variant="outlined" sx={{ p: 2.5, bgcolor: "action.hover", fontWeight: 700, fontSize: "1.1rem" }}>
          <Typography sx={{ fontWeight: 700, fontSize: "1.1rem" }}>
            {currentQuestion.question}
          </Typography>
        </Paper>

        {hasHint && !cardFlipped && (
          <Stack spacing={1}>
            <Button variant="text" size="small" onClick={onToggleHint} sx={{ alignSelf: "flex-start" }}>
              {hintVisible ? "Hide hint" : "Show hint"}
            </Button>
            {hintVisible && (
              <Alert severity="warning">
                <Typography>{currentQuestion.hint}</Typography>
              </Alert>
            )}
          </Stack>
        )}

        {!cardFlipped ? (
          <Stack spacing={1.5} sx={{ alignItems: "center" }}>
            <Typography color="text.secondary">
              Think of your answer, then flip the card to check.
            </Typography>
            <Button variant="contained" onClick={onFlipCard}>
              Flip card
            </Button>
          </Stack>
        ) : (
          <Stack spacing={2}>
            <Alert severity="success"><Typography variant="subtitle2">Answer</Typography><Typography>{currentQuestion.answer}</Typography></Alert>
            <Stack spacing={1}>
              <Typography sx={{ fontWeight: 600 }}>Did you get it right?</Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                <Button color="error" variant="contained" onClick={() => { onClickFlag(true); onMarkIncorrect(); }}>
                  ✗ Incorrect
                </Button>
                <Button color="warning" variant="outlined" onClick={() => onClickFlag(true)}>
                  {isFlagged ? "🚩 Keep Flagged for Review" : "🚩 Flag for Review"}
                </Button>
                <Button color="success" variant="contained" onClick={onMarkCorrect}>✓ Correct</Button>
              </Box>
            </Stack>
            <MoreInfo items={currentQuestion.moreInfo} />
          </Stack>
        )}
      </Stack>
    </Paper>
  );
}
