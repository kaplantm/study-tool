export type Question = {
  id: string;
  question: string;
  answer: string;
  hint: string | null;
  tags: string[];
  courseId: string;
  chapterId: string;
  unitId: string;
  sectionId: string;
};

export type Group = {
  id: string;
  title: string;
  description: string;
  number: number;
  type: "course" | "chapter" | "unit" | "section";
  questions: Question[];
};

export const groupSubgroupMap = {
  course: "chapters",
  chapter: "units",
  unit: "sections",
  section: null,
};

export type Course = Group & { type: "course"; chapters: Chapter[] };
export type Chapter = Group & { type: "chapter"; units: Unit[] };
export type Unit = Group & { type: "unit"; sections: Section[] };
export type Section = Group & { type: "section" };
