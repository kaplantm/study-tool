import { Chapter } from "@/app/types";
import { section1FoodGroupEliminationDiets } from "./sections/1-food-group-elimination-diets";
import { section2RestrictionDiets } from "./sections/2-restriction-diets";
import { section3TherapeuticDiets } from "./sections/3-therapeutic-diets";

export const chapter4: Chapter = {
  id: "4",
  title: "Fad Diets",
  description:
    "Explores elimination diets, restriction diets, and therapeutic diets.",
  number: 4,
  type: "chapter",
  sections: [
    section1FoodGroupEliminationDiets,
    section2RestrictionDiets,
    section3TherapeuticDiets,
  ],
  questions: [],
};
