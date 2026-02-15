import { Chapter } from "@/app/types";
import { section1EnergyBalance } from "./sections/1-energy-balance";
import { section2BodyComposition } from "./sections/2-body-composition";
import { section3ConceptsFitness } from "./sections/3-concepts-fitness";
import { section4PhysicalActivityGuidelines } from "./sections/4-physical-activity-guidelines";

export const chapter2: Chapter = {
  id: "2",
  title: "Energy Balance and Weight Management",
  description:
    "Focuses on energy balance, body composition, fitness concepts, and activity guidelines.",
  number: 2,
  type: "chapter",
  sections: [
    section1EnergyBalance,
    section2BodyComposition,
    section3ConceptsFitness,
    section4PhysicalActivityGuidelines,
  ],
  questions: [],
};
