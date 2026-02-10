import { Section } from "@/app/types";

export const section1SocialMediaMisinformation: Section = {
  id: "1-social-media-misinformation",
  title: "Social Media, Mixed Messages & Misinformation",
  description:
    "Understanding trustworthy nutrition information and identifying misinformation.",
  number: 1,
  type: "section",
  questions: [
    {
      id: "1-1-1",
      question:
        "In order for nutrition info to be considered trustworthy, it must be science-based, peer reviewed and what else?",
      answer: "Replicable.",
      hint: null,
      tags: ["trustworthy", "nutrition", "science"],
    },
    {
      id: "1-1-2",
      question:
        "You can generally trust nutritional info that comes from qualified professionals. What credential is given to a nutrition expert that must complete a specialized degree in nutrition, dietetics, public health or another related science?",
      answer: "Registered Dietitian Nutritionist.",
      hint: null,
      tags: ["credential", "nutrition", "expert"],
    },
    {
      id: "1-1-3",
      question:
        "What is the most reliable source for food information that is regulated by the Food and Drug Administration (FDA)?",
      answer: "The nutrition label.",
      hint: null,
      tags: ["FDA", "nutrition label", "reliable source"],
    },
    {
      id: "1-1-4",
      question:
        "Does the advertisement claim Food and Drug Administration (FDA) approval? Is it legal to suggest FDA approval as a part of any marketing claim?",
      answer:
        "It is illegal to suggest FDA approval as a part of any marketing claim. However, all medical products sold across state lines must be registered with the FDA.",
      hint: null,
      tags: ["FDA", "advertisement", "approval"],
    },
    // Generated question
    {
      id: "1-1-5",
      question:
        "List the criteria required to become a Registered Dietitian Nutritionist (RDN).",
      answer:
        "Complete a minimum of a bachelor’s degree, complete a supervised practice program, pass an exam by the Commission on Dietetic Registration (CDR), and complete continuing education requirements each year.",
      hint: null,
      tags: ["RDN", "criteria", "nutrition"],
    },
    // Generated question
    {
      id: "1-1-6",
      question:
        "What should you look for to determine if a media source is reliable for nutrition information?",
      answer: "Look at citation, sources, and qualifications.",
      hint: null,
      tags: ["media", "nutrition", "reliable"],
    },
  ],
};
