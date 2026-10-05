"use client";

import { Question } from "@/app/types";
import { Alert, Box, Button, Paper, Stack, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import MoreInfo from "./MoreInfo";

type MultipleChoiceCardProps = {
  currentQuestion: Question | undefined;
  currentIndex: number;
  totalQuestions: number;
  correctCount: number;
  // We'll use cardFlipped to represent "isAnswered" to keep your parent logic intact
  isAnswered: boolean;
  onRevealAnswer: () => void;
  onMarkCorrect: () => void;
  onMarkIncorrect: () => void;
  hintVisible: boolean;
  onToggleHint: () => void;
  isFlagged: boolean;
  onClickFlag: (flag: boolean) => void;
};

export default function QuizMultipleChoiceCard({
  currentQuestion,
  currentIndex,
  totalQuestions,
  correctCount,
  isAnswered,
  onRevealAnswer,
  onMarkCorrect,
  onMarkIncorrect,
  hintVisible,
  onToggleHint,
  isFlagged,
  onClickFlag,
}: MultipleChoiceCardProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  // Reset local selection when question changes
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSelectedOption(null);
  }, [currentQuestion?.id, currentIndex]);

  const correctPercent = useMemo(() => {
    if (currentIndex === 0) return 0;
    const decimal = correctCount / currentIndex;
    const percent = Math.round(decimal * 100 * 10) / 10;
    return percent;
  }, [correctCount, currentIndex]);

  if (!currentQuestion) return null;

  const handleOptionClick = (option: string) => {
    if (isAnswered) return;

    setSelectedOption(option);
    onRevealAnswer(); // This "flips" the state to revealed
  };

  const handleGoToNext = () => {
    if (selectedOption === currentQuestion.answer) {
      onMarkCorrect();
    } else {
      onMarkIncorrect();
    }
  };

  const getColor = (percent: number) => {
    if (percent >= 80) return "#2ecc71"; // Green
    if (percent >= 50) return "#f1c40f"; // Yellow
    return "#e74c3c"; // Red
  };

  return (
    <Paper component="section" sx={{ p: 3 }}>
      <Stack spacing={3}>
        <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Question {currentIndex + 1} of {totalQuestions}
          </Typography>
          <Typography variant="body2" sx={{ color: getColor(correctPercent) }}>
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

        {/* Options List */}
        <Stack spacing={1.5}>
          {currentQuestion.options?.map((option) => {
            const isCorrect = option === currentQuestion.answer;
            const isSelected = option === selectedOption;

            return (
              <Button
                key={option}
                aria-disabled={isAnswered}
                tabIndex={isAnswered ? -1 : undefined}
                onClick={() => handleOptionClick(option)}
                variant="outlined"
                color={
                  isAnswered && isCorrect
                    ? "success"
                    : isAnswered && isSelected
                      ? "error"
                      : "inherit"
                }
                sx={{
                  justifyContent: "flex-start",
                  textAlign: "left",
                  textTransform: "none",
                  p: 1.5,
                  bgcolor: "background.paper",
                }}
              >
                {option}
              </Button>
            );
          })}
        </Stack>

        {/* Hint Section */}
        {currentQuestion.hint && !isAnswered && (
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

        {isAnswered && <MoreInfo items={currentQuestion.moreInfo} />}

        <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
          <Button
            variant="outlined"
            disabled={isAnswered}
            onClick={handleGoToNext}
          >
            Skip
          </Button>
          <Button
            variant="contained"
            disabled={!isAnswered}
            onClick={handleGoToNext}
          >
            Next
          </Button>
        </Box>
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
