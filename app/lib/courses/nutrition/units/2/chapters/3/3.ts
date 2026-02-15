import { Chapter } from "@/app/types";
import { section1FoodDrugAdministration } from "./sections/1-food-drug-administration";
import { section2HerbalSupplements } from "./sections/2-herbal-supplements";
import { section3PharmacologicalInterventions } from "./sections/3-pharmacological-interventions";
import { section4WeightLossInterventions } from "./sections/4-weight-loss-interventions";

export const chapter3: Chapter = {
  id: "3",
  title: "Dietary Supplements & Weight Loss",
  description:
    "Reviews supplement regulation, herbal supplements, and pharmacological and surgical interventions for weight loss.",
  number: 3,
  type: "chapter",
  sections: [
    section1FoodDrugAdministration,
    section2HerbalSupplements,
    section3PharmacologicalInterventions,
    section4WeightLossInterventions,
  ],
  questions: [],
};
