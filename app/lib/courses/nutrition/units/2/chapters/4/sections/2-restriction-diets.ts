import { Section } from "@/app/types";

export const section2RestrictionDiets: Section = {
  id: "2-restriction-diets",
  title: "Restriction Diets",
  description:
    "Reviews calorie restriction and intermittent fasting approaches.",
  number: 2,
  type: "section",
  questions: [
    {
      id: "4-2-1",
      question:
        "Which type of fasting diet would be most appropriate for someone who wants to eat every day, but is comfortable limiting their eating to a specific window of time?",
      answer: "Time-restricted feeding.",
      hint: null,
      tags: ["time-restricted feeding", "fasting"],
    },
    {
      id: "4-2-2",
      question: "What is a potential outcome of calorie-restriction diets?",
      answer: "Decline in bone density.",
      hint: null,
      tags: ["calorie restriction", "bone density"],
    },
    {
      id: "4-2-3",
      question:
        "A client started their diet last Saturday and ate Sunday, Tuesday, Thursday, and Saturday of the previous week. What diet is this?",
      answer: "Alternate-day fasting.",
      hint: null,
      tags: ["alternate-day fasting", "intermittent fasting"],
    },
    {
      id: "4-2-4",
      question: "What is calorie restriction?",
      answer:
        "Reducing average daily caloric intake below what is typical, without malnutrition or deprivation of essential nutrients.",
      hint: null,
      tags: ["calorie restriction", "definition"],
    },
    {
      id: "4-2-5",
      question: "What is a fasting diet?",
      answer:
        "A pattern where a person does not eat at all or severely limits intake during certain times of the day, week, or month.",
      hint: null,
      tags: ["fasting diet", "definition"],
    },
  ],
};
