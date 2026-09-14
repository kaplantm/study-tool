import { Chapter, Section, Unit } from "@/app/types";

export type StudyMode = "unit" | "chapter" | "section" | "course" | null;

export type ChapterOption = {
  chapter: Chapter;
  unit: Unit;
};

export type SectionOption = {
  chapter: Chapter;
  section: Section;
  sectionIndex: number;
  unit: Unit;
};

export type QuizFeedback = {
  correct: boolean;
  correctAnswer: string;
} | null;

export type QuizResponse = {
  questionId: string;
  userAnswer: string;
  correct: boolean;
};
