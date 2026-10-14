import { Chapter } from "@/app/types";
import { ch8DiagramsSection } from "./sections/diagrams";
import { ch8DiseasesAtAGlance } from "./sections/diseases-at-a-glance";
import { ch8PracticeTest } from "./sections/practice-test";
import { ch7PracticeQuestions } from "./sections/provided-practice-questions";

export const bio160Chapter8: Chapter = {
  id: "bio160-8",
  title: "Chapter 8: Diseases & Disorders: Respiratory System",
  description: "Week 4, Chapter 8: Diseases & Disorders: Respiratory System",
  number: 8,
  type: "chapter",
  sections: [
    ch8PracticeTest,
    ch8DiseasesAtAGlance,
    ch8DiagramsSection,
    ch7PracticeQuestions,
  ],
  questions: [],
};
