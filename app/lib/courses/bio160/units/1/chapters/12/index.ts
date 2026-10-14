import { Chapter } from "@/app/types";
import { ch12DiseaseAtAGlance } from "./sections/diseases-at-a-glance";
import { ch12Practice } from "./sections/provided-practice-questions";
import { ch12Reading } from "./sections/reading";

export const bio160Chapter12: Chapter = {
  id: "bio160-12",
  title: "Chapter 12: Diseases & Disorders: Endocrine System",
  description: "Week 6, Chapter 12: Diseases & Disorders: Endocrine System",
  number: 12,
  type: "chapter",
  sections: [ch12Reading, ch12DiseaseAtAGlance, ch12Practice],
  questions: [],
};
