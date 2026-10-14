import { Chapter } from "@/app/types";
import { ch11DiseaseAtAGlance } from "./sections/diseases-at-a-glance";
import { ch11Practice } from "./sections/provided-practice-questions";
import { ch11Reading } from "./sections/reading";

export const bio160Chapter11: Chapter = {
  id: "bio160-11",
  title: "Chapter 11: Diseases & Disorders: Reproductive System",
  description: "Week 6, Chapter 11: Diseases & Disorders: Reproductive System",
  number: 11,
  type: "chapter",
  sections: [ch11Reading, ch11DiseaseAtAGlance, ch11Practice],
  questions: [],
};
