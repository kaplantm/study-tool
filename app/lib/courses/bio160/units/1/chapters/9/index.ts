import { Chapter } from "@/app/types";
import { ch9DiseaseAtAGlance } from "./sections/diseases-at-a-glance";
import { ch9Practice } from "./sections/provided-practice-questions";
import { ch9Reading } from "./sections/reading";

export const bio160Chapter9: Chapter = {
  id: "bio160-9",
  title: "Chapter 9: Diseases & Disorders: Gastrointestinal System",
  description:
    "Week 5, Chapter 9: Diseases & Disorders: Gastrointestinal System",
  number: 9,
  type: "chapter",
  sections: [ch9Reading, ch9DiseaseAtAGlance, ch9Practice],
  questions: [],
};
