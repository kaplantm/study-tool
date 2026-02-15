import { Chapter } from "@/app/types";
import { section1SocialMediaMisinformation } from "./sections/1-social-media-misinformation";
import { section2PersonalFoodChoices } from "./sections/2-personal-food-choices";
import { section3BenefitsHealthyEating } from "./sections/3-benefits-healthy-eating";
import { section4FoundationsHealthyDiet } from "./sections/4-foundations-healthy-diet";
import { section5ScientificApproachNutrition } from "./sections/5-scientific-approach-nutrition";

export const chapter1: Chapter = {
  id: "1",
  title: "Planning a Healthy Diet",
  description:
    "Covers trustworthy nutrition information, personal food choices, benefits of healthy eating, foundations of a healthy diet, and the scientific approach to nutrition.",
  number: 1,
  type: "chapter",
  sections: [
    section1SocialMediaMisinformation,
    section2PersonalFoodChoices,
    section3BenefitsHealthyEating,
    section4FoundationsHealthyDiet,
    section5ScientificApproachNutrition,
  ],
  questions: [
    // Optionally, add chapter-level summary or integrative questions here
  ],
};
