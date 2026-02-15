import { Course } from "@/app/types";
import { nutritionUnit1 } from "./units/1/unit";
import { nutritionUnit2 } from "./units/2/unit";

export const nutritionCourse: Course = {
  id: "nutrition",
  title: "Nutrition",
  description: "Learn about the science of nutrition and healthy eating.",
  number: 1,
  type: "course",
  units: [nutritionUnit1, nutritionUnit2],
};
