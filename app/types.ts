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

export type DiagramLabelTarget = {
  id: string;
  label: string;
  /** Horizontal position of the rectangle's top-left corner as a percentage. */
  x: number;
  /** Vertical position of the rectangle's top-left corner as a percentage. */
  y: number;
  /** Rectangle width as a percentage of the image width (0–100). */
  width?: number;
  /** Rectangle height as a percentage of the image height (0–100). */
  height?: number;
};

export type Diagram = {
  imageUrl: string;
  alt: string;
  targets: DiagramLabelTarget[];
};

export type MatchingPair = {
  left: string;
  right: string;
};

/** A matching row with any number of columns. */
export type MatchingGroup = {
  values: string[];
};

export type Question = {
  id?: string;
  question: string;
  options?: string[];
  /** The answer for flashcard and multiple-choice questions. */
  answer?: string;
  /** Rows for a matching question. */
  matches?: (MatchingPair | MatchingGroup)[];
  /** Optional labels displayed above each matching-question column. */
  columnLabels?: string[];
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
