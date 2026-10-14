import { Section } from "@/app/types";

const questions = [
  {
    question: "Which of the following is an etiology for Pituitary dwarfism?",
    options: [
      "Benign tumor of the adrenal cortex",
      "Idiopathic, genetics, tumor in the pituitary gland, trauma, or radiation",
      "Abnormal immune response",
      "Immune system attacks and destroys beta cells",
    ],
    answer:
      "Idiopathic, genetics, tumor in the pituitary gland, trauma, or radiation",
  },
  {
    question: "What are the common signs and symptoms of Gigantism?",
    options: [
      "Unexplained weight gain, dry skin, and hair loss",
      "Thickened facial features, enlarged hands/feet, headaches, sweating, and late onset of puberty",
      "Polyuria, polydipsia, and bedwetting",
      "Fat accumulation behind the shoulders and round moon-shaped face",
    ],
    answer:
      "Thickened facial features, enlarged hands/feet, headaches, sweating, and late onset of puberty",
  },
  {
    question:
      "Which disease is characterized by central DI (damage to the pituitary gland) and nephrogenic DI (genetic or chronic kidney disorder)?",
    options: [
      "Acromegaly",
      "Diabetes insipidus",
      "Hypothyroidism",
      "Addison’s disease",
    ],
    answer: "Diabetes insipidus",
  },
  {
    question:
      "What is the primary treatment for Hypothyroidism and Congenital hypothyroidism?",
    options: [
      "Surgery and radiation",
      "Thyroid hormone replacement",
      "Insulin therapy",
      "Growth hormone replacement therapy",
    ],
    answer: "Thyroid hormone replacement",
  },
  {
    question:
      "Which of the following describes the etiology of Graves’ disease?",
    options: [
      "Benign parathyroid tumor",
      "Abnormal immune response",
      "Iodine deficiency",
      "Maternal iodine deficiency",
    ],
    answer: "Abnormal immune response",
  },
  {
    question: "What is the recommended prevention method for a Simple goiter?",
    options: [
      "Not preventable",
      "Adequate intake of dietary iodine and monitoring intake of goiter-producing foods/medication",
      "Regular exercise and maintaining a healthy weight",
      "Growth hormone replacement",
    ],
    answer:
      "Adequate intake of dietary iodine and monitoring intake of goiter-producing foods/medication",
  },
  {
    question:
      "Hyperparathyroidism is typically caused by which of the following?",
    options: [
      "Benign parathyroid tumor",
      "Transient condition following surgical removal of the thyroid gland",
      "Immune system attacks and destroys beta cells",
      "Benign pituitary tumor",
    ],
    answer: "Benign parathyroid tumor",
  },
  {
    question:
      "Which disease presents with tetany of the muscles of the hands and feet, lethargy, anxiety, and trembling limbs due to low PTH and calcium?",
    options: [
      "Hyperparathyroidism",
      "Hypoparathyroidism",
      "Cushing’s syndrome",
      "Conn’s syndrome",
    ],
    answer: "Hypoparathyroidism",
  },
  {
    question: "What are key signs and symptoms of Addison’s disease?",
    options: [
      "Weight loss, fatigue, anorexia, hyperpigmentation in non-sun-exposed areas, and hypotension",
      "Fat accumulation behind the shoulders and round moon-shaped face",
      "Hypertension, headaches, and increased thirst",
      "Polyuria, polydipsia, and polyphagia",
    ],
    answer:
      "Weight loss, fatigue, anorexia, hyperpigmentation in non-sun-exposed areas, and hypotension",
  },
  {
    question:
      "A 'buffalo hump' behind the shoulders and a round 'moon-shaped' face are characteristic signs of which disorder?",
    options: [
      "Addison’s disease",
      "Cushing’s syndrome",
      "Conn’s syndrome",
      "Acromegaly",
    ],
    answer: "Cushing’s syndrome",
  },
  {
    question: "Conn’s syndrome is caused by a benign tumor of which structure?",
    options: [
      "Pituitary gland",
      "Thyroid gland",
      "Adrenal cortex",
      "Parathyroid gland",
    ],
    answer: "Adrenal cortex",
  },
  {
    question: "What is the underlying etiology of Type 1 diabetes mellitus?",
    options: [
      "Excess weight and physical inactivity",
      "Immune system attacks and destroys beta cells",
      "Benign tumor of the pituitary gland",
      "Iodine deficiency",
    ],
    answer: "Immune system attacks and destroys beta cells",
  },
  {
    question:
      "Which disease features signs such as polyuria, polydipsia, polyphagia, weight loss, numbness or tingling in hands or feet, and slow wound healing, with contributors including excess weight and physical inactivity?",
    options: [
      "Type 1 diabetes mellitus",
      "Type 2 diabetes mellitus",
      "Diabetes insipidus",
      "Hypergonadism",
    ],
    answer: "Type 2 diabetes mellitus",
  },
  {
    question: "What are some of the signs of Hypergonadism in boys?",
    options: [
      "Enlarged testicles and penis, facial hair, and voice deepening",
      "Breast development and first menstruation",
      "Buffalo hump and round moon-shaped face",
      "Unexplained weight gain and dry skin",
    ],
    answer: "Enlarged testicles and penis, facial hair, and voice deepening",
  },
  {
    question:
      "Match each endocrine disorder with its primary treatment or management strategy:",
    matches: [
      {
        left: "Pituitary dwarfism",
        right: "Growth hormone replacement therapy",
      },
      {
        left: "Hypothyroidism",
        right: "Thyroid hormone replacement",
      },
      {
        left: "Hypoparathyroidism",
        right: "Calcium replacement therapy with vitamin D",
      },
      {
        left: "Addison’s disease",
        right: "Replacement of glucocorticoids and mineralocorticoids",
      },
    ],
    columnLabels: ["Disease", "Treatment"],
  },
];

export const ch12DiseaseAtAGlance: Section = {
  id: "bio160-12-diseases-at-a-glance",
  title: "Diseases At a Glance",
  description: "Diseases At a Glance",
  number: 2,
  type: "section",
  questions,
};
