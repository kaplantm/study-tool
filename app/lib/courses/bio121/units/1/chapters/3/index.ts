import { Chapter } from "@/app/types";
import { section31UnderstandingEvolution } from "./sections/3-1-understanding-evolution";
import { section32MechanismsOfEvolution } from "./sections/3-2-mechanisms-of-evolution";
import { section33AdaptiveEvolution } from "./sections/3-3-adaptive-evolution";
import { section33TerrestrialBiomes } from "./sections/3-3-terrestrial-biomes";
import { section34AquaticBiomes } from "./sections/3-4-aquatic-biomes";
import { section34CommonMisconceptions } from "./sections/3-4-common-misconceptions";
import { section35NaturalSelectionAndEvolutionaryForces } from "./sections/3-5-natural-selection-and-evolutionary-forces";

export const bio121Chapter3: Chapter = {
  id: "bio121-3",
  title: "Introduction to Evolution",
  description:
    "This chapter explores the mechanisms of evolution, including natural selection, mutation, genetic drift, and gene flow, and discusses evidence for evolutionary change.",
  number: 3,
  type: "chapter",
  sections: [
    section31UnderstandingEvolution,
    section32MechanismsOfEvolution,
    section33TerrestrialBiomes,
    section33AdaptiveEvolution,
    section34AquaticBiomes,
    section34CommonMisconceptions,
    section35NaturalSelectionAndEvolutionaryForces,
  ],
  questions: [],
};
