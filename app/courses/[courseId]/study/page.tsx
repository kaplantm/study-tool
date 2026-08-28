"use client";

import QuizCard from "@/app/components/flashcards/QuizCard";
import QuizMatchingCard from "@/app/components/flashcards/QuizMatching";
import QuizMultipleChoiceCard from "@/app/components/flashcards/QuizMultipleChoice";
import QuizSummary from "@/app/components/flashcards/QuizSummary";
import { QuizResponse } from "@/app/components/flashcards/types";
import { courses } from "@/app/lib/courses/courses";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import FlaggedToggle from "./components/FlaggedToggle";
import NotFoundCourse from "./components/NotFoundCourse";
import StudyHeader from "./components/StudyHeader";
import { useFlaggedFlashcardIds, useQuizQuestions } from "./hooks";

export default function StudyPage() {
  const FLAGGED_KEY = "flaggedFlashcardIds";
  const router = useRouter();
  const { courseId } = useParams();
  const searchParams = useSearchParams();
  const [flaggedOnly, setFlaggedOnly] = useState(false);
  const [flaggedIds, updateFlaggedIds] = useFlaggedFlashcardIds(FLAGGED_KEY);
  const shuffleEnabled = searchParams.get("shuffle") === "true";
  const unitId = searchParams.get("unitId");
  const chapterId = searchParams.get("chapterId");
  const quizQuestions = useQuizQuestions({
    courseId,
    unitId,
    chapterId,
    shuffleEnabled,
  });
  const filteredQuizQuestions = useMemo(() => {
    if (flaggedOnly && flaggedIds) {
      return quizQuestions.filter((q) => flaggedIds.includes(q.id));
    }
    return quizQuestions;
  }, [quizQuestions, flaggedOnly, flaggedIds]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardFlipped, setCardFlipped] = useState(false);
  const [responses, setResponses] = useState<QuizResponse[]>([]);
  const [quizComplete, setQuizComplete] = useState(false);
  const [hintVisible, setHintVisible] = useState(false);
  const selectedCourse = useMemo(
    () => courses.find((course) => course.id === courseId) ?? null,
    [courseId],
  );
  const currentQuestion = filteredQuizQuestions[currentIndex];
  const totalQuestions = filteredQuizQuestions.length;
  if (flaggedIds === null) return null;
  const handleFlipCard = () => setCardFlipped(true);
  const handleMarkCorrect = () => {
    if (!currentQuestion) return;
    setResponses((prev) => [
      ...prev,
      { questionId: currentQuestion.id, userAnswer: "", correct: true },
    ]);
    moveToNextQuestion();
  };
  const handleMarkIncorrect = () => {
    if (!currentQuestion) return;
    setResponses((prev) => [
      ...prev,
      { questionId: currentQuestion.id, userAnswer: "", correct: false },
    ]);
    moveToNextQuestion();
  };
  const handleToggleFlag = (questionId: string, flag: boolean) => {
    const foundIndex = flaggedIds.indexOf(questionId);
    if (flag && foundIndex === -1) {
      updateFlaggedIds([...flaggedIds, questionId]);
    } else if (!flag && foundIndex !== -1) {
      updateFlaggedIds(flaggedIds.filter((id) => id !== questionId));
    }
  };
  const moveToNextQuestion = () => {
    if (currentIndex + 1 >= totalQuestions) {
      setQuizComplete(true);
      return;
    }
    setCurrentIndex((prev) => prev + 1);
    setCardFlipped(false);
    setHintVisible(false);
  };
  const handleChangeCourse = () => {
    router.push("/courses");
  };
  if (!selectedCourse) {
    return <NotFoundCourse onChangeCourse={handleChangeCourse} />;
  }

  const isMultipleChoiceQuestion = !!currentQuestion.options?.length;
  const isMatchingQuestion = !!currentQuestion.matches?.length;
  return (
    <div className="min-h-screen bg-zinc-50 px-4 py-12 text-zinc-900 dark:bg-black dark:text-zinc-100">
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-10">
        <StudyHeader
          course={selectedCourse}
          onChangeCourse={handleChangeCourse}
        />
        <FlaggedToggle
          flaggedOnly={flaggedOnly}
          setFlaggedOnly={setFlaggedOnly}
        />
        {filteredQuizQuestions.length > 0 &&
          !quizComplete &&
          (isMatchingQuestion ? (
            <QuizMatchingCard
              key={currentQuestion.id}
              currentQuestion={currentQuestion}
              currentIndex={currentIndex}
              totalQuestions={totalQuestions}
              correctCount={responses.filter((response) => response.correct).length}
              onAnswer={(correct, userAnswer) => {
                if (!currentQuestion) return;
                setResponses((prev) => [
                  ...prev,
                  { questionId: currentQuestion.id, userAnswer, correct },
                ]);
                moveToNextQuestion();
              }}
              hintVisible={hintVisible}
              onToggleHint={() => setHintVisible((prev) => !prev)}
              isFlagged={flaggedIds.includes(currentQuestion.id)}
              onClickFlag={(flag: boolean) => handleToggleFlag(currentQuestion.id, flag)}
            />
          ) : isMultipleChoiceQuestion ? (
            <QuizMultipleChoiceCard
              currentQuestion={currentQuestion}
              currentIndex={currentIndex}
              totalQuestions={totalQuestions}
              correctCount={
                responses.filter((response) => response.correct).length
              }
              isAnswered={cardFlipped}
              onRevealAnswer={handleFlipCard}
              onMarkCorrect={handleMarkCorrect}
              onMarkIncorrect={handleMarkIncorrect}
              hintVisible={hintVisible}
              onToggleHint={() => setHintVisible((prev) => !prev)}
              isFlagged={flaggedIds.includes(currentQuestion.id)}
              onClickFlag={(flag: boolean) =>
                handleToggleFlag(currentQuestion.id, flag)
              }
            />
          ) : (
            <QuizCard
              currentQuestion={currentQuestion}
              currentIndex={currentIndex}
              totalQuestions={totalQuestions}
              correctCount={
                responses.filter((response) => response.correct).length
              }
              cardFlipped={cardFlipped}
              onFlipCard={handleFlipCard}
              onMarkCorrect={handleMarkCorrect}
              onMarkIncorrect={handleMarkIncorrect}
              hintVisible={hintVisible}
              onToggleHint={() => setHintVisible((prev) => !prev)}
              isFlagged={flaggedIds.includes(currentQuestion.id)}
              onClickFlag={(flag: boolean) =>
                handleToggleFlag(currentQuestion.id, flag)
              }
            />
          ))}
        {quizComplete && (
          <QuizSummary
            totalQuestions={totalQuestions}
            correctCount={
              responses.filter((response) => response.correct).length
            }
            responses={responses}
            quizQuestions={filteredQuizQuestions}
            onStudyAnother={() => router.push(`/courses/${selectedCourse.id}`)}
            onPickNewCourse={handleChangeCourse}
            flaggedIds={flaggedIds}
          />
        )}
      </main>
    </div>
  );
}
