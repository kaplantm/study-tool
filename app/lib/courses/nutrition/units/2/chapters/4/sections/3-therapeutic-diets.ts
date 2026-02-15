import { Section } from "@/app/types";

export const section3TherapeuticDiets: Section = {
  id: "3-therapeutic-diets",
  title: "Therapeutic Diets",
  description:
    "Summarizes common therapeutic diets and when they are prescribed.",
  number: 3,
  type: "section",
  questions: [
    {
      id: "4-3-1",
      question: "Why is the low sodium diet typically prescribed?",
      answer: "Hypertension.",
      hint: null,
      tags: ["low sodium", "hypertension"],
    },
    {
      id: "4-3-2",
      question: "What type of diet is used before or after surgery?",
      answer: "Clear liquid diet.",
      hint: null,
      tags: ["clear liquid", "surgery"],
    },
    {
      id: "4-3-3",
      question: "What is the main benefit of the regular diet?",
      answer: "It is well balanced with a wide variety of foods.",
      hint: null,
      tags: ["regular diet", "balanced"],
    },
    {
      id: "4-3-4",
      question: "What is a therapeutic diet?",
      answer:
        "A meal plan that controls the intake of certain foods or nutrients as part of medical treatment.",
      hint: null,
      tags: ["therapeutic diet", "definition"],
    },
    {
      id: "4-3-5",
      question: "What does a clear liquid diet include?",
      answer: "Coffee, tea, clear juices, gelatin, and clear broth.",
      hint: null,
      tags: ["clear liquid diet", "foods"],
    },
  ],
};
