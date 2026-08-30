import { Section } from "@/app/types";

export const section32MechanismsOfEvolution: Section = {
  id: "bio121-3-2",
  title: "Mechanisms of Evolution",
  description:
    "Examining the four forces that drive changes in allele frequencies: natural selection, mutation, genetic drift, and gene flow.",
  number: 2,
  type: "section",
  questions: [
    {
      id: "bio121-3-2-1",
      question:
        "What is the ultimate source of all new genetic variation in a population?",
      answer: "Mutation.",
      hint: null,
      tags: ["mutation", "variation"],
    },
    {
      id: "bio121-3-2-2",
      question:
        "How does genetic drift affect small populations compared to large ones?",
      answer:
        "Genetic drift has a much stronger effect on small populations, as random sampling error in offspring genotypes can more easily lead to the fixation or loss of alleles.",
      hint: null,
      tags: ["genetic drift", "population size"],
    },
    {
      id: "bio121-3-2-3",
      question:
        "Explain the difference between the bottleneck effect and the founder effect.",
      answer:
        "The bottleneck effect occurs when a random disaster drastically reduces a population's size, leaving a survivor group with reduced genetic diversity. The founder effect occurs when a small subset of a population migrates to a new area, establishing a new population with genetics that reflect only the founders.",
      hint: null,
      tags: ["bottleneck effect", "founder effect", "genetic drift"],
    },
    {
      id: "bio121-3-2-4",
      question:
        "How does gene flow (migration) influence the genetic divergence between populations?",
      answer:
        "Gene flow introduces alleles from one population to another, which can reduce differences between populations and oppose divergence.",
      hint: null,
      tags: ["gene flow", "migration", "divergence"],
    },
    {
      id: "bio121-3-2-5",
      question:
        "In what way is natural selection different from genetic drift in terms of its directionality?",
      answer:
        "Natural selection is a directional, non-random process driven by environmental pressures that favor advantageous phenotypes. Genetic drift is a random process due to chance sampling of alleles.",
      hint: null,
      tags: ["natural selection", "genetic drift", "directionality"],
    },
  ],
};
