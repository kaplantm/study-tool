import { Section } from "@/app/types";

const questions = [
  {
    question: "What is the primary function of the endocrine system?",
    options: [
      "To secrete chemical messengers called hormones into the blood to affect distant target cells",
      "To pump blood and oxygen through the cardiovascular system",
      "To provide structural support and movement through bones and muscles",
      "To filter waste products and excess water from the blood",
    ],
    answer:
      "To secrete chemical messengers called hormones into the blood to affect distant target cells",
  },
  {
    question:
      "Which gland is often referred to as the 'master gland' of the endocrine system?",
    options: ["Thyroid gland", "Adrenal gland", "Pituitary gland", "Pancreas"],
    answer: "Pituitary gland",
  },
  {
    question:
      "What is the homeostatic center of the body that controls the pituitary gland?",
    options: ["Hypothalamus", "Medulla oblongata", "Thalamus", "Cerebellum"],
    answer: "Hypothalamus",
  },
  {
    question:
      "Which type of control mechanism stops the further release of a hormone when its circulating level is adequate?",
    options: [
      "Positive-feedback mechanism",
      "Negative-feedback mechanism",
      "Autocrine mechanism",
      "Neutral feedback mechanism",
    ],
    answer: "Negative-feedback mechanism",
  },
  {
    question:
      "Which hormone is produced by the anterior pituitary and stimulates the growth of bone and tissues?",
    options: [
      "Oxytocin",
      "Antidiuretic hormone (ADH)",
      "Growth hormone (GH)",
      "Insulin",
    ],
    answer: "Growth hormone (GH)",
  },
  {
    question: "What is another name for antidiuretic hormone (ADH)?",
    options: ["Somatotropin", "Vasopressin", "Thyroxine", "Aldosterone"],
    answer: "Vasopressin",
  },
  {
    question: "Which hormones are secreted by the thyroid gland?",
    options: [
      "Insulin and glucagon",
      "Thyroxine (T4) and triiodothyronine (T3)",
      "Epinephrine and norepinephrine",
      "Estrogen and progesterone",
    ],
    answer: "Thyroxine (T4) and triiodothyronine (T3)",
  },
  {
    question: "What is the primary function of parathyroid hormone (PTH)?",
    options: [
      "To decrease blood calcium concentration",
      "To increase blood calcium concentration",
      "To lower blood glucose levels",
      "To regulate salt balance in the kidneys",
    ],
    answer: "To increase blood calcium concentration",
  },
  {
    question:
      "Which part of the adrenal glands secretes epinephrine and norepinephrine during stress situations?",
    options: [
      "Adrenal cortex",
      "Adrenal medulla",
      "Islets of Langerhans",
      "Posterior pituitary",
    ],
    answer: "Adrenal medulla",
  },
  {
    question:
      "Which cells in the pancreatic islets (islets of Langerhans) secrete insulin?",
    options: ["Alpha cells", "Beta cells", "Delta cells", "Gamma cells"],
    answer: "Beta cells",
  },
  {
    question:
      "What hormone works antagonistically to insulin by raising blood glucose levels?",
    options: ["Glucagon", "Somatostatin", "Oxytocin", "Calcitonin"],
    answer: "Glucagon",
  },
  {
    question:
      "Which diagnostic tests are commonly used to measure hormone levels in blood or urine samples?",
    options: [
      "X-ray and MRI",
      "ELISA and radioimmunoassay (RIA)",
      "Electrocardiogram and EEG",
      "Biopsy and ultrasound",
    ],
    answer: "ELISA and radioimmunoassay (RIA)",
  },
  {
    question:
      "Pituitary dwarfism in children is caused by the inadequate secretion of which hormone?",
    options: [
      "Thyroid-stimulating hormone",
      "Growth hormone",
      "Insulin",
      "Adrenocorticotropic hormone",
    ],
    answer: "Growth hormone",
  },
  {
    question:
      "Hypersecretion of growth hormone in children results in which condition?",
    options: [
      "Acromegaly",
      "Gigantism",
      "Cushing's syndrome",
      "Addison's disease",
    ],
    answer: "Gigantism",
  },
  {
    question:
      "Acromegaly is caused by excess growth hormone secretion during which stage of life?",
    options: ["Infancy", "Childhood", "Adulthood", "Fetal development"],
    answer: "Adulthood",
  },
  {
    question:
      "Diabetes insipidus is caused by the decreased secretion or action of which hormone?",
    options: [
      "Insulin",
      "Antidiuretic hormone (ADH)",
      "Cortisol",
      "Aldosterone",
    ],
    answer: "Antidiuretic hormone (ADH)",
  },
  {
    question: "What is the chief symptom of diabetes insipidus?",
    options: [
      "Polyuria (abnormally large amounts of urine)",
      "Oliguria (little to no urine production)",
      "Severe hypoglycemia",
      "Hypertension",
    ],
    answer: "Polyuria (abnormally large amounts of urine)",
  },
  {
    question:
      "Hashimoto's disease is a common autoimmune cause of which thyroid disorder?",
    options: [
      "Hyperthyroidism",
      "Hypothyroidism",
      "Thyroid cancer",
      "Simple goiter",
    ],
    answer: "Hypothyroidism",
  },
  {
    question: "What is congenital hypothyroidism in newborns also known as?",
    options: ["Cretinism", "Graves' disease", "Myxedema", "Addison's disease"],
    answer: "Cretinism",
  },
  {
    question: "Graves' disease is the most common form of which condition?",
    options: [
      "Hypothyroidism",
      "Hyperthyroidism",
      "Hypoparathyroidism",
      "Diabetes mellitus",
    ],
    answer: "Hyperthyroidism",
  },
  {
    question:
      "Approximately half of the people with Graves' disease develop bulging eyes, a condition known as:",
    options: [
      "Graves' ophthalmopathy",
      "Exophthalmic goiter",
      "Retinopathy",
      "Macular degeneration",
    ],
    answer: "Graves' ophthalmopathy",
  },
  {
    question:
      "Simple goiter can be caused by a dietary deficiency of which element?",
    options: ["Calcium", "Iron", "Iodine", "Potassium"],
    answer: "Iodine",
  },
  {
    question:
      "Hyperparathyroidism leads to an excess of circulating calcium in the blood, a condition called:",
    options: ["Hypocalcemia", "Hypercalcemia", "Hyperkalemia", "Hyponatremia"],
    answer: "Hypercalcemia",
  },
  {
    question: "What is the principal manifestation of hypoparathyroidism?",
    options: [
      "Tetany (a sustained muscular contraction)",
      "Flaccid paralysis",
      "Rapid weight loss",
      "Extreme joint pain",
    ],
    answer: "Tetany (a sustained muscular contraction)",
  },
  {
    question:
      "Primary adrenal insufficiency, resulting from the undersecretion of hormones by the adrenal cortex, is known as:",
    options: [
      "Cushing's syndrome",
      "Conn's syndrome",
      "Addison's disease",
      "Hashimoto's disease",
    ],
    answer: "Addison's disease",
  },
  {
    question: "What is a distinctive physical sign of Addison's disease?",
    options: [
      "Buffalo hump behind the shoulders",
      "Moon-shaped face",
      "Hyperpigmentation in non-sun-exposed areas",
      "Enlarged jaw and tongue",
    ],
    answer: "Hyperpigmentation in non-sun-exposed areas",
  },
  {
    question:
      "Cushing's syndrome is caused by an overproduction of which hormone?",
    options: ["Cortisol", "Aldosterone", "Insulin", "Thyroxine"],
    answer: "Cortisol",
  },
  {
    question:
      "Conn's syndrome is caused by the overproduction of which hormone from the adrenal cortex?",
    options: ["Cortisol", "Aldosterone", "Epinephrine", "Glucagon"],
    answer: "Aldosterone",
  },
  {
    question: "Type 1 diabetes mellitus is characterized by:",
    options: [
      "Insulin resistance and normal insulin production",
      "Little or no insulin production due to autoimmune destruction of beta cells",
      "Temporary glucose intolerance during pregnancy",
      "Overproduction of insulin by the pancreas",
    ],
    answer:
      "Little or no insulin production due to autoimmune destruction of beta cells",
  },
  {
    question:
      "Which of the following is a classic triad of symptoms associated with diabetes mellitus?",
    options: [
      "Polyuria, polydipsia, and polyphagia",
      "Hypotension, bradycardia, and hypothermia",
      "Tetany, tremors, and anxiety",
      "Jaundice, ascites, and pruritus",
    ],
    answer: "Polyuria, polydipsia, and polyphagia",
  },
  {
    question:
      "What are acidic waste products produced when cells use fat and protein for energy instead of glucose called?",
    options: ["Electrolytes", "Ketones", "Enzymes", "Trophins"],
    answer: "Ketones",
  },
  {
    question:
      "What test is used to monitor long-term control of diabetes, indicating average blood glucose levels over the past 90 days?",
    options: [
      "Fasting blood glucose test",
      "Oral glucose tolerance test",
      "Glycosylated hemoglobin testing",
      "Urinalysis specific gravity test",
    ],
    answer: "Glycosylated hemoglobin testing",
  },
  {
    question:
      "Hypergonadism before puberty produces precocious puberty, which is defined as the onset of puberty before age 8 in girls and before age ___ in boys.",
    options: ["7", "9", "10", "11"],
    answer: "9",
  },
  {
    question: "How does growth hormone level change as a person ages?",
    options: [
      "It increases significantly",
      "It remains completely constant",
      "It decreases with age",
      "It fluctuates wildly every decade",
    ],
    answer: "It decreases with age",
  },
  {
    question:
      "What age-related change occurs in the kidneys regarding aldosterone?",
    options: [
      "An increase in sensitivity to aldosterone",
      "A decline in the kidneys' sensitivity to aldosterone",
      "A total cessation of aldosterone production",
      "An overproduction of renin",
    ],
    answer: "A decline in the kidneys' sensitivity to aldosterone",
  },
];

export const ch12Reading: Section = {
  id: "bio160-12-reading",
  title: "Reading",
  description: "Reading",
  number: 1,
  type: "section",
  questions,
};
