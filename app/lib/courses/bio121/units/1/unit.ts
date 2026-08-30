import { Unit } from "@/app/types";
import { bio121Chapter2 } from "./chapters/2/1";
import { bio121Chapter3 } from "./chapters/3/index";

export const bio121Unit1: Unit = {
  id: "bio121-unit-1",
  title: "Ecology: Atmosphere, Climate & Circulation",
  description: "How the atmosphere and oceans shape climate and ecosystems.",
  number: 1,
  type: "unit",
  chapters: [bio121Chapter2, bio121Chapter3],
  questions: [],
};
