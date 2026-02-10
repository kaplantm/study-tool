import { Course } from "@/app/types";
import { nutritionUnit1 } from "./units/unit-1";

export const nutritionCourse: Course = {
  id: "nutrition",
  title: "Nutrition",
  description: "Learn about the science of nutrition and healthy eating.",
  number: 1,
  type: "course",
  units: [nutritionUnit1],
};
