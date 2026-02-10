import { Chapter } from "@/app/types";
import { nutritionUnit1Chapter1Section1 } from "./sections/1-social-media-misinformation";
import { nutritionUnit1Chapter1Section2 } from "./sections/2-personal-food-choices";
import { nutritionUnit1Chapter1Section3 } from "./sections/3-benefits-healthy-eating";
import { nutritionUnit1Chapter1Section4 } from "./sections/4-foundations-healthy-diet";
import { nutritionUnit1Chapter1Section5 } from "./sections/5-scientific-approach-nutrition";

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
