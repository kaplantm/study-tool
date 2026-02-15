import { Section } from "@/app/types";

export const section4PhysicalActivityGuidelines: Section = {
  id: "2-4-physical-activity-guidelines",
  title: "Physical Activity Guidelines",
  description:
    "Summarizes guidelines for aerobic and muscle-strengthening activity across age groups.",
  number: 4,
  type: "section",
  questions: [
    {
      id: "2-2-4-1",
      question:
        "The Physical Activity Committee suggests Americans get 150 minutes of ___ per week: a) bone strengthening activity b) moderate-intensity aerobic activity c) muscle strengthening activity d) stretching",
      answer: "Moderate-intensity aerobic activity.",
      hint: null,
      tags: ["guidelines", "aerobic"],
    },
    {
      id: "2-2-4-2",
      question:
        "Which is true regarding physical fitness guidelines for youth?",
      answer:
        "They should get at least 60 minutes of physical activity per day.",
      hint: null,
      tags: ["youth", "guidelines"],
    },
    {
      id: "2-2-4-3",
      question:
        "Which of the following scenarios falls within the adult physical fitness guidelines?",
      answer:
        "150 minutes of moderate activity per week and 2 days of muscle strengthening.",
      hint: null,
      tags: ["adult", "guidelines"],
    },
    {
      id: "2-2-4-4",
      question:
        "What additional activity is recommended for older adults in their weekly routine?",
      answer:
        "Multicomponent activity that includes balance training along with aerobic and muscle-strengthening activities.",
      hint: null,
      tags: ["older adults", "balance"],
    },
    {
      id: "2-2-4-5",
      question:
        "How many days per week should adults perform muscle-strengthening activities?",
      answer: "2 or more days per week.",
      hint: null,
      tags: ["muscle strengthening", "adults"],
    },
  ],
};
