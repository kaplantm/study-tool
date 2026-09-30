export type GroupMetaData = {
  id: string;
  title: string;
  description: string;
  number: number;
  type: "course" | "chapter" | "unit" | "section";
};

export type GroupWithQuestions = GroupMetaData & {
  questions: Questions;
};

export type MatchingPair = {
  left: string;
  right: string;
};

export type Question = {
  id?: string;
  question: string;
  options?: string[];
  /** The answer for flashcard and multiple-choice questions. */
  answer?: string;
  /** Pairs for a matching question. Values must be unique within the question. */
  matches?: MatchingPair[];
  /** An image with numbered targets that the learner labels. */
  diagram?: Diagram;
  hint?: string | null;
  moreInfo?: string[] | null;
  images?: string[];
  tags?: string[];
};
export type Questions = Question[];

export type Section = GroupWithQuestions & { type: "section" };
export type Chapter = GroupWithQuestions & {
  type: "chapter";
  sections: Section[];
};
export type Unit = GroupWithQuestions & {
  type: "unit";
  chapters: Chapter[];
};
export type Course = GroupMetaData & { type: "course"; units: Unit[] };
