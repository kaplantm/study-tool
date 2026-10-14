import { Questions, Section } from "@/app/types";

const questions: Questions = [
  {
    question: "The etiology of lupus is which of the following?",
    options: ["Known", "Idiopathic", "Infectious", "Genetic only"],
    answer: "Idiopathic",
  },
  {
    question:
      "Helper T-cell clones stimulate antibody production by which of the following?",
    options: ["Plasma cells", "Complement cells", "B cells", "T cells"],
    answer: "Plasma cells",
  },
  {
    question: "Type IV hypersensitivity is also known as what type?",
    options: ["Cytotoxic", "Delayed", "Immediate", "Immune-complex"],
    answer: "Delayed",
  },
  {
    question:
      "What is the primary reason for the delay in Type IV hypersensitivity?",
    options: [
      "Action of mast cells",
      "Release of histamine",
      "Action of T cells",
      "Action of B cells",
    ],
    answer: "T cells",
  },
  {
    question:
      "Which of the following describes the signs and symptoms of drug-induced lupus erythematosus?",
    options: [
      "Similar to those of SLE",
      "Similar to those of ART",
      "Similar to those of EIA",
      "Similar to those of HIV",
    ],
    answer: "Similar to those of SLE",
  },
  {
    question:
      "What is the group of plasma proteins that assist in the destruction of foreign cells called?",
    options: ["ELISA", "SLE", "Complement", "Albumin"],
    answer: "Complement",
  },
  {
    question:
      "What are the two separate but overlapping arms of adaptive immunity?",
    options: [
      "B cells and T cells",
      "Specific immunity and nonspecific immunity",
      "Antigens and immunoglobulin",
      "Cell-mediated immunity and humoral immunity",
    ],
    answer: "Cell-mediated immunity and humoral immunity",
  },
  {
    question:
      "What are the most common initial signs and symptoms of scleroderma?",
    options: [
      "Anaphylaxis, high fever, and rashes",
      "Secondary Raynaud's phenomenon, thickening and tightening of the skin of the fingers, and pain in two or more joints",
      "Dry eyes, dry mouth, and joint swelling",
      "Butterfly rash, fatigue, and hair loss",
    ],
    answer:
      "Secondary Raynaud's phenomenon, thickening and tightening of the skin of the fingers, and pain in two or more joints",
  },
  {
    question: "Type I hypersensitivity is known as which of the following?",
    options: ["Delayed", "Immediate", "Cytotoxic", "Immune-complex"],
    answer: "Immediate",
  },
  {
    question:
      "Which component provides defense against viruses, abnormal cells, and other intercellular pathogens?",
    options: [
      "Immunoglobulins",
      "Cell-mediated immunity",
      "Humoral immunity",
      "Antibodies",
    ],
    answer: "Cell-mediated immunity",
  },
  {
    question: "Sjögren's syndrome is best described as which of the following?",
    options: [
      "An acute infectious disease affecting the lungs",
      "A chronic, progressive autoimmune disease that affects the exocrine glands of the body",
      "A localized allergy affecting the skin",
      "A congenital immunodeficiency disorder",
    ],
    answer:
      "A chronic, progressive autoimmune disease that affects the exocrine glands of the body",
  },
  {
    question:
      "Why is the rash associated with cutaneous lupus commonly known as a discoid rash?",
    options: [
      "Because the areas of the rash are red",
      "Because the areas of the rash are irregular",
      "Because the areas of the rash are painful",
      "Because the areas of the rash are circular",
    ],
    answer: "Because the areas of the rash are circular",
  },
  {
    question:
      "What are leukocytes that can engulf and destroy pathogens called?",
    options: ["Neutrophils", "Macrophages", "Mast cells", "Phagocytes"],
    answer: "Phagocytes",
  },
  {
    question:
      "Cutaneous or discoid lupus affects only what part of the body, accounting for approximately 10% of cases?",
    options: ["Skin", "Heart", "Brain", "Lungs"],
    answer: "Skin",
  },
  {
    question: "What are the hallmark symptoms of Sjögren's syndrome?",
    options: [
      "Anaphylaxis and hives",
      "Joint pain and butterfly rash",
      "Thickened skin and Raynaud's phenomenon",
      "Dry eyes and mouth",
    ],
    answer: "Dry eyes and mouth",
  },
  {
    question: "What is the most common type of allergy?",
    options: ["Type I", "Type IV", "Type III", "Type II"],
    answer: "Type I",
  },
  {
    question: "Type III hypersensitivity is known as which of the following?",
    options: ["Immediate", "Immune-complex", "Cytotoxic", "Delayed"],
    answer: "Immune-complex",
  },
  {
    question:
      "A Type I allergic reaction is triggered by which immunoglobulin that responds to allergens?",
    options: ["IgA", "IgD", "IgE", "IgG"],
    answer: "IgE",
  },
  {
    question:
      "The immune system protects the body by distinguishing between which of the following?",
    options: [
      "Upper from lower",
      "Positive from negative",
      "Self from non-self",
      "Inside from outside",
    ],
    answer: "Self from non-self",
  },
  {
    question:
      "Helper T cells become activated by what substance that was engulfed and digested by a phagocyte?",
    options: ["An antigen", "Erythrocytes", "A cytotoxic T cell", "Complement"],
    answer: "An antigen",
  },
  {
    question:
      "What can cause dehydration, nausea, disorientation, hallucinations, seizures, and convulsions?",
    options: [
      "Very high fevers",
      "Very low fevers",
      "Hypersensitivity",
      "Hyposensitivity",
    ],
    answer: "Very high fevers",
  },
  {
    question: "Interferons increase the activity of which of the following?",
    options: [
      "Phagocytes and neutrophils",
      "Macrophages and natural killer cells",
      "Erythrocytes and leukocytes",
      "Plasma and complement",
    ],
    answer: "Macrophages and natural killer cells",
  },
  {
    question:
      "A common sign of systemic lupus erythematosus (SLE) includes which of the following?",
    options: [
      "High IgG levels",
      "Positive FACS test",
      "Positive ELISA test",
      "A butterfly rash across the cheeks and nose",
    ],
    answer: "A butterfly rash across the cheeks and nose",
  },
  {
    question:
      "After an injury, damaged cells release potent chemical signals including which of the following?",
    options: [
      "Albumin and plasma",
      "Complement and plasma",
      "Histamines and kinins",
      "Phagocytes and neutrophils",
    ],
    answer: "Histamines and kinins",
  },
  {
    question: "Natural killer cells are a type of which of the following?",
    options: ["Leukocyte", "Albumin", "Erythrocyte", "Plasma cell"],
    answer: "Leukocyte",
  },
  {
    question: "Type II hypersensitivity is known as which of the following?",
    options: ["Immediate", "Delayed", "Cytotoxic", "Immune-complex"],
    answer: "Cytotoxic",
  },
  {
    question: "Approximately what percentage of lupus patients are women?",
    options: ["50%", "70%", "90%", "100%"],
    answer: "90%",
  },
  {
    question:
      "If a patient develops which type of lupus will their signs and symptoms disappear within days to months?",
    options: ["Drug-induced", "Systemic", "Neonatal", "Cutaneous"],
    answer: "Drug-induced",
  },
  {
    question:
      "Scleroderma is a chronic autoimmune disease affecting which tissue type?",
    options: ["Lungs", "Brain", "Connective tissue", "Heart"],
    answer: "Connective tissue",
  },
];

export const ch2PracticeTest: Section = {
  id: "bio160-2-practice-test",
  title: "Ch2: Practice Quiz",
  description: "Ch2: Practice Quiz",
  number: 2,
  type: "section",
  questions,
};
