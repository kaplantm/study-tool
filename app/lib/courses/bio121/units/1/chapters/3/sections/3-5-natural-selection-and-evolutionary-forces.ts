import { Section } from "@/app/types";

export const section35NaturalSelectionAndEvolutionaryForces: Section = {
  id: "bio121-3-5",
  title: "Natural Selection and Evolutionary Forces",
  description:
    "A deep dive into how populations evolve through natural selection, mutation, genetic drift, and gene flow.",
  number: 5,
  type: "section",
  questions: [
    {
      id: "bio121-3-5-1",
      question:
        "How does natural selection affect allele frequencies in a population?",
      answer:
        "Natural selection acts on advantageous phenotypes, leading to more offspring and thereby increasing the frequency of the beneficial alleles in the next generation.",
      hint: null,
      moreInfo: [
        "Natural selection is a non-random process.",
        "It requires variation in traits that are heritable.",
        "Differential reproductive success is the mechanism.",
      ],
      tags: ["natural selection", "allele frequencies"],
    },
    {
      id: "bio121-3-5-2",
      question:
        "What are the outcomes of a mutation on an organism's phenotype and fitness?",
      answer:
        "Mutations can be beneficial (increasing fitness), harmful (decreasing fitness), or neutral (no effect on fitness).",
      hint: null,
      moreInfo: [
        "Mutations are the ultimate source of genetic variation.",
        "A mutation in a non-coding region might have no effect on phenotype.",
        "Environmental factors can influence mutation rates.",
      ],
      tags: ["mutation", "fitness"],
    },
    {
      id: "bio121-3-5-3",
      question: "Why is genetic drift stronger in small populations?",
      answer:
        "In small populations, the random sampling of gametes has a larger proportional impact on the gene pool, meaning the loss or fixation of a single allele significantly changes allele frequencies.",
      hint: null,
      moreInfo: [
        "Genetic drift is a stochastic (random) process.",
        "It can lead to the loss of even beneficial alleles in very small populations.",
        "Unlike natural selection, drift does not necessarily lead to adaptation.",
      ],
      tags: ["genetic drift", "population size"],
    },
    {
      id: "bio121-3-5-4",
      question:
        "What is the difference between the bottleneck effect and the founder effect?",
      answer:
        "The bottleneck effect is a sharp reduction in population size due to a random environmental disaster, while the founder effect occurs when a small group splits off to start a new population.",
      hint: null,
      moreInfo: [
        "Both are forms of genetic drift.",
        "Both lead to reduced genetic diversity.",
        "The bottleneck is often caused by sudden events like fires or floods.",
      ],
      tags: ["bottleneck effect", "founder effect", "genetic drift"],
    },
    {
      id: "bio121-3-5-5",
      question:
        "How does gene flow influence the genetic similarity between populations?",
      answer:
        "Gene flow, via migration of individuals or gametes, introduces new alleles and tends to reduce genetic differences between populations, opposing divergence.",
      hint: null,
      moreInfo: [
        "Gene flow can introduce new genetic variation into a population.",
        "High levels of gene flow can prevent speciation.",
        "It acts as a homogenizing force between populations.",
      ],
      tags: ["gene flow", "migration", "divergence"],
    },
    {
      id: "bio121-3-5-6",
      question: "What is frequency-dependent selection?",
      answer:
        "It is an evolutionary process where the fitness of a trait depends on how common or rare it is in the population. For example, rare morphs may have a survival advantage because predators overlook them.",
      hint: null,
      moreInfo: [
        "Negative frequency-dependent selection favors rare phenotypes.",
        "Positive frequency-dependent selection favors common phenotypes.",
        "It can maintain genetic polymorphism in a population.",
      ],
      tags: ["frequency-dependent selection"],
    },
    {
      id: "bio121-3-5-7",
      question:
        "What is the difference between stabilizing, directional, and diversifying selection?",
      answer:
        "Stabilizing selection favors average phenotypes; directional selection shifts the population toward an extreme; diversifying selection favors both extremes over the intermediate.",
      hint: null,
      moreInfo: [
        "Stabilizing selection reduces variance.",
        "Directional selection can occur during environmental change.",
        "Diversifying (disruptive) selection can lead to speciation.",
      ],
      tags: ["selection types", "stabilizing", "directional", "diversifying"],
    },
    {
      id: "bio121-3-5-8",
      question: "What is sexual selection?",
      answer:
        "Sexual selection is the evolution of secondary sexual characteristics that provide mating advantages, even if they don't directly increase survival.",
      hint: null,
      moreInfo: [
        "Intrasexual selection involves competition between members of the same sex.",
        "Intersexual selection involves mate choice (e.g., female choice).",
        "Sexual selection can sometimes conflict with natural selection (e.g., heavy peacock tails).",
      ],
      tags: ["sexual selection"],
    },
  ],
};
