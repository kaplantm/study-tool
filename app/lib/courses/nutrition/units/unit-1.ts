import { Unit } from "@/app/types";

import { chapter1 } from "./chapters/1/1";
import { chapter2 } from "./chapters/2/2";

export const nutritionUnit1: Unit = {
  id: "unit-1",
  title: "Fundamentals of Nutrition",
  description:
    "Covers the basics of nutrition, healthy eating, and the science behind dietary choices.",
  number: 1,
  type: "unit",
  chapters: [chapter1, chapter2],
  questions: [], // Optionally, add unit-level summary or integrative questions here
};
