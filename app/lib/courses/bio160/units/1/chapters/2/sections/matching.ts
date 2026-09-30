import { Question, Section } from "@/app/types";

export const hypersensitivityMatchingTasks: Question[] = [
  {
    question: "Match each hypersensitivity type with its mechanism.",
    matches: [
      {
        left: "Type I",
        right: "Excess IgE bound to mast cells causes release of histamine",
      },
      {
        left: "Type II",
        right: "IgM and IgG cause destruction of foreign cells",
      },
      {
        left: "Type III",
        right: "Immune complexes are deposited in tissue and blood vessels",
      },
      {
        left: "Type IV",
        right: "Chemicals are released by activated T cells",
      },
    ],
  },
  {
    question: "Match each hypersensitivity type with its response time.",
    matches: [
      {
        left: "Type I",
        right: "15–30 minutes",
      },
      {
        left: "Type II",
        right: "Minutes to hours",
      },
      {
        left: "Type III",
        right: "3–8 hours",
      },
      {
        left: "Type IV",
        right: "48–72 hours",
      },
    ],
  },
  {
    question: "Match each hypersensitivity type with an example.",
    matches: [
      {
        left: "Type I",
        right: "Hay fever and hives",
      },
      {
        left: "Type II",
        right: "Incompatible blood transfusion and erythroblastosis fetalis",
      },
      {
        left: "Type III",
        right: "Glomerulonephritis",
      },
      {
        left: "Type IV",
        right: "Poison ivy/oak and tuberculin test",
      },
    ],
  },
];

export const immunoglobulinMatchingTasks: Question[] = [
  {
    question: "Match each immunoglobulin with its primary function.",
    matches: [
      {
        left: "IgG",
        right:
          "Major antibody in primary and secondary responses; crosses the placenta and activates complement",
      },
      {
        left: "IgM",
        right:
          "First antibody produced in the primary response and activates complement",
      },
      {
        left: "IgA",
        right:
          "Protects mucosal surfaces by interfering with pathogen attachment",
      },
      {
        left: "IgE",
        right:
          "Stimulates histamine and other chemical release involved in inflammation and allergic responses",
      },
      {
        left: "IgD",
        right: "Activates B cells",
      },
    ],
  },
  {
    question: "Match each immunoglobulin with its distinctive role.",
    matches: [
      {
        left: "IgG",
        right: "Provides fetal protection by crossing the placenta",
      },
      {
        left: "IgM",
        right: "Appears first during the primary antibody response",
      },
      {
        left: "IgA",
        right: "Provides protection at mucosal surfaces",
      },
      {
        left: "IgE",
        right: "Mediates allergic responses through histamine release",
      },
      {
        left: "IgD",
        right: "Helps activate B lymphocytes",
      },
    ],
  },
];

export const conditionSymptomsMatchingTask: Question = {
  question: "Match each condition with its characteristic symptoms.",
  matches: [
    {
      left: "Systemic lupus erythematosus (SLE)",
      right:
        "Fatigue, arthritis, fever, butterfly rash, photosensitivity, mouth/nose ulcers, and secondary Raynaud's phenomenon",
    },
    {
      left: "Cutaneous (discoid) lupus",
      right:
        "Scaling, raised red rash that is usually not itchy and often affects the face, neck, scalp, mouth, or nose",
    },
    {
      left: "Drug-induced lupus erythematosus (DILE)",
      right:
        "Lupus-like symptoms similar to SLE, generally without major organ involvement",
    },
    {
      left: "Neonatal lupus",
      right:
        "Skin rash appearing during the first weeks of life, with possible heart and blood involvement",
    },
    {
      left: "Localized scleroderma",
      right:
        "Waxy patches or streaks of hardened skin, often involving limited areas",
    },
    {
      left: "Systemic sclerosis (scleroderma)",
      right:
        "Raynaud's phenomenon, thickened and tightened skin, heartburn, difficulty swallowing, shortness of breath, and possible organ dysfunction",
    },
    {
      left: "Limited cutaneous systemic sclerosis",
      right:
        "Skin tightening mainly involving the fingers, hands, and areas below the elbows or knees, with possible internal-organ involvement",
    },
    {
      left: "Diffuse cutaneous systemic sclerosis",
      right:
        "Extensive skin tightening with internal-organ involvement and greater risk of organ complications",
    },
    {
      left: "Sjögren's syndrome",
      right:
        "Dry eyes and dry mouth, with possible lung, kidney, gastrointestinal, blood-vessel, liver, pancreas, and nervous-system involvement",
    },
    {
      left: "Primary Sjögren's syndrome",
      right: "Dry eyes and mouth occurring as the primary autoimmune condition",
    },
    {
      left: "Secondary Sjögren's syndrome",
      right:
        "Dry eyes and mouth occurring along with another autoimmune disease such as lupus, rheumatoid arthritis, or scleroderma",
    },
    {
      left: "Primary HIV infection",
      right: "Short flu-like illness occurring a few weeks after exposure",
    },
    {
      left: "Symptomatic HIV",
      right:
        "Diarrhea, fever, night sweats, fatigue, joint pain, oral infections, enlarged lymph nodes, and skin problems",
    },
    {
      left: "AIDS",
      right:
        "Increased susceptibility to opportunistic infections and certain cancers associated with severe CD4-cell reduction",
    },
    {
      left: "Hodgkin's lymphoma",
      right:
        "Painless lymph-node swelling, fatigue, fever, night sweats, itching, cough, breathing difficulty, chest pain, and weight loss",
    },
    {
      left: "Non-Hodgkin's lymphoma",
      right:
        "Lymph-node swelling, fatigue, pain, fever, night sweats, itching, cough, breathing difficulty, chest or abdominal swelling, and weight loss",
    },
  ],
};

export const diagnosticsMatchingTasks: Question[] = [
  {
    question: "Match each diagnostic technique with its description.",
    matches: [
      {
        left: "Agglutination reaction",
        right:
          "Uses antigen-antibody reactions to detect bacterial and viral diseases and for blood typing",
      },
      {
        left: "Enzyme immunoassay (EIA)",
        right: "Uses an enzyme to label an antibody or antigen",
      },
      {
        left: "ELISA",
        right:
          "Widely used enzyme immunoassay for detecting infectious diseases and HIV antibodies",
      },
      {
        left: "Western blot",
        right:
          "Detects antibodies in a patient's serum and can confirm a positive HIV ELISA",
      },
      {
        left: "Fluorescent antibody technique",
        right:
          "Uses an antibody labeled with a fluorescent molecule to detect its antigen",
      },
      {
        left: "Flow cytometry",
        right: "Identifies and counts cells that have a particular antigen",
      },
      {
        left: "FACS",
        right:
          "Modified flow cytometer used to count helper T cells when monitoring HIV/AIDS",
      },
      {
        left: "C-reactive protein test and Erythrocyte sedimentation test",
        right: "Measures a general level of inflammation in the body",
      },
    ],
  },

  {
    question: "Match each laboratory term with its definition or use.",
    matches: [
      {
        left: "Serum",
        right:
          "Liquid portion of blood remaining after clotting and removal of blood cells",
      },
      {
        left: "Antigen",
        right: "Substance detected by a specific antibody or immune cell",
      },
      {
        left: "Antibody",
        right: "Immune protein that specifically binds to an antigen",
      },
      {
        left: "C-reactive protein",
        right: "Inflammatory marker measured in the blood",
      },
      {
        left: "Erythrocyte sedimentation rate",
        right: "Test used as a general indicator of inflammation",
      },
    ],
  },

  {
    question: "Match each type of lupus with its description.",
    matches: [
      {
        left: "Systemic lupus erythematosus (SLE)",
        right: "Most common type; can affect many body systems",
      },
      {
        left: "Cutaneous/discoid lupus",
        right:
          "Primarily affects the skin and causes raised, scaling red rashes",
      },
      {
        left: "Drug-induced lupus erythematosus (DILE)",
        right:
          "Lupus-like illness caused by certain medications and usually resolves after stopping the drug",
      },
      {
        left: "Neonatal lupus",
        right:
          "Rare condition acquired from maternal autoantibodies that can affect a fetus or newborn",
      },
      {
        left: "Idiopathic lupus",
        right:
          "Lupus with an uncertain cause in which environmental, genetic, and hormonal factors may contribute",
      },
    ],
  },

  {
    question: "Match each lupus feature with the correct description.",
    matches: [
      {
        left: "Butterfly rash",
        right: "Facial rash associated with systemic lupus",
      },
      {
        left: "Photosensitivity",
        right: "Sensitivity to sunlight",
      },
      {
        left: "Raynaud's phenomenon",
        right:
          "Episodes involving abnormal blood-vessel responses, often triggered by cold",
      },
      {
        left: "Discoid rash",
        right: "Circular, raised, scaling red skin lesions",
      },
      {
        left: "DILE",
        right: "Drug-induced lupus erythematosus",
      },
      {
        left: "Autoantibody testing",
        right: "Blood testing used to help evaluate autoimmune disease",
      },
      {
        left: "Remission",
        right: "Period when disease activity decreases or symptoms improve",
      },
      {
        left: "Relapse",
        right: "Return or worsening of disease activity after improvement",
      },
    ],
  },

  {
    question: "Match each lupus treatment with its purpose or category.",
    matches: [
      {
        left: "NSAIDs",
        right:
          "Nonsteroidal anti-inflammatory drugs used to reduce inflammation and symptoms",
      },
      {
        left: "Corticosteroids",
        right:
          "Steroidal anti-inflammatory drugs used to suppress inflammation",
      },
      {
        left: "Antimalarial medications",
        right: "Medications used to help manage certain lupus symptoms",
      },
      {
        left: "Immunosuppressive drugs",
        right: "Drugs that suppress excessive immune activity",
      },
      {
        left: "Monoclonal antibodies",
        right:
          "Laboratory-produced proteins that act like antibodies and can target specific cells or immune processes",
      },
    ],
  },

  {
    question: "Match each scleroderma term with its description.",
    matches: [
      {
        left: "Scleroderma",
        right:
          "Chronic autoimmune disease affecting connective tissue and causing hardening or tightening",
      },
      {
        left: "Localized scleroderma",
        right: "Type that primarily affects the skin",
      },
      {
        left: "Morphea",
        right: "Localized scleroderma characterized by waxy patches",
      },
      {
        left: "Linear scleroderma",
        right:
          "Localized scleroderma characterized by streak-like areas of skin involvement",
      },
      {
        left: "Systemic sclerosis",
        right: "Scleroderma involving the skin and internal organs",
      },
      {
        left: "Limited cutaneous systemic sclerosis",
        right:
          "Systemic sclerosis with skin tightening mainly limited to areas such as the fingers, hands, and limbs below the elbows or knees",
      },
      {
        left: "Diffuse cutaneous systemic sclerosis",
        right: "Systemic sclerosis involving more extensive areas of skin",
      },
    ],
  },

  {
    question: "Match each scleroderma finding with the correct description.",
    matches: [
      {
        left: "Secondary Raynaud's phenomenon",
        right:
          "Blood-vessel response associated with cold or stress that can occur with systemic sclerosis",
      },
      {
        left: "Skin tightening",
        right:
          "Thickening and tightening of skin, especially around fingers and joints",
      },
      {
        left: "Heartburn",
        right: "Digestive symptom that can occur with systemic sclerosis",
      },
      {
        left: "Difficulty swallowing",
        right: "Swallowing problem that may occur with systemic sclerosis",
      },
      {
        left: "Shortness of breath",
        right:
          "Respiratory symptom that may result from internal organ involvement",
      },
      {
        left: "Excess collagen",
        right:
          "Abnormal collagen production stimulated by fibroblasts in scleroderma",
      },
    ],
  },

  {
    question: "Match each Sjögren's syndrome term with its description.",
    matches: [
      {
        left: "Sjögren's syndrome",
        right: "Chronic autoimmune disease affecting moisture-producing glands",
      },
      {
        left: "Primary Sjögren's syndrome",
        right:
          "Sjögren's syndrome occurring without another associated autoimmune disease",
      },
      {
        left: "Secondary Sjögren's syndrome",
        right: "Sjögren's syndrome occurring with another autoimmune disease",
      },
      {
        left: "Dry eyes",
        right: "Hallmark symptom caused by reduced tear production",
      },
      {
        left: "Dry mouth",
        right: "Hallmark symptom caused by reduced saliva production",
      },
      {
        left: "Salivary gland biopsy",
        right: "Diagnostic procedure that examines salivary gland tissue",
      },
      {
        left: "Autoantibody testing",
        right: "Blood testing that can help identify autoimmune activity",
      },
    ],
  },

  {
    question: "Match each HIV/AIDS term with its description.",
    matches: [
      {
        left: "Human Immunodeficiency Virus (HIV)",
        right:
          "Retrovirus that causes AIDS and carries genetic information as RNA",
      },
      {
        left: "AIDS",
        right:
          "Disease characterized by reduced CD4 cells and increased susceptibility to opportunistic infections and certain cancers",
      },
      {
        left: "CD4 helper T cells",
        right:
          "T cells that stimulate antibody production, phagocytosis, cytotoxic T cells, and natural killer cells",
      },
      {
        left: "Cytotoxic T cells",
        right: "Cells that destroy infected host cells",
      },
      {
        left: "Retrovirus",
        right: "Virus that uses RNA rather than DNA as its genetic material",
      },
      {
        left: "Opportunistic infection",
        right: "Infection that takes advantage of weakened immune defenses",
      },
      {
        left: "Antiretroviral therapy (ART)",
        right:
          "Combination drug treatment used to control HIV replication and slow disease progression",
      },
    ],
  },

  {
    question: "Match each stage of HIV infection with its description.",
    matches: [
      {
        left: "Primary HIV infection",
        right: "Short flu-like illness occurring after HIV exposure",
      },
      {
        left: "Clinically asymptomatic stage",
        right:
          "Period with few or no symptoms while HIV continues to multiply and infect CD4 cells",
      },
      {
        left: "Symptomatic HIV",
        right:
          "Stage involving symptoms such as fever, fatigue, night sweats, diarrhea, and infections",
      },
      {
        left: "Progression to AIDS",
        right:
          "Stage involving AIDS indicator diseases and a CD4 count below 200",
      },
    ],
  },

  {
    question:
      "Match each HIV transmission route with the corresponding exposure.",
    matches: [
      {
        left: "Sexual transmission",
        right: "Transmission through exposure to infected sexual fluids",
      },
      {
        left: "Mother-to-child transmission",
        right: "Transmission during childbirth or breastfeeding",
      },
      {
        left: "Needle sharing",
        right: "Transmission through exposure to infected blood",
      },
      {
        left: "Blood transmission",
        right: "Transmission through contact with infected blood",
      },
    ],
  },

  {
    question: "Match each HIV diagnostic test with its role.",
    matches: [
      {
        left: "ELISA",
        right: "Detects HIV antibodies in blood",
      },
      {
        left: "Western blot",
        right: "Used to confirm a positive ELISA result",
      },
      {
        left: "Flow cytometry",
        right: "Can identify and count cells based on their antigens",
      },
      {
        left: "FACS",
        right: "Modified flow cytometer used to count helper T cells",
      },
      {
        left: "CD4 count",
        right:
          "Measures the number of helper T cells and helps monitor immune function",
      },
    ],
  },

  {
    question: "Match each immune-system cancer with its description.",
    matches: [
      {
        left: "Hodgkin's lymphoma",
        right: "Cancer of the immune system marked by Reed-Sternberg cells",
      },
      {
        left: "Non-Hodgkin's lymphoma",
        right:
          "Group of cancers involving lymphocytes and more common in older adults",
      },
      {
        left: "Reed-Sternberg cells",
        right:
          "Characteristic abnormal cells used to identify Hodgkin's lymphoma",
      },
      {
        left: "Lymphocytes",
        right:
          "White blood cells that can become cancerous in non-Hodgkin's lymphoma",
      },
    ],
  },

  {
    question: "Match each lymphoma feature with the correct description.",
    matches: [
      {
        left: "Hodgkin's lymphoma risk factors",
        right:
          "Include Epstein-Barr virus, HIV, weakened immunity, and family history",
      },
      {
        left: "Non-Hodgkin's lymphoma risk factors",
        right:
          "Include weakened immunity, HIV, Epstein-Barr virus, hepatitis C, and other infections",
      },
      {
        left: "Painless lymph node swelling",
        right: "Common symptom of Hodgkin's lymphoma",
      },
      {
        left: "Night sweats",
        right: "Systemic symptom that can occur with lymphoma",
      },
      {
        left: "Lactate dehydrogenase",
        right:
          "Blood test that can serve as a marker for tissue damage in non-Hodgkin's lymphoma",
      },
      {
        left: "Biopsy",
        right: "Procedure used to examine tissue for cancerous cells",
      },
    ],
  },

  {
    question:
      "Match each lymphoma treatment with the appropriate treatment category.",
    matches: [
      {
        left: "Chemotherapy",
        right: "Drug treatment that targets rapidly dividing cancer cells",
      },
      {
        left: "Radiation therapy",
        right: "Uses radiation to damage and destroy cancer cells",
      },
      {
        left: "Bone marrow transplant",
        right: "Treatment involving replacement of diseased or damaged marrow",
      },
      {
        left: "Stem cell transplant",
        right: "Treatment using stem cells to restore blood-forming cells",
      },
      {
        left: "Monoclonal antibody therapy",
        right:
          "Uses laboratory-produced antibodies to target specific cells or molecules",
      },
    ],
  },
];

const vocab = {
  question: "Match each term with its definition. (Immunity)",
  matches: [
    {
      left: "Specific Adaptive / immunity",
      right:
        "Adaptive immunity that responds specifically to particular antigens",
    },
    {
      left: "Humoral immunity",
      right: "Antibody-mediated immunity involving B lymphocytes",
    },
    {
      left: "Cell-mediated immunity",
      right:
        "Immunity mediated by T lymphocytes that responds to intracellular pathogens",
    },
    {
      left: "B lymphocytes",
      right: "Immune cells that produce plasma cells and memory B cells",
    },
    { left: "Plasma cells", right: "Cells that secrete antibodies" },
    {
      left: "Memory B cells",
      right: "Cells that provide a faster, stronger response upon re-exposure",
    },
    {
      left: "T lymphocytes",
      right:
        "Cells involved in cell-mediated immunity that develop in the thymus",
    },
    {
      left: "Helper T cells (CD4)",
      right: "T cells that activate B cells and phagocytes",
    },
    {
      left: "Cytotoxic T cells (CD8)",
      right: "T cells that destroy infected and abnormal cells",
    },
    {
      left: "Primary response",
      right:
        "The first exposure to an antigen triggers humoral immunity. This initial immune response involves activation of B and T cells",
    },
    {
      left: "Secondary response",
      right: "Rapid, potent response caused by immune memory",
    },
    {
      left: "Antibodies",
      right:
        "Immunoglobulins that bind antigens and help target them for destruction",
    },
    {
      left: "Immunological memory",
      right:
        "Long-term protection that produces a rapid response upon re-exposure",
    },
    {
      left: "Nonspecific immunity",
      right:
        "Immediate, short-term protection present innately at birth against any antigen",
    },
    {
      left: "Physical barriers",
      right: "First-line defenses including skin and mucous membranes",
    },
    {
      left: "Mucous membranes",
      right: "Membranes that produce mucus and help block pathogens",
    },
    {
      left: "Secretions",
      right:
        "Tears, saliva, sweat, and sebum that help defend against pathogens",
    },
    {
      left: "Leukocytes",
      right: "White blood cells involved in immune defense",
    },
    {
      left: "Phagocytes",
      right: "Cells that engulf and digest pathogens and debris",
    },
    {
      left: "Macrophages",
      right:
        "Phagocytes that reside in tissues and beneath epithelial surfaces",
    },
    {
      left: "Neutrophils",
      right:
        "Phagocytes found mostly in blood that enter infected or injured tissues",
    },
    {
      left: "Natural killer cells",
      right:
        "Cells that recognize and eliminate virus-infected and cancer cells",
    },
    {
      left: "Complement",
      right:
        "Plasma proteins that assist pathogen destruction, inflammation, and phagocyte attraction",
    },
    {
      left: "Interferons",
      right: "Antiviral proteins that help uninfected cells resist infection",
    },
    {
      left: "Fever",
      right:
        "Abnormally high body temperature that can slow pathogens and enhance immune responses",
    },
    {
      left: "Inflammation",
      right:
        "Systemic response to infection or injury that limits spread and promotes repair",
    },
    {
      left: "Histamines & Kinins",
      right:
        "Chemical signals involved in inflammation and blood vessel dilation",
    },
    {
      left: "Cardinal signs of inflammation",
      right: "Redness, heat, swelling, and pain",
    },
    {
      left: "Pus",
      right:
        "Accumulation of debris and dead cells that can form during inflammation",
    },
    {
      left: "Antigen",
      right:
        "Foreign substance that is recognized as “nonself ” and activates the  immune system.",
    },
    { left: "Immunoglobulins", right: "Another name for antibodies" },
  ],
};

const immuneCellMatchingTask: Question = {
  question: "Match each immune-cell category with its cells and primary role.",
  matches: [
    {
      values: [
        "Innate",
        "Macrophages, Neutrophils, Monocytes, Eosinophils, Basophils, NK cells",
        "Fast + nonspecific",
      ],
    },
    {
      values: ["B Cells", "B → Plasma + Memory B", "Antibodies"],
    },
    {
      values: ["Helper T", "CD4", "Helps/coordinates"],
    },
    {
      values: ["Cytotoxic T", "CD8", "Kills infected cells"],
    },
    {
      values: ["Memory cells", "Memory B + Memory T", "Remember the antigen"],
    },
  ],
};

export const section21Matching: Section = {
  id: "bio160-2-1",
  title: "Matchin Section",
  description: "e.g. matching questions",
  number: 1,
  type: "section",
  questions: [
    vocab,
    immuneCellMatchingTask,
    ...hypersensitivityMatchingTasks,
    ...immunoglobulinMatchingTasks,
    ...diagnosticsMatchingTasks,
    conditionSymptomsMatchingTask,
  ],
};
