import { Section } from "@/app/types";

export const section2PersonalFoodChoices: Section = {
  id: "2-personal-food-choices",
  title: "Personal Food Choices",
  description:
    "Factors influencing personal food choices, including biological, environmental, social, and health status.",
  number: 2,
  type: "section",
  questions: [
    {
      id: "1-2-1",
      question:
        "What factors are 'primary reasons' for selecting certain foods?",
      answer: "Taste + hunger.",
      hint: null,
      tags: ["food choices", "taste", "hunger"],
    },
    {
      id: "1-2-2",
      question: "Which term means 'feeling full or satisfaction of appetite'?",
      answer: "Satiety.",
      hint: null,
      tags: ["satiety", "appetite"],
    },
    {
      id: "1-2-3",
      question: "In general, which taste do humans prefer?",
      answer: "Sweet.",
      hint: null,
      tags: ["taste", "preference"],
    },
    // Generated question
    {
      id: "1-2-4",
      question: "Which macronutrients are the most satiating?",
      answer:
        "Foods higher in protein and carbohydrate are the most satiating while fat is the least satiating.",
      hint: null,
      tags: ["satiety", "macronutrients"],
    },
    // Generated question
    {
      id: "1-2-5",
      question: "Name two environmental factors that affect food choices.",
      answer:
        "Weather, climate, setting, product layout, fast food vs sit down, availability.",
      hint: null,
      tags: ["environmental", "food choices"],
    },
    // Generated question
    {
      id: "1-2-6",
      question: "How can health status affect food choices?",
      answer:
        "Conditions like hypertension, diabetes, pregnancy, and aging can require specific dietary needs or restrictions.",
      hint: null,
      tags: ["health status", "food choices"],
    },
  ],
};
