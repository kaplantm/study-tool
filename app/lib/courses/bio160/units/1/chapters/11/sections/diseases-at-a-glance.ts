import { Section } from "@/app/types";

const questions = [
  {
    question:
      "Which infection is the primary etiology responsible for causing cervical cancer and genital warts?",
    options: [
      "Human papillomavirus (HPV)",
      "Neisseria gonorrhoeae",
      "Chlamydia trachomatis",
      "Treponema pallidum",
    ],
    answer: "Human papillomavirus (HPV)",
    tags: ["Cervical Cancer", "Genital Warts", "Etiology"],
  },
  {
    question:
      "What is the typical etiology of fibroid tumors of the uterus, ovarian cancer, and breast cancer listed in the table?",
    options: [
      "Bacterial infection",
      "Idiopathic",
      "Viral infection",
      "Chromosomal abnormalities",
    ],
    answer: "Idiopathic",
    tags: ["Uterine Fibroids", "Ovarian Cancer", "Breast Cancer", "Etiology"],
  },
  {
    question:
      "Which reproductive system disorder is characterized by primary causes such as chromosomal abnormalities, hypothalamus problems, and pituitary disease, and secondary causes such as pregnancy, stress, or low body weight?",
    options: ["Dysmenorrhea", "Amenorrhea", "Menorrhagia", "Metrorrhagia"],
    answer: "Amenorrhea",
    tags: ["Amenorrhea", "Etiology", "Signs and Symptoms"],
  },
  {
    question:
      "What are the primary and secondary etiologies associated with dysmenorrhea?",
    options: [
      "Primary: Prostaglandins; Secondary: PID, IUD use, uterine fibroid tumors, endometriosis",
      "Primary: Hormonal imbalance; Secondary: Idiopathic",
      "Primary: Viral infection; Secondary: Bacterial infection",
      "Primary: Aging; Secondary: Trauma",
    ],
    answer:
      "Primary: Prostaglandins; Secondary: PID, IUD use, uterine fibroid tumors, endometriosis",
    tags: ["Dysmenorrhea", "Etiology"],
  },
  {
    question:
      "Which condition is characterized by excessive or prolonged bleeding exceeding 7 days, passing large blood clots, and potential signs of anemia?",
    options: ["Metrorrhagia", "Menorrhagia", "Amenorrhea", "Dysmenorrhea"],
    answer: "Menorrhagia",
    tags: ["Menorrhagia", "Signs and Symptoms"],
  },
  {
    question:
      "Match the STI with its corresponding causative agent or etiology:",
    matches: [
      {
        left: "Gonorrhea",
        right: "Neisseria gonorrhoeae",
      },
      {
        left: "Syphilis",
        right: "Treponema pallidum",
      },
      {
        left: "Chlamydia",
        right: "Chlamydia trachomatis",
      },
      {
        left: "Trichomoniasis",
        right: "Trichomonas vaginalis",
      },
    ],
    columnLabels: ["Infection / Disease", "Causative Agent"],
    tags: ["STIs", "Etiology", "Matching"],
  },
  {
    question:
      "What is the diagnostic method used specifically to confirm Endometriosis?",
    options: ["Pap test", "Laparoscopy", "PSA blood test", "Urinalysis"],
    answer: "Laparoscopy",
    tags: ["Endometriosis", "Diagnosis"],
  },
  {
    question:
      "Which condition involves the inability to feel one or both testicles in the scrotum due to abnormal testicular development?",
    options: ["Orchitis", "Epididymitis", "Cryptorchidism", "Hydrocele"],
    answer: "Cryptorchidism",
    tags: ["Cryptorchidism", "Etiology", "Signs and Symptoms"],
  },
  {
    question:
      "Which of the following describes the presentation of Syphilis during its primary stage?",
    options: [
      "Chancre",
      "Ataxia, paralysis, blindness, and dementia",
      "Rash, fever, fatigue, and sore throat",
      "Asymptomatic latent phase",
    ],
    answer: "Chancre",
    tags: ["Syphilis", "Signs and Symptoms"],
  },
  {
    question:
      "What are the standard treatment approaches for Benign Prostatic Hyperplasia (BPH)?",
    options: [
      "Watchful waiting, alpha-blockers, 5-alpha reductase inhibitors, surgery (TURP)",
      "Antibiotics and antifungal medications exclusively",
      "Radiation therapy and high-dose chemotherapy",
      "Hormone replacement therapy and bed rest",
    ],
    answer:
      "Watchful waiting, alpha-blockers, 5-alpha reductase inhibitors, surgery (TURP)",
    tags: ["Benign Prostatic Hyperplasia", "Treatment"],
  },
  {
    question:
      "Which diagnostic tests and treatments are associated with Pelvic inflammatory disease (PID)?",
    options: [
      "Physical examination, pelvic examination, STI testing, ultrasound; treated with Antibiotics",
      "Pap test and colposcopy; treated with Surgery",
      "PSA blood test and DRE; treated with Alpha-blockers",
      "Laparoscopy; treated with Hormone therapy",
    ],
    answer:
      "Physical examination, pelvic examination, STI testing, ultrasound; treated with Antibiotics",
    tags: ["Pelvic inflammatory disease (PID)", "Diagnosis", "Treatment"],
  },
  {
    question:
      "What are the prevention methods listed for Endometrial cancer, Fibroid tumors of the uterus, and Ovarian cancer?",
    options: [
      "Abstinence and monogamy",
      "HPV vaccine",
      "Not preventable",
      "Latex condoms",
    ],
    answer: "Not preventable",
    tags: [
      "Endometrial cancer",
      "Fibroid tumors of the uterus",
      "Ovarian cancer",
      "Prevention",
    ],
  },
  {
    question:
      "Which breast condition is characterized by firm, round, smooth, rubbery, easily movable lumps with clearly defined edges?",
    options: [
      "Breast cysts",
      "Fibroadenomas",
      "Fibrocystic breast changes",
      "Breast cancer",
    ],
    answer: "Fibroadenomas",
    tags: ["Fibroadenomas", "Signs and Symptoms"],
  },
  {
    question: "What are the primary signs and symptoms of Metrorrhagia?",
    options: [
      "No menstrual period",
      "Bleeding between periods, irregular cycles, cramping/abdominal pain with bleeding",
      "Severe PMS symptoms causing marked distress",
      "High blood pressure and proteinuria",
    ],
    answer:
      "Bleeding between periods, irregular cycles, cramping/abdominal pain with bleeding",
    tags: ["Metrorrhagia", "Signs and Symptoms"],
  },
  {
    question:
      "Match the gestational or pregnancy-related complication with its typical etiology:",
    matches: [
      {
        left: "Ectopic pregnancy",
        right:
          "PID, fallopian tube surgery, prior ectopic pregnancy, endometriosis",
      },
      {
        left: "Spontaneous abortion (Miscarriage)",
        right:
          "Fetal genetic abnormality, infection, maternal physical problems, hormonal factors",
      },
      {
        left: "Gestational diabetes mellitus",
        right: "Pregnancy-related hormonal changes",
      },
      {
        left: "Preeclampsia",
        right: "Idiopathic",
      },
    ],
    columnLabels: ["Condition", "Etiology"],
    tags: ["Pregnancy Complications", "Etiology", "Matching"],
  },
  {
    question:
      "Which category of Prostatitis involves bacterial infection requiring antibiotics, and which is associated with chronic inflammation without fever?",
    options: [
      "Categories 1 & 2 (Acute/Chronic bacterial)",
      "Category 4",
      "Cryptorchidism",
      "Epididymitis",
    ],
    answer: "Categories 1 & 2 (Acute/Chronic bacterial)",
    tags: ["Prostatitis", "Etiology", "Treatment"],
  },
  {
    question:
      "What is the primary antiparasitic medication used to treat Trichomoniasis?",
    options: ["Metronidazole", "Penicillin", "Amiodarone", "Erythromycin"],
    answer: "Metronidazole",
    tags: ["Trichomoniasis", "Treatment"],
  },
  {
    question:
      "Match the pelvic floor or pelvic relaxation disorder with its common causes:",
    matches: [
      {
        left: "Uterine prolapse",
        right: "Pregnancy, childbirth, aging",
      },
      {
        left: "Cystocele",
        right: "Pregnancy, childbirth, aging",
      },
      {
        left: "Rectocele",
        right: "Pregnancy, childbirth, aging",
      },
      {
        left: "Menopause",
        right: "Aging",
      },
    ],
    columnLabels: ["Disorder", "Etiology"],
    tags: ["Pelvic Floor Disorders", "Menopause", "Etiology", "Matching"],
  },
  {
    question:
      "Which diagnostic tests are typically used for Prostate cancer evaluation?",
    options: [
      "DRE, PSA blood test, ultrasound, prostate biopsy",
      "Pap test and HPV DNA test",
      "Wet-mount microscopy and KOH whiff test",
      "Endometrial tissue removal and CA 125 blood test",
    ],
    answer: "DRE, PSA blood test, ultrasound, prostate biopsy",
    tags: ["Prostate cancer", "Diagnosis"],
  },
  {
    question:
      "What are the common medical management options for Erectile dysfunction listed in the table?",
    options: [
      "Oral medications (PDE5 inhibitors), vacuum pumps, penile implants, psychotherapy",
      "Antibiotics and scrotal elevation",
      "Hormone replacement therapy and bed rest",
      "Watchful waiting and dietary management",
    ],
    answer:
      "Oral medications (PDE5 inhibitors), vacuum pumps, penile implants, psychotherapy",
    tags: ["Erectile dysfunction", "Treatment"],
  },
];

export const ch11DiseaseAtAGlance: Section = {
  id: "bio160-11-diseases-at-a-glance",
  title: "Diseases At a Glance",
  description: "Diseases At a Glance",
  number: 2,
  type: "section",
  questions,
};
