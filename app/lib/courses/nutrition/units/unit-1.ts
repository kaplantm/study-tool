import { Unit } from "@/app/types";
import { nutritionUnit1Chapter1 } from "./chapters/chapter-1";

export const nutritionUnit1: Unit = {
  id: "nutrition-unit-1",
  title: "Fundamentals of Nutrition",
  description: "Core ideas about nutrition, food choices, and healthy eating.",
  number: 1,
  type: "unit",
  questions: [],
  chapters: [nutritionUnit1Chapter1],
};
