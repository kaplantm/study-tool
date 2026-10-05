import { Chapter } from "@/app/types";
import { ch8DiseasesAtAGlance } from "./sections/diseases-at-a-glance";
import { ch8DiagramsSection } from "./sections/diagrams";

export const bio160Chapter8: Chapter = {
  id: "bio160-8",
  title: "Chapter 8: Diseases & Disorders: Respiratory System",
  description: "Week 4, Chapter 8: Diseases & Disorders: Respiratory System",
  number: 8,
  type: "chapter",
  sections: [ch8DiseasesAtAGlance, ch8DiagramsSection],
  questions: [],
};
