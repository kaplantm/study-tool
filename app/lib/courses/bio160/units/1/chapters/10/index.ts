import { Chapter } from "@/app/types";
import { ch10DiseaseAtAGlance } from "./sections/diseases-at-a-glance";
import { ch10Practice } from "./sections/provided-practice-questions";
import { ch10Reading } from "./sections/reading";

export const bio160Chapter10: Chapter = {
  id: "bio160-10",
  title: "Chapter 10: Diseases & Disorders: Urinary System",
  description: "Week 5, Chapter 10: Diseases & Disorders: Urinary System",
  number: 10,
  type: "chapter",
  sections: [ch10Reading, ch10DiseaseAtAGlance, ch10Practice],
  questions: [],
};
