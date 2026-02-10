import { Chapter } from "@/app/types";
import { nutritionUnit1Chapter1Section3 } from "./sections/benefits-healthy-eating";
import { nutritionUnit1Chapter1Section4 } from "./sections/foundations-healthy-diet";
import { nutritionUnit1Chapter1Section2 } from "./sections/personal-food-choices";
import { nutritionUnit1Chapter1Section5 } from "./sections/scientific-approach-nutrition";
import { nutritionUnit1Chapter1Section1 } from "./sections/social-media-misinformation";

export const nutritionUnit1Chapter1: Chapter = {
  id: "nutrition-u1-c1",
  title: "Planning a Healthy Diet",
  description:
    "Evaluating nutrition information and making informed food choices.",
  number: 1,
  type: "chapter",
  questions: [],
  sections: [
    nutritionUnit1Chapter1Section1,
    nutritionUnit1Chapter1Section2,
    nutritionUnit1Chapter1Section3,
    nutritionUnit1Chapter1Section4,
    nutritionUnit1Chapter1Section5,
  ],
};
