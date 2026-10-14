import { Section } from "@/app/types";

const questions = [
  {
    question:
      "A young woman reports severe pelvic pain. Laparoscopic examination found endometrial tissue on the uterine wall and ovaries. Name this disease.",
    answer: "Endometriosis",
    tags: ["Critical Thinking"],
  },
  {
    question: "What is the etiology of endometriosis?",
    answer:
      "Idiopathic (unknown), though retrograde menstruation, coelomic metaplasia, and immune system dysfunction are theories.",
    tags: ["Critical Thinking"],
  },
  {
    question: "What treatments are available for endometriosis?",
    answer:
      "Hormonal therapy (birth control pills, GnRH agonists), pain relievers (NSAIDs), and conservative or surgical removal of endometrial implants/hysterectomy.",
    tags: ["Critical Thinking"],
  },
  {
    question:
      "A 16-year-old, sexually active woman complains of a green, frothy, foul-smelling vaginal discharge. What is the possible diagnosis?",
    answer: "Trichomoniasis",
    tags: ["Critical Thinking"],
  },
  {
    question: "What tests would you perform for suspected trichomoniasis?",
    answer:
      "Wet mount microscopy of vaginal discharge (or NAAT / PCR testing).",
    tags: ["Critical Thinking"],
  },
  {
    question: "What treatment is available for trichomoniasis?",
    answer:
      "Antiparasitic medications such as metronidazole or tinidazole (and treating sexual partners as well).",
    tags: ["Critical Thinking"],
  },
  {
    question:
      "A 63-year-old male says he gets up several times a night to urinate but has difficulty getting urination started. A DRE reveals an enlarged prostate gland. What are the possible diagnoses?",
    answer: "Benign prostatic hyperplasia (BPH) or prostate cancer.",
    tags: ["Critical Thinking"],
  },
  {
    question:
      "What tests would you perform for an enlarged prostate with these symptoms?",
    answer:
      "Digital rectal exam (DRE), prostate-specific antigen (PSA) blood test, urinalysis, and biopsy if malignancy is suspected.",
    tags: ["Critical Thinking"],
  },
  {
    question:
      "What treatment is available for benign prostatic hyperplasia (BPH)?",
    answer:
      "Watchful waiting, medications (alpha-blockers, 5-alpha-reductase inhibitors), or minimally invasive / surgical procedures (like TURP).",
    tags: ["Critical Thinking"],
  },
  {
    question:
      "A woman has been infected with HSV-2. Describe how she can reduce the risk of transmission of the infection to her sexual partner.",
    answer:
      "Use barrier methods (condoms), avoid sexual contact during active outbreaks or prodromal symptoms, and take suppressive antiviral medications.",
    tags: ["Critical Thinking"],
  },
  {
    question:
      "Why do many physicians sometimes recommend active surveillance for prostate cancer?",
    answer:
      "Many prostate cancers are slow-growing and localized, meaning the risks and side effects of aggressive treatment (like incontinence or impotence) may outweigh the benefits.",
    tags: ["Critical Thinking"],
  },
  {
    question:
      "When baby Christopher was born, the pediatrician discovered that his left testicle had not descended into the scrotum. Name this disease.",
    answer: "Cryptorchidism",
    tags: ["Critical Thinking"],
  },
  {
    question: "What complications may arise from cryptorchidism?",
    answer: "Infertility and an increased risk of testicular cancer.",
    tags: ["Critical Thinking"],
  },
  {
    question: "What treatments are available for cryptorchidism?",
    answer:
      "Observation (as they sometimes descend on their own within the first few months) or surgical intervention (orchidopexy).",
    tags: ["Critical Thinking"],
  },
  {
    question: "Which is the most common tumor among females?",
    options: [
      "ovarian cysts",
      "breast cancer",
      "uterine fibroids",
      "cervical cancer",
    ],
    answer: "breast cancer",
    tags: ["Multiple Choice"],
  },
  {
    question: "Syphilis is caused by ____________________.",
    options: [
      "human papillomavirus",
      "herpes virus",
      "Trichomonas vaginalis",
      "Treponema pallidum",
    ],
    answer: "Treponema pallidum",
    tags: ["Multiple Choice"],
  },
  {
    question: "Which statement is false about syphilis?",
    options: [
      "Primary syphilis chancres heal after a few weeks.",
      "Congenital syphilis can cause death of the fetus.",
      "Syphilis is only transmitted by sexual contact.",
      "Secondary syphilis is characterized by a non-itching rash.",
    ],
    answer: "Syphilis is only transmitted by sexual contact.",
    tags: ["Multiple Choice"],
  },
  {
    question: "Which disease can lead to pelvic inflammatory disease?",
    options: ["chlamydia", "cystitis", "prostatitis", "herpes"],
    answer: "chlamydia",
    tags: ["Multiple Choice"],
  },
  {
    question:
      "Excessive or prolonged bleeding during menstruation is known as ____________________.",
    options: ["dysmenorrhea", "amenorrhea", "metrorrhagia", "menorrhagia"],
    answer: "menorrhagia",
    tags: ["Multiple Choice"],
  },
  {
    question:
      "Protrusion of the rectum into the posterior aspect of the vagina is known as ____________________.",
    options: ["uterine prolapse", "cystocele", "rectocele", "sepsis"],
    answer: "rectocele",
    tags: ["Multiple Choice"],
  },
  {
    question: "Painful or difficult menses is ____________________.",
    options: ["amenorrhea", "dysmenorrhea", "menorrhea", "metrorrhagia"],
    answer: "dysmenorrhea",
    tags: ["Multiple Choice"],
  },
  {
    question:
      "Failure of the testes to descend from the abdominal cavity is ____________________.",
    options: ["orchitis", "prostatitis", "cryptorchidism", "epididymitis"],
    answer: "cryptorchidism",
    tags: ["Multiple Choice"],
  },
  {
    question:
      "Fingerlike projections at the outer ends of the fallopian tubes are known as ____________________.",
    options: [
      "hymen",
      "fimbriae",
      "ovarian follicles",
      "greater vestibular glands",
    ],
    answer: "fimbriae",
    tags: ["Multiple Choice"],
  },
  {
    question: "A surge in which hormone causes ovulation?",
    options: [
      "progesterone",
      "estrogen",
      "gonadotropin hormone",
      "luteinizing hormone",
    ],
    answer: "luteinizing hormone",
    tags: ["Multiple Choice"],
  },
  {
    question: "Pelvic inflammatory disease can lead to infertility.",
    options: ["True", "False"],
    answer: "True",
    tags: ["True or False"],
  },
  {
    question: "The Pap test detects endometriosis.",
    options: ["True", "False"],
    answer: "False",
    tags: ["True or False"],
  },
  {
    question:
      "The most important risk factor for cervical cancer is infection by the human papillomavirus.",
    options: ["True", "False"],
    answer: "True",
    tags: ["True or False"],
  },
  {
    question: "HSV-2 causes syphilis.",
    options: ["True", "False"],
    answer: "False",
    tags: ["True or False"],
  },
  {
    question: "All men with benign prostatic hyperplasia are symptomatic.",
    options: ["True", "False"],
    answer: "False",
    tags: ["True or False"],
  },
  {
    question: "Benign breast conditions are common.",
    options: ["True", "False"],
    answer: "True",
    tags: ["True or False"],
  },
  {
    question: "Preeclampsia is a disease that occurs during pregnancy.",
    options: ["True", "False"],
    answer: "True",
    tags: ["True or False"],
  },
  {
    question:
      "The only certain means of diagnosing endometriosis is laparoscopy.",
    options: ["True", "False"],
    answer: "True",
    tags: ["True or False"],
  },
  {
    question: "The most common site for ectopic pregnancy is the ovary.",
    options: ["True", "False"],
    answer: "False",
    tags: ["True or False"],
  },
  {
    question: "The etiology of PMS is idiopathic.",
    options: ["True", "False"],
    answer: "True",
    tags: ["True or False"],
  },
  {
    question:
      "The site of sperm development within the testes are the ____________________.",
    answer: "seminiferous tubules",
    tags: ["Fill-Ins"],
  },
  {
    question: "____________________ is inflammation of the testes.",
    answer: "Orchitis",
    tags: ["Fill-Ins"],
  },
  {
    question:
      "The most frequently reported bacterial STI in the United States is ____________________.",
    answer: "chlamydia",
    tags: ["Fill-Ins"],
  },
  {
    question: "The ____________________ encircles the urethra.",
    answer: "prostate gland",
    tags: ["Fill-Ins"],
  },
  {
    question: "____________________ is inflammation of the prostate gland.",
    answer: "Prostatitis",
    tags: ["Fill-Ins"],
  },
  {
    question: "____________________ is an STI caused by a protozoan.",
    answer: "Trichomoniasis",
    tags: ["Fill-Ins"],
  },
  {
    question:
      "HSV-_____ usually causes cold sores; HSV-_____ usually causes genital herpes.",
    answer: "1, 2",
    tags: ["Fill-Ins"],
  },
  {
    question:
      "____________________ is downward displacement of the urinary bladder into the vagina.",
    answer: "Cystocele",
    tags: ["Fill-Ins"],
  },
  {
    question: "____________________ is the cessation of menstrual periods.",
    answer: "Menopause",
    tags: ["Fill-Ins"],
  },
  {
    question:
      "____________________ is the inability to achieve and maintain an erection sufficient for sexual intercourse.",
    answer: "Erectile dysfunction",
    tags: ["Fill-Ins"],
  },
];
export const ch11Practice: Section = {
  id: "bio160-11-practice",
  title: "Provided Practice Questions",
  description: "Provided Practice Questions",
  number: 3,
  type: "section",
  questions,
};
