import { Chapter } from "@/app/types";
import { section41WhatIsAdaptation } from "./sections/4-1-what-is-adaptation";
import { section42StrategiesForDealingWithAChangingEnvironment } from "./sections/4-2-strategies-for-dealing-with-a-changing-environment";

export const bio121Chapter4: Chapter = {
  id: "bio121-4",
  title: "Adaptation",
  description:
    "Understanding the concept of adaptation and the various strategies organisms use to survive in changing environments.",
  number: 4,
  type: "chapter",
  sections: [
    section41WhatIsAdaptation,
    section42StrategiesForDealingWithAChangingEnvironment,
  ],
  questions: [],
};
