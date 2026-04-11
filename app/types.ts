export type GroupMetaData = {
  id: string;
  title: string;
  description: string;
  number: number;
  type: "course" | "chapter" | "unit" | "section";
};

export type GroupWithQuestions = GroupMetaData & {
  questions: Question[];
};

export type Question = {
  id?: string;
  question: string;
  options?: string[];
  answer: string;
  hint?: string | null;
  images?: string[];
  tags?: string[];
};

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
