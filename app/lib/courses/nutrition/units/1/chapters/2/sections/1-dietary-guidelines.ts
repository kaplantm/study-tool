import { Section } from "@/app/types";

export const section1DietaryGuidelines: Section = {
  id: "1-dietary-guidelines",
  title: "The Dietary Guidelines",
  description:
    "Overview of food group plans and dietary guidelines for building a balanced diet.",
  number: 1,
  type: "section",
  questions: [
    // Generated question
    {
      id: "2-1-1",
      question:
        "What is the purpose of food group plans in dietary guidelines?",
      answer:
        "Food group plans help build a balanced diet by selecting foods from different groups and preferences.",
      hint: null,
      tags: ["dietary guidelines", "food groups", "balanced diet"],
    },
    // Generated question
    {
      id: "2-1-2",
      question:
        "Name one of the three USDA food patterns recommended in the dietary guidelines.",
      answer:
        "Healthy U.S.-Style Pattern, Healthy Vegetarian Pattern, or Healthy Mediterranean-Style Pattern.",
      hint: null,
      tags: ["USDA", "food patterns"],
    },
    // Generated question
    {
      id: "2-1-3",
      question:
        "Why is it important to make daily selections from all food groups?",
      answer:
        "All food groups are essential, and daily selections should be made to meet the needs of individuals of different ages and activity levels.",
      hint: null,
      tags: ["food groups", "daily selection"],
    },
  ],
};
