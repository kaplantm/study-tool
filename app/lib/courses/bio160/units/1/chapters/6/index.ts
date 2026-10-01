import { Chapter } from "@/app/types";
import { ch6AnatomyReviewSection } from "./sections/anatomy-review";
import { ch6AnatomyReviewDiagramsSection } from "./sections/anatomy-review-diagrams";

export const bio160Chapter6: Chapter = {
  id: "bio160-6",
  title: "Chapter 6: Diseases & Disorders: Cardiovascular System",
  description: "Week 3, Chapter 6: Diseases & Disorders: Cardiovascular System",
  number: 6,
  type: "chapter",
  sections: [ch6AnatomyReviewSection, ch6AnatomyReviewDiagramsSection],
  questions: [],
};
