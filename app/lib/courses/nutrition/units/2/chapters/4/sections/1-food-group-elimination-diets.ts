import { Section } from "@/app/types";

export const section1FoodGroupEliminationDiets: Section = {
  id: "1-food-group-elimination-diets",
  title: "Food Group Elimination Diets",
  description:
    "Explains elimination diets and how they help identify food sensitivities.",
  number: 1,
  type: "section",
  questions: [
    {
      id: "4-1-1",
      question: "Which of the following is true regarding elimination diets?",
      answer:
        "They can be used to determine if specific foods contribute to symptoms.",
      hint: null,
      tags: ["elimination diets", "food sensitivity"],
    },
    {
      id: "4-1-2",
      question:
        "How long do most food elimination diets require you to keep a food journal?",
      answer: "A few weeks.",
      hint: null,
      tags: ["food journal", "elimination diet"],
    },
    {
      id: "4-1-3",
      question:
        "Which of the following is true regarding blood serum food sensitivity tests?",
      answer: "They have low specificity and low sensitivity.",
      hint: null,
      tags: ["food sensitivity", "tests"],
    },
    {
      id: "4-1-4",
      question: "What is the goal of an elimination diet?",
      answer:
        "To remove a food or food group for a period of time to determine if it contributes to symptoms.",
      hint: null,
      tags: ["elimination diet", "goal"],
    },
    {
      id: "4-1-5",
      question: "What is the Rule of 3s in the elimination diet process?",
      answer:
        "Three weeks of elimination, a 1-day food challenge, then a 3-day waiting period before another rechallenge.",
      hint: null,
      tags: ["elimination diet", "reintroduction"],
    },
  ],
};
