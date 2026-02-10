import { Chapter } from "@/app/types";
import { section1PlanningADiet } from "./sections/1-planning-a-diet";
import { section2CaloriesMacronutrients } from "./sections/2-calories-macronutrients";
import { section3SixClassesNutrients } from "./sections/3-six-classes-nutrients";

export const chapter3: Chapter = {
  id: "3",
  title: "Planning a Diet & Nutrients",
  description:
    "Covers principles and tools for planning a healthy diet, understanding calories, macronutrients, and the six classes of nutrients.",
  number: 3,
  type: "chapter",
  sections: [
    section1PlanningADiet,
    section2CaloriesMacronutrients,
    section3SixClassesNutrients,
  ],
  questions: [
    // Optionally, add chapter-level summary or integrative questions here
  ],
};
