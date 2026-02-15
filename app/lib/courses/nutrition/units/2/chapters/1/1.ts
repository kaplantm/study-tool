import { Chapter } from "@/app/types";
import { section1AnatomyDigestiveTract } from "./sections/1-anatomy-digestive-tract";
import { section2Digestion } from "./sections/2-digestion";
import { section3Absorption } from "./sections/3-absorption";
import { section4EnergyMetabolism } from "./sections/4-energy-metabolism";
import { section5AtpDigestiveProcess } from "./sections/5-atp-digestive-process";
import { section6HealthGiTract } from "./sections/6-health-gi-tract";

export const chapter1: Chapter = {
  id: "1",
  title: "Introduction to Absorption, Digestion & Metabolism",
  description:
    "Covers the digestive tract, digestion, absorption, and the basics of energy metabolism and ATP.",
  number: 1,
  type: "chapter",
  sections: [
    section1AnatomyDigestiveTract,
    section2Digestion,
    section3Absorption,
    section4EnergyMetabolism,
    section5AtpDigestiveProcess,
    section6HealthGiTract,
  ],
  questions: [],
};
