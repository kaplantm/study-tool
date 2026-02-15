import { Section } from "@/app/types";

export const section1EnergyBalance: Section = {
  id: "2-1-energy-balance",
  title: "Energy Balance",
  description:
    "Explains energy balance, thermogenesis, and basal metabolic rate.",
  number: 1,
  type: "section",
  questions: [
    {
      id: "2-2-1-1",
      question:
        "Generation of heat that the body produces when it breaks down carbs, fats, or protein as energy is known as:",
      answer: "Thermogenesis.",
      hint: null,
      tags: ["thermogenesis", "energy"],
    },
    {
      id: "2-2-1-2",
      question:
        "Which of the following is true regarding Basal Metabolic Rate (BMR)?",
      answer: "It is different for everyone.",
      hint: null,
      tags: ["BMR", "metabolism"],
    },
    {
      id: "2-2-1-3",
      question: "Which type of tissue is more metabolically active?",
      answer: "Lean tissue.",
      hint: null,
      tags: ["lean tissue", "metabolism"],
    },
    {
      id: "2-2-1-4",
      question: "What is basal metabolic rate (BMR)?",
      answer:
        "The rate at which the body expends energy for life-sustaining activities.",
      hint: null,
      tags: ["BMR", "basal metabolism"],
    },
    {
      id: "2-2-1-5",
      question: "What is the thermic effect of food?",
      answer:
        "The energy (heat) required for digestion and processing of food after eating.",
      hint: null,
      tags: ["thermic effect", "digestion"],
    },
    {
      id: "2-2-1-6",
      question: "How can we measure how many calories a food provides?",
      answer: "By using a bomb calorimeter.",
      hint: null,
      tags: ["bomb calorimeter", "calories"],
    },
  ],
};
