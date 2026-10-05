"use client";

import QuizCard from "@/app/components/flashcards/QuizCard";
import QuizDiagramLabelingCard from "@/app/components/flashcards/QuizDiagramLabeling";
import QuizMatchingCard from "@/app/components/flashcards/QuizMatching";
import QuizMultipleChoiceCard from "@/app/components/flashcards/QuizMultipleChoice";
import QuizSummary from "@/app/components/flashcards/QuizSummary";
import { QuizResponse } from "@/app/components/flashcards/types";
import { courses } from "@/app/lib/courses/courses";
import { Button, Stack } from "@mui/material";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import FlaggedToggle from "./components/FlaggedToggle";
import NotFoundCourse from "./components/NotFoundCourse";
import StudyHeader from "./components/StudyHeader";
import {
  recordQuestionResult,
  useFlaggedFlashcardIds,
  useQuizQuestions,
} from "./hooks";

export default function StudyPage() {
  const FLAGGED_KEY = "flaggedFlashcardIds";
  const QUESTION_STATS_KEY = "questionStats";
  const router = useRouter();
  const pathname = usePathname();
  const { courseId } = useParams();
  const searchParams = useSearchParams();
  const [flaggedOnly, setFlaggedOnly] = useState(false);
  const [flaggedIds, updateFlaggedIds] = useFlaggedFlashcardIds(FLAGGED_KEY);
  const shuffleEnabled = searchParams.get("shuffle") === "true";
  const unitId = searchParams.get("unitId");
  const chapterId = searchParams.get("chapterId");
  const sectionId = searchParams.get("sectionId");
  const sectionIndex = searchParams.get("sectionIndex");
  const sectionIdsParam = searchParams.get("sectionIds");
  const startFresh = searchParams.get("fresh") === "true";
  const resetToken = searchParams.get("reset");
  const sectionIds =
    sectionIdsParam === null
      ? null
      : sectionIdsParam.split(",").filter(Boolean);
  const includeChapterQuestions = searchParams.get("includeMain") !== "false";
  const quizQuestions = useQuizQuestions({
    courseId,
    unitId,
    chapterId,
    sectionId,
    sectionIndex,
    sectionIds,
    includeChapterQuestions,
    shuffleEnabled,
  });
  const quizStorageKey = useMemo(
    () =>
      [
        "quiz-progress",
        String(courseId),
        unitId ?? "",
        chapterId ?? "",
        sectionId ?? "",
        sectionIndex ?? "",
        shuffleEnabled ? "shuffle" : "ordered",
        sectionIdsParam ?? "",
        includeChapterQuestions ? "main" : "sections-only",
        flaggedOnly ? "flagged" : "all",
      ].join("|"),
    [
      courseId,
      unitId,
      chapterId,
      sectionId,
      sectionIndex,
      sectionIdsParam,
      includeChapterQuestions,
      shuffleEnabled,
      flaggedOnly,
    ],
  );
  const [orderedQuestionIds, setOrderedQuestionIds] = useState<string[] | null>(
    null,
  );
  const [retryQuestionIds, setRetryQuestionIds] = useState<string[] | null>(
    null,
  );
  const [restoredKey, setRestoredKey] = useState<string | null>(null);
  const [resetVersion, setResetVersion] = useState(0);
  const orderedQuizQuestions = useMemo(() => {
    if (!orderedQuestionIds) return quizQuestions;
    const byId = new Map(
      quizQuestions.map((question) => [question.id, question]),
    );
    return [
      ...orderedQuestionIds
        .map((id) => byId.get(id))
        .filter((question): question is NonNullable<typeof question> =>
          Boolean(question),
        ),
      ...quizQuestions.filter(
        (question) => !orderedQuestionIds.includes(question.id),
      ),
    ];
  }, [orderedQuestionIds, quizQuestions]);
  const filteredQuizQuestions = useMemo(() => {
    const available =
      flaggedOnly && flaggedIds
        ? orderedQuizQuestions.filter((q) => flaggedIds.includes(q.id))
        : orderedQuizQuestions;
    return retryQuestionIds
      ? available.filter((question) => retryQuestionIds.includes(question.id))
      : available;
  }, [orderedQuizQuestions, flaggedOnly, flaggedIds, retryQuestionIds]);
  const questionId = searchParams.get("questionId");
  const [currentIndexState, setCurrentIndex] = useState(0);
  const [cardFlipped, setCardFlipped] = useState(false);
  const [responses, setResponses] = useState<QuizResponse[]>([]);
  const [quizComplete, setQuizComplete] = useState(false);
  const [hintVisible, setHintVisible] = useState(false);
  const urlQuestionIndex =
    !resetToken && questionId
      ? filteredQuizQuestions.findIndex(
          (question) => question.id === questionId,
        )
      : -1;
  const currentIndex =
    urlQuestionIndex >= 0
      ? urlQuestionIndex
      : Math.min(
          currentIndexState,
          Math.max(filteredQuizQuestions.length - 1, 0),
        );
  const isRestored = restoredKey === quizStorageKey;

  /* eslint-disable react-hooks/set-state-in-effect -- hydrate the client-only quiz session once. */
  useEffect(() => {
    if (typeof window === "undefined" || quizQuestions.length === 0) return;
    try {
      if (startFresh) {
        localStorage.removeItem(quizStorageKey);
      }
      const saved = JSON.parse(localStorage.getItem(quizStorageKey) || "null");
      setOrderedQuestionIds(
        startFresh
          ? null
          : Array.isArray(saved?.questionIds)
            ? saved.questionIds
            : null,
      );
      setRetryQuestionIds(
        startFresh
          ? null
          : Array.isArray(saved?.retryQuestionIds)
            ? saved.retryQuestionIds
            : null,
      );
      setCurrentIndex(
        startFresh
          ? 0
          : typeof saved?.currentIndex === "number"
            ? saved.currentIndex
            : 0,
      );
      setResponses(
        startFresh
          ? []
          : Array.isArray(saved?.responses)
            ? saved.responses
            : [],
      );
      setQuizComplete(startFresh ? false : saved?.quizComplete === true);
    } catch {
      setOrderedQuestionIds(null);
      setRetryQuestionIds(null);
      setCurrentIndex(0);
      setResponses([]);
      setQuizComplete(false);
    }
    setRestoredKey(quizStorageKey);
    if (startFresh) {
      const nextParams = new URLSearchParams(searchParams.toString());
      nextParams.delete("fresh");
      router.push(`${pathname}?${nextParams.toString()}`, { scroll: false });
    }
  }, [
    pathname,
    quizStorageKey,
    quizQuestions.length,
    router,
    searchParams,
    startFresh,
  ]);
  /* eslint-enable react-hooks/set-state-in-effect */

  useEffect(() => {
    if (!isRestored || filteredQuizQuestions.length === 0) return;
    localStorage.setItem(
      quizStorageKey,
      JSON.stringify({
        questionIds:
          orderedQuestionIds ?? quizQuestions.map((question) => question.id),
        retryQuestionIds,
        currentIndex,
        responses,
        quizComplete,
      }),
    );
  }, [
    isRestored,
    quizStorageKey,
    orderedQuestionIds,
    quizQuestions,
    retryQuestionIds,
    currentIndex,
    responses,
    quizComplete,
    filteredQuizQuestions.length,
  ]);

  useEffect(() => {
    if (filteredQuizQuestions.length === 0) return;

    if (resetToken) {
      const nextParams = new URLSearchParams(searchParams.toString());
      nextParams.delete("reset");
      nextParams.set("questionId", filteredQuizQuestions[0].id);
      router.push(`${pathname}?${nextParams.toString()}`, { scroll: false });
      return;
    }

    if (filteredQuizQuestions[currentIndex]?.id !== questionId) {
      const nextParams = new URLSearchParams(searchParams.toString());
      nextParams.set("questionId", filteredQuizQuestions[currentIndex].id);
      router.push(`${pathname}?${nextParams.toString()}`, { scroll: false });
    }
  }, [
    currentIndex,
    filteredQuizQuestions,
    pathname,
    questionId,
    resetToken,
    router,
    searchParams,
  ]);

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
    recordQuestionResult(QUESTION_STATS_KEY, currentQuestion.id, true);
    moveToNextQuestion();
  };
  const handleMarkIncorrect = () => {
    if (!currentQuestion) return;
    setResponses((prev) => [
      ...prev,
      { questionId: currentQuestion.id, userAnswer: "", correct: false },
    ]);
    recordQuestionResult(QUESTION_STATS_KEY, currentQuestion.id, false);
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
    const nextIndex = currentIndex + 1;
    setCurrentIndex(nextIndex);
    if (filteredQuizQuestions[nextIndex]?.id) {
      const nextParams = new URLSearchParams(searchParams.toString());
      nextParams.set("questionId", filteredQuizQuestions[nextIndex].id);
      router.push(`${pathname}?${nextParams.toString()}`, { scroll: false });
    }
    setCardFlipped(false);
    setHintVisible(false);
  };
  const handleChangeCourse = () => {
    router.push("/");
  };
  const resetQuestion = () => {
    setCardFlipped(false);
    setHintVisible(false);
    setResetVersion((version) => version + 1);
  };
  const resetQuiz = () => {
    localStorage.removeItem(quizStorageKey);
    setOrderedQuestionIds(null);
    setRetryQuestionIds(null);
    setCurrentIndex(0);
    setResponses([]);
    setQuizComplete(false);
    resetQuestion();
    const nextParams = new URLSearchParams(searchParams.toString());
    nextParams.delete("questionId");
    nextParams.set("reset", Date.now().toString());
    router.push(`${pathname}?${nextParams.toString()}`, { scroll: false });
  };
  const retryFailedQuestions = () => {
    const failedIds = [
      ...new Set(
        responses
          .filter((response) => !response.correct)
          .map((response) => response.questionId),
      ),
    ];
    if (failedIds.length === 0) return;
    setRetryQuestionIds(failedIds);
    setCurrentIndex(0);
    setResponses([]);
    setQuizComplete(false);
    resetQuestion();
    const nextParams = new URLSearchParams(searchParams.toString());
    nextParams.delete("questionId");
    router.push(`${pathname}?${nextParams.toString()}`, { scroll: false });
  };
  if (!selectedCourse) {
    return <NotFoundCourse onChangeCourse={handleChangeCourse} />;
  }

  const isMultipleChoiceQuestion = !!currentQuestion.options?.length;
  const isMatchingQuestion = !!currentQuestion.matches?.length;
  const isDiagramLabelingQuestion = !!currentQuestion.diagram?.targets.length;
  return (
    <div>
      <Stack component="main" spacing={1}>
        <StudyHeader
          course={selectedCourse}
          onChangeCourse={handleChangeCourse}
        />
        <FlaggedToggle
          flaggedOnly={flaggedOnly}
          setFlaggedOnly={setFlaggedOnly}
        />
        {filteredQuizQuestions.length > 0 && (
          <Stack spacing={1} direction="row">
            {!quizComplete && (
              <Button variant="outlined" type="button" onClick={resetQuestion}>
                Reset question
              </Button>
            )}
            <Button variant="outlined" type="button" onClick={resetQuiz}>
              Reset quiz
            </Button>
          </Stack>
        )}
        {filteredQuizQuestions.length > 0 &&
          !quizComplete &&
          (isDiagramLabelingQuestion ? (
            <QuizDiagramLabelingCard
              key={`${currentQuestion.id}-${resetVersion}`}
              currentQuestion={currentQuestion}
              currentIndex={currentIndex}
              totalQuestions={totalQuestions}
              correctCount={
                responses.filter((response) => response.correct).length
              }
              onAnswer={(correct, userAnswer) => {
                if (!currentQuestion) return;
                setResponses((prev) => [
                  ...prev,
                  { questionId: currentQuestion.id, userAnswer, correct },
                ]);
                recordQuestionResult(
                  QUESTION_STATS_KEY,
                  currentQuestion.id,
                  correct,
                );
                moveToNextQuestion();
              }}
              hintVisible={hintVisible}
              onToggleHint={() => setHintVisible((prev) => !prev)}
              isFlagged={flaggedIds.includes(currentQuestion.id)}
              onClickFlag={(flag: boolean) =>
                handleToggleFlag(currentQuestion.id, flag)
              }
            />
          ) : isMatchingQuestion ? (
            <QuizMatchingCard
              key={`matching-${currentQuestion.id ?? currentIndex}-${resetVersion}`}
              currentQuestion={currentQuestion}
              currentIndex={currentIndex}
              totalQuestions={totalQuestions}
              correctCount={
                responses.filter((response) => response.correct).length
              }
              onAnswer={(correct, userAnswer) => {
                if (!currentQuestion) return;
                setResponses((prev) => [
                  ...prev,
                  { questionId: currentQuestion.id, userAnswer, correct },
                ]);
                recordQuestionResult(
                  QUESTION_STATS_KEY,
                  currentQuestion.id,
                  correct,
                );
                moveToNextQuestion();
              }}
              hintVisible={hintVisible}
              onToggleHint={() => setHintVisible((prev) => !prev)}
              isFlagged={flaggedIds.includes(currentQuestion.id)}
              onClickFlag={(flag: boolean) =>
                handleToggleFlag(currentQuestion.id, flag)
              }
            />
          ) : isMultipleChoiceQuestion ? (
            <QuizMultipleChoiceCard
              key={`multiple-choice-${currentQuestion.id}-${resetVersion}`}
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
              key={`flashcard-${currentQuestion.id}-${resetVersion}`}
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
            onRetryFailed={retryFailedQuestions}
          />
        )}
      </Stack>
    </div>
  );
}
