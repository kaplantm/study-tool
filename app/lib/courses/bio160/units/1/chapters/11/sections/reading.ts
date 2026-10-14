import { Section } from "@/app/types";

const questions = [
  {
    question:
      "Which gland lies on either side of the vaginal entrance and produces a lubricating secretion during sexual intercourse?",
    options: [
      "Greater vestibular glands (Bartholin's glands)",
      "Adrenal glands",
      "Pituitary gland",
      "Seminal vesicles",
    ],
    answer: "Greater vestibular glands (Bartholin's glands)",
  },
  {
    question:
      "What is the site of fertilization of the ovum in the female reproductive system?",
    options: ["Uterus", "Fallopian tubes", "Ovary", "Vagina"],
    answer: "Fallopian tubes",
  },
  {
    question:
      "Which hormone surge triggers ovulation at the midpoint of the reproductive cycle?",
    options: ["FSH", "LH", "Progesterone", "Oxytocin"],
    answer: "LH",
  },
  {
    question:
      "What protein tumor marker is found in greater concentrations in tumor cells and may be used for diagnosis of endometrial and ovarian cancer?",
    options: ["PSA", "CA 125", "HER2", "GnRH"],
    answer: "CA 125",
  },
  {
    question: "What is the most important risk factor for cervical cancer?",
    options: [
      "Smoking",
      "Infection by the human papillomavirus (HPV)",
      "Obesity",
      "Early menarche",
    ],
    answer: "Infection by the human papillomavirus (HPV)",
  },
  {
    question:
      "Which benign smooth muscle tumors of the uterus affect 20-40% of women age 35 and older?",
    options: [
      "Fibroid tumors (leiomyomas)",
      "Ovarian cysts",
      "Fibroadenomas",
      "Endometrial polyps",
    ],
    answer: "Fibroid tumors (leiomyomas)",
  },
  {
    question:
      "What is the most common benign tumor of the breast, most frequently affecting women ages 15-30?",
    options: [
      "Breast cysts",
      "Fibroadenomas",
      "Fibrocystic breast changes",
      "Intraductal papilloma",
    ],
    answer: "Fibroadenomas",
  },
  {
    question:
      "What term describes the failure of menstruation to begin by age 16?",
    options: [
      "Secondary amenorrhea",
      "Primary amenorrhea",
      "Menorrhagia",
      "Metrorrhagia",
    ],
    answer: "Primary amenorrhea",
  },
  {
    question:
      "Clinically, how is menorrhagia defined in terms of total blood loss per menses?",
    options: [
      "Exceeding 20 mL lasting longer than 3 days",
      "Exceeding 50 mL lasting longer than 5 days",
      "Exceeding 80 mL lasting longer than 7 days",
      "Exceeding 100 mL lasting 2 days",
    ],
    answer: "Exceeding 80 mL lasting longer than 7 days",
  },
  {
    question:
      "Which severe form of premenstrual symptoms significantly interferes with a woman's life and affects 3-8% of menstruating women?",
    options: [
      "Premenstrual dysphoric disorder (PMDD)",
      "Dysmenorrhea",
      "Endometriosis",
      "Metrorrhagia",
    ],
    answer: "Premenstrual dysphoric disorder (PMDD)",
  },
  {
    question:
      "What condition involves endometrial tissue becoming embedded outside the uterus?",
    options: [
      "Ectopic pregnancy",
      "Endometriosis",
      "Preeclampsia",
      "Cystocele",
    ],
    answer: "Endometriosis",
  },
  {
    question: "What is the most common site of an ectopic pregnancy?",
    options: ["Ovary", "Cervix", "Fallopian tubes", "Abdominal cavity"],
    answer: "Fallopian tubes",
  },
  {
    question:
      "What condition is characterized by high blood pressure and excess protein in the urine after 20 weeks of pregnancy?",
    options: [
      "Gestational diabetes",
      "Preeclampsia",
      "Eclampsia",
      "Placenta previa",
    ],
    answer: "Preeclampsia",
  },
  {
    question:
      "What is the term for the permanent cessation of menstrual periods related to aging, usually occurring between ages 45 and 55?",
    options: ["Menopause", "Menarche", "Perimenopause", "Atresia"],
    answer: "Menopause",
  },
  {
    question:
      "What is a downward displacement of the urinary bladder into the vagina called?",
    options: ["Rectocele", "Cystocele", "Uterine prolapse", "Enterocele"],
    answer: "Cystocele",
  },
  {
    question: "Where are sperm produced within the male testes?",
    options: [
      "Epididymis",
      "Seminiferous tubules",
      "Prostate gland",
      "Seminal vesicles",
    ],
    answer: "Seminiferous tubules",
  },
  {
    question:
      "Which male accessory gland produces roughly 65% of the fluid portion of semen, including a thick, yellowish fluid that nourishes and activates sperm?",
    options: [
      "Prostate gland",
      "Bulbourethral glands",
      "Seminal vesicles",
      "Cowper's glands",
    ],
    answer: "Seminal vesicles",
  },
  {
    question:
      "What blood test is measured to determine the risk for prostate cancer and benign prostatic hyperplasia?",
    options: [
      "CA 125",
      "PSA (Prostate-specific antigen)",
      "Alpha-fetoprotein",
      "HER2",
    ],
    answer: "PSA (Prostate-specific antigen)",
  },
  {
    question: "What is the most common cancer in men aged 20 to 35?",
    options: [
      "Prostate cancer",
      "Testicular cancer",
      "Penile cancer",
      "Colorectal cancer",
    ],
    answer: "Testicular cancer",
  },
  {
    question:
      "Which condition involves a noncancerous enlargement of the prostate gland driven by dihydrotestosterone (DHT) and affects most men in their 70s and 80s?",
    options: [
      "Prostatitis",
      "Benign prostatic hyperplasia (BPH)",
      "Orchitis",
      "Epididymitis",
    ],
    answer: "Benign prostatic hyperplasia (BPH)",
  },
  {
    question: "What bacterium is the etiological agent of gonorrhea?",
    options: [
      "Treponema pallidum",
      "Chlamydia trachomatis",
      "Neisseria gonorrhoeae",
      "Trichomonas vaginalis",
    ],
    answer: "Neisseria gonorrhoeae",
  },
  {
    question:
      "What is the primary stage of syphilis typically characterized by?",
    options: [
      "A nonitchy widespread rash",
      "One or more painless, firm, round chancres",
      "Neurological damage and dementia",
      "Jaundice and fever",
    ],
    answer: "One or more painless, firm, round chancres",
  },
  {
    question: "What protozoan is the etiological agent of trichomoniasis?",
    options: [
      "Trichomonas vaginalis",
      "Giardia lamblia",
      "Plasmodium falciparum",
      "Toxoplasma gondii",
    ],
    answer: "Trichomonas vaginalis",
  },
  {
    question:
      "Which human papillomavirus (HPV) types account for approximately 90% of genital warts cases?",
    options: [
      "HPV 16 and HPV 18",
      "HPV 6 and HPV 11",
      "HPV 31 and HPV 33",
      "HPV 45 and HPV 52",
    ],
    answer: "HPV 6 and HPV 11",
  },
  {
    question:
      "What is the primary etiological agent responsible for most cases of genital herpes?",
    options: [
      "Herpes simplex virus type 1 (HSV-1)",
      "Herpes simplex virus type 2 (HSV-2)",
      "Varicella-zoster virus",
      "Epstein-Barr virus",
    ],
    answer: "Herpes simplex virus type 2 (HSV-2)",
  },
  {
    question: "What is the medical term for painful or difficult menses?",
    options: ["Amenorrhea", "Dysmenorrhea", "Menorrhagia", "Metrorrhagia"],
    answer: "Dysmenorrhea",
  },
  {
    question:
      "Which diagnostic visualization technique is used to examine the interior of the uterus?",
    options: ["Colposcopy", "Hysteroscopy", "Cystoscopy", "Laparoscopy"],
    answer: "Hysteroscopy",
  },
  {
    question:
      "What is the failure of the testes to descend from the abdominal cavity into the scrotum during fetal life called?",
    options: ["Cryptorchidism", "Orchitis", "Hydrocele", "Varicocele"],
    answer: "Cryptorchidism",
  },
  {
    question:
      "What substance is secreted by glands in the foreskin and collects between the glans penis and the prepuce?",
    options: ["Sebum", "Smegma", "Cerumen", "Mucin"],
    answer: "Smegma",
  },
  {
    question:
      "Which STI is commonly known as a 'silent' disease because the majority of infected people are asymptomatic?",
    options: ["Gonorrhea", "Syphilis", "Chlamydia", "Trichomoniasis"],
    answer: "Chlamydia",
  },
];
export const ch11Reading: Section = {
  id: "bio160-11-reading",
  title: "Reading",
  description: "Reading",
  number: 1,
  type: "section",
  questions,
};
