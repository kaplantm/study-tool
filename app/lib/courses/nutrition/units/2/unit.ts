import { Unit } from "@/app/types";

import { chapter1 } from "./chapters/1/1";
import { chapter2 } from "./chapters/2/2";
import { chapter3 } from "./chapters/3/3";
import { chapter4 } from "./chapters/4/4";

export const nutritionUnit2: Unit = {
  id: "unit-2",
  title: "Nutrition Physiology",
  description:
    "Explores digestion, absorption, energy metabolism, weight management, supplements, and dietary approaches.",
  number: 2,
  type: "unit",
  chapters: [chapter1, chapter2, chapter3, chapter4],
  questions: [],
};
