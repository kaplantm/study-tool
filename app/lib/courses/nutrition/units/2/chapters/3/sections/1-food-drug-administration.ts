import { Section } from "@/app/types";

export const section1FoodDrugAdministration: Section = {
  id: "2-1-food-drug-administration",
  title: "Food and Drug Administration",
  description:
    "Reviews FDA history and key acts governing nutrition labeling and supplements.",
  number: 1,
  type: "section",
  questions: [
    {
      id: "2-3-1-1",
      question:
        'Under which act were phrases like "low fat" and "light" standardized?',
      answer: "The Nutrition Labeling and Education Act (NLEA).",
      hint: null,
      tags: ["NLEA", "labeling"],
    },
    {
      id: "2-3-1-2",
      question:
        "Which act authorized the FDA to establish regulations for dietary supplements?",
      answer: "The Dietary Supplement Health and Education Act (DSHEA).",
      hint: null,
      tags: ["DSHEA", "supplements"],
    },
    {
      id: "2-3-1-3",
      question:
        "Provisions for monitoring ___ came about in 1950 from the FDA?",
      answer: "Food and color additives.",
      hint: null,
      tags: ["FDA", "additives"],
    },
    {
      id: "2-3-1-4",
      question: "How does DSHEA classify dietary supplements?",
      answer: "As food rather than drugs.",
      hint: null,
      tags: ["DSHEA", "classification"],
    },
    {
      id: "2-3-1-5",
      question: "What standardized label must dietary supplements include?",
      answer: "A Supplement Facts label.",
      hint: null,
      tags: ["supplement facts", "labeling"],
    },
    {
      id: "2-3-1-6",
      question:
        "True or false: Supplements do not require FDA approval to be sold.",
      answer: "True",
      hint: null,
      tags: ["supplements", "FDA approval"],
    },
  ],
};
