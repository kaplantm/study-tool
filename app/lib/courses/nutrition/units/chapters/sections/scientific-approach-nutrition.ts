import { Section } from "@/app/types";

export const nutritionUnit1Chapter1Section5: Section = {
  id: "nutrition-u1-c1-s5",
  title: "Scientific Approach to Nutrition",
  description: "How nutrition science uses the scientific method and evidence.",
  number: 5,
  type: "section",
  questions: [
    {
      id: "nutrition-u1-c1-s5-q1",
      question:
        "In an experiment where one group gets vitamin C and the other does not, what is the vitamin C group called?",
      answer: "The experimental group.",
      hint: "It’s the group receiving the treatment.",
      tags: ["scientific-method", "experiments"],
    },
    {
      id: "nutrition-u1-c1-s5-q2",
      question:
        "Which step of the scientific method involves making an educated guess?",
      answer: "Formulating a hypothesis.",
      hint: "It comes after research and before testing.",
      tags: ["scientific-method", "hypothesis"],
    },
    {
      id: "nutrition-u1-c1-s5-q3",
      question: "What does nutrition science study?",
      answer:
        "How humans ingest, digest, absorb, transport, use, and excrete food and its nutrients.",
      hint: "It links food to health through body processes.",
      tags: ["definition", "nutrition-science"],
    },
    {
      id: "nutrition-u1-c1-s5-q4",
      question: "Why can observational studies not establish cause and effect?",
      answer:
        "They observe relationships without controlled interventions, so they cannot prove causation.",
      hint: "No controlled treatment is applied.",
      tags: ["research", "observational-studies"],
    },
    {
      id: "nutrition-u1-c1-s5-q5",
      question: "What does epidemiology study?",
      answer:
        "The occurrence, distribution, and contributing factors of health problems in populations.",
      hint: "Population-level health patterns.",
      tags: ["epidemiology", "research"],
    },
  ],
};
