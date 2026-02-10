import { Chapter } from "@/app/types";
import { section1DietaryGuidelines } from "./sections/1-dietary-guidelines";
import { section2FiveFoodGroups } from "./sections/2-five-food-groups";
import { section3AnalyzingFoodLabels } from "./sections/3-analyzing-food-labels";

export const chapter2: Chapter = {
  id: "2",
  title: "Tools for Planning a Healthy Diet",
  description:
    "Covers dietary guidelines, the five food groups, and how to analyze food labels for healthy eating.",
  number: 2,
  type: "chapter",
  sections: [
    section1DietaryGuidelines,
    section2FiveFoodGroups,
    section3AnalyzingFoodLabels,
  ],
  questions: [
    // Optionally, add chapter-level summary or integrative questions here
  ],
};
