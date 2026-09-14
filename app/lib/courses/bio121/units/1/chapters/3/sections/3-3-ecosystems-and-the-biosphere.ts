import { Section } from "@/app/types";

export const section33EcosystemsAndTheBiosphere: Section = {
  id: "bio121-3-3", // wait, this is chapter 3 in the attachment, but the user said chapter 3 is "Introduction to Evolution".
  // Looking at the attachment: "Environmental Biology: Chapter 3 - Ecosystems and the Biosphere"
  // In the workspace: bio121-3 is "Introduction to Evolution".
  // So this "Chapter 3" from the attachment is likely a different chapter in the real course or a misnumbering in the attachment.
  // I'll name it based on the content.
  title: "Ecosystems and the Biosphere",
  description:
    "Exploring the components of ecosystems, food webs, energy flow, and biogeochemical cycles.",
  number: 3,
  type: "section",
  questions: [
    {
      id: "bio121-3-3-1",
      question: "What is the difference between an ecosystem and a biome?",
      answer:
        "An ecosystem is a community of organisms and their abiotic environment, while a biome is a large-scale community of organisms defined primarily by dominant plant types and similar climatic conditions.",
      hint: null,
      tags: ["ecosystem", "biome"],
    },
    {
      id: "bio121-3-3-2",
      question: "How does energy flow through a food chain?",
      answer:
        "Energy flows linearly from producers to primary consumers, then to higher-level consumers, and finally to decomposers, with energy being lost as heat at each trophic level.",
      hint: null,
      tags: ["food chain", "energy flow", "trophic levels"],
    },
    {
      id: "bio121-3-3-3",
      question:
        "What is the difference between gross primary productivity and net primary productivity?",
      answer:
        "Gross primary productivity is the total rate at which photosynthetic producers incorporate energy from the sun, while net primary productivity is the energy remaining after accounting for the producers' own metabolism and heat loss.",
      hint: null,
      tags: ["productivity", "photosynthesis"],
    },
    {
      id: "bio121-3-3-4",
      question: "What is biomagnification?",
      answer:
        "Biomagnification is the increasing concentration of persistent, toxic substances (like DDT or mercury) in organisms at each successive trophic level of a food web.",
      hint: null,
      tags: ["biomagnification", "toxins"],
    },
    {
      id: "bio121-3-3-5",
      question: "Distinguish between autotrophs and heterotrophs.",
      answer:
        "Autotrophs (like plants and some bacteria) harness light or chemical energy to produce their own food, while heterotrophs acquire energy by consuming other living or recently living organisms.",
      hint: null,
      tags: ["autotroph", "heterotroph"],
    },
  ],
};
