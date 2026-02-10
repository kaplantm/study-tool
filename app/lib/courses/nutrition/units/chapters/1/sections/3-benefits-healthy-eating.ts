import { Section } from "@/app/types";

export const section3BenefitsHealthyEating: Section = {
  id: "3-benefits-healthy-eating",
  title: "Benefits of Healthy Eating",
  description:
    "Exploring the benefits of healthy eating, including disease prevention, weight maintenance, and overall well-being.",
  number: 3,
  type: "section",
  questions: [
    {
      id: "1-3-1",
      question:
        "Why should we avoid highly processed foods as part of a healthy diet?",
      answer:
        "Highly processed food add unneeded sodium, saturated fats, and sugar to many diet, increasing the risk of chronic diseases.",
      hint: null,
      tags: ["processed foods", "chronic disease"],
    },
    {
      id: "1-3-2",
      question:
        "Choosing foods that do not have ___ can improve your cholesterol.",
      answer: "Trans-fat.",
      hint: null,
      tags: ["cholesterol", "trans-fat"],
    },
    // Generated question
    {
      id: "1-3-3",
      question: "What is the DASH diet and how does it help heart health?",
      answer:
        "The DASH diet is low in saturated fat and dietary cholesterol and rich in potassium, magnesium, calcium, and fiber, which can help improve heart health.",
      hint: null,
      tags: ["DASH diet", "heart health"],
    },
    // Generated question
    {
      id: "1-3-4",
      question: "How do antioxidants help reduce cancer risk?",
      answer:
        "Antioxidants protect cells from damage caused by free radicals, lowering cancer risk.",
      hint: null,
      tags: ["antioxidants", "cancer risk"],
    },
    // Generated question
    {
      id: "1-3-5",
      question: "Name two mental health benefits of healthy eating.",
      answer:
        "Reduced depression and anxiety, enhanced brain function and memory.",
      hint: null,
      tags: ["mental health", "healthy eating"],
    },
  ],
};
