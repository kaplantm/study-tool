import { Section } from "@/app/types";

const questions = [
  {
    question: "Acromegaly results from hyperactivity of what gland?",
    options: [
      "a. thyroid",
      "b. parathyroid",
      "c. anterior pituitary",
      "d. posterior pituitary",
    ],
    answer: "c. anterior pituitary",
    tags: ["multiple-choice"],
  },
  {
    question: "Which hormone increases the blood calcium level?",
    options: [
      "a. glucagon",
      "b. parathyroid hormone",
      "c. androgen",
      "d. insulin",
    ],
    answer: "b. parathyroid hormone",
    tags: ["multiple-choice"],
  },
  {
    question: "Hyperglycemia is an indication of which disease?",
    options: [
      "a. Cushing’s disease",
      "b. Addison’s disease",
      "c. diabetes insipidus",
      "d. Graves’ disease",
    ],
    answer: "a. Cushing’s disease",
    tags: ["multiple-choice"],
  },
  {
    question:
      "Fat accumulation behind the shoulders is an indication of which disease?",
    options: [
      "a. Graves’ disease",
      "b. Cushing’s disease",
      "c. Addison’s disease",
      "d. Conn’s disease",
    ],
    answer: "b. Cushing’s disease",
    tags: ["multiple-choice"],
  },
  {
    question: "ADH deficiency causes which disease?",
    options: [
      "a. IDDM",
      "b. NIDDM",
      "c. diabetes insipidus",
      "d. ketoacidosis",
    ],
    answer: "c. diabetes insipidus",
    tags: ["multiple-choice"],
  },
  {
    question:
      "Which of these disorders is associated with hypersecretion of thyroxine?",
    options: [
      "a. Graves’ disease",
      "b. gigantism",
      "c. cretinism",
      "d. acromegaly",
    ],
    answer: "a. Graves’ disease",
    tags: ["multiple-choice"],
  },
  {
    question: "Which gland secretes epinephrine and norepinephrine?",
    options: ["a. pancreas", "b. parathyroid", "c. testes", "d. adrenal"],
    answer: "d. adrenal",
    tags: ["multiple-choice"],
  },
  {
    question:
      "Which of the following is caused by a deficiency in corticosteroids?",
    options: [
      "a. Addison’s disease",
      "b. Conn’s disease",
      "c. diabetes insipidus",
      "d. Cushing’s syndrome",
    ],
    answer: "a. Addison’s disease",
    tags: ["multiple-choice"],
  },
  {
    question:
      "An absolute insulin deficiency is characteristic of ___________________.",
    options: [
      "a. type 1 diabetes",
      "b. gestational diabetes",
      "c. type 2 diabetes",
      "d. diabetes insipidus",
    ],
    answer: "a. type 1 diabetes",
    tags: ["multiple-choice"],
  },
  {
    question: "Iodine is required for the body to make:",
    options: ["a. insulin", "b. adrenalin", "c. thyroxine", "d. glucose"],
    answer: "c. thyroxine",
    tags: ["multiple-choice"],
  },
  {
    question: "Kidney stones are likely to form in hypoparathyroidism.",
    options: ["True", "False"],
    answer: "False",
    tags: ["true-false"],
  },
  {
    question: "Hypercalcemia causes tetany.",
    options: ["True", "False"],
    answer: "False",
    tags: ["true-false"],
  },
  {
    question: "Glucagon prevents hyperglycemia.",
    options: ["True", "False"],
    answer: "False",
    tags: ["true-false"],
  },
  {
    question:
      "Steroids that suppress the inflammatory response, as in arthritis, are produced by the thyroid.",
    options: ["True", "False"],
    answer: "False",
    tags: ["true-false"],
  },
  {
    question:
      "Umbilical hernia and a protruding abdomen accompanies Addison’s disease.",
    options: ["True", "False"],
    answer: "False",
    tags: ["true-false"],
  },
  {
    question: "Insulin is secreted by alpha cells.",
    options: ["True", "False"],
    answer: "False",
    tags: ["true-false"],
  },
  {
    question: "A person with Graves’ disease is very sensitive to cold.",
    options: ["True", "False"],
    answer: "False",
    tags: ["true-false"],
  },
  {
    question: "Dehydration can develop in diabetes insipidus.",
    options: ["True", "False"],
    answer: "True",
    tags: ["true-false"],
  },
  {
    question: "Cushing’s syndrome results from an excess of glucocorticoids.",
    options: ["True", "False"],
    answer: "True",
    tags: ["true-false"],
  },
  {
    question: "Glucagon elevates blood glucose level.",
    options: ["True", "False"],
    answer: "True",
    tags: ["true-false"],
  },
];
export const ch12Practice: Section = {
  id: "bio160-12-practice",
  title: "Provided Practice Questions",
  description: "Provided Practice Questions",
  number: 3,
  type: "section",
  questions,
};
