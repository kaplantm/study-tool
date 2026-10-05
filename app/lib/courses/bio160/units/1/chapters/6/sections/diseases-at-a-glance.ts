import { Questions, Section } from "@/app/types";

const questions: Questions = [
  {
    id: "ch6-daag-1",
    question: "Match each cardiovascular disease to its primary Etiology:",
    columnLabels: ["Disease", "Etiology"],
    matches: [
      {
        left: "Raynaud's disease",
        right: "Unknown",
      },
      {
        left: "Varicose veins",
        right: "Long periods of standing, pregnancy",
      },
      {
        left: "Myocarditis",
        right: "Coxsackie virus, adenovirus, echovirus, HIV",
      },
      {
        left: "Valvular heart disease: Mitral stenosis",
        right: "Rheumatic fever",
      },
      {
        left: "Valvular heart disease: Mitral regurgitation",
        right: "Mitral valve prolapse",
      },
      {
        left: "Rheumatic heart disease",
        right: "Infection with group A hemolytic streptococci",
      },
    ],
  },
  {
    id: "ch6-daag-2",
    question:
      "Match each cardiovascular disease to its characteristic Signs and Symptoms:",
    columnLabels: ["Disease", "Signs and Symptoms"],
    matches: [
      {
        left: "Hypercholesterolemia",
        right: "Elevated serum cholesterol",
      },
      {
        left: "Peripheral artery disease",
        right:
          "Intermittent claudication, thinning skin, ulceration, gangrene in advanced stages",
      },
      {
        left: "Raynaud's disease",
        right:
          "Skin color changes (pallor to cyanosis), cold sensation, numbness, or tingling",
      },
      {
        left: "Hypertrophic cardiomyopathy",
        right: "Excessive ventricular growth",
      },
      {
        left: "Congenital Heart Disease: Tetralogy of Fallot",
        right:
          "Difficulty feeding, failure to gain weight, poor development, cyanosis, fainting",
      },
      {
        left: "Congestive Heart Failure",
        right: "Shortness of breath, fatigue, edema",
      },
    ],
  },
  {
    id: "ch6-daag-3",
    question: "Match each condition to its specific Diagnostic method(s):",
    columnLabels: ["Condition", "Diagnostic Method(s)"],
    matches: [
      {
        left: "Hypercholesterolemia",
        right: "Blood test",
      },
      {
        left: "Arterial hypertension",
        right: "Blood pressure measurement via sphygmomanometer",
      },
      {
        left: "Chronic venous insufficiency",
        right: "Doppler imaging studies",
      },
      {
        left: "Infective endocarditis",
        right: "Blood cultures, echocardiography, ECG, body temperature",
      },
      {
        left: "Coarctation of the aorta",
        right:
          "ECG, blood pressure check, echocardiography, cardiac catheterization, Doppler ultrasound",
      },
    ],
  },
  {
    id: "ch6-daag-4",
    question: "Match each cardiovascular disease to its primary Treatment:",
    columnLabels: ["Disease", "Treatment"],
    matches: [
      {
        left: "Raynaud's disease",
        right:
          "Circulation-improving medications (calcium channel blockers, alpha blockers, vasodilators)",
      },
      {
        left: "Venous thrombosis",
        right: "Blood thinning medication, surgery to remove the thrombus",
      },
      {
        left: "Myocarditis",
        right:
          "Bed rest to prevent further myocardial damage, treatment of viral infection",
      },
      {
        left: "Patent ductus arteriosus",
        right:
          "Antibiotics to prevent endocarditis; anti-inflammatory medication to close ductus",
      },
      {
        left: "Transposition of the Great Arteries",
        right:
          "Administration of prostaglandins at birth to maintain patent ductus arteriosus until surgery",
      },
      {
        left: "Shock",
        right:
          "Rapid fluid administration to increase blood pressure, medication to increase heart rate",
      },
    ],
  },
  {
    id: "ch6-daag-5",
    question: "Match each condition to its Preventive strategy:",
    columnLabels: ["Condition", "Preventive Strategy"],
    matches: [
      {
        left: "Raynaud's disease",
        right:
          "Abstinence from smoking; protect extremities, ears, and nose from cold",
      },
      {
        left: "Varicose veins",
        right:
          "Weight loss, walking, elevation of legs after long periods of standing",
      },
      {
        left: "Venous thrombosis",
        right:
          "Early ambulation following surgery or childbirth, compression stockings",
      },
      {
        left: "Infective endocarditis",
        right:
          "Prompt treatment of bacterial infections, prophylactic antimicrobial therapy",
      },
      {
        left: "Valvular heart disease: Mitral regurgitation",
        right:
          "Prophylactic antimicrobial therapy prevents bacteria from colonizing defective valve",
      },
      {
        left: "Cardiac Arrhythmias (Supraventricular / Ventricular)",
        right: "Prevention of heart disease",
      },
    ],
  },
  {
    id: "ch6-daag-6",
    question:
      "Match each Disease with its complete profile (Etiology, Signs and Symptoms, Diagnosis, Treatment, and Prevention):",
    columnLabels: [
      "Disease",
      "Etiology",
      "Signs and Symptoms",
      "Diagnosis",
      "Treatment",
      "Prevention",
    ],
    matches: [
      {
        values: [
          "Hypercholesterolemia",
          "Genetic, lifestyle, obesity and diabetes, diet high in saturated fat",
          "Elevated serum cholesterol",
          "Blood test",
          "Change in dietary habits, low-fat diet, cholesterol-lowering medication",
          "Healthy lifestyle, diet and exercise, weight loss, low-fat diet",
        ],
      },
      {
        values: [
          "Atherosclerosis",
          "Genetic, lifestyle, obesity and diabetes, diet high in saturated fat",
          "Occlusion of an artery; symptoms depend on location of occlusion",
          "ECG, coronary angiography, blood tests, CT scan",
          "Weight loss, exercise, control blood pressure with antihypertensive, reduce cholesterol with cholesterol-lowering medication",
          "Healthy lifestyle, diet and exercise, weight loss, low-fat diet",
        ],
      },
      {
        values: [
          "Peripheral artery disease",
          "Genetic, lifestyle, obesity and diabetes, diet high in saturated fat",
          "Intermittent claudication, thinning of the skin of the lower leg, ulceration of the skin, gangrene can occur in advanced stages of this disease",
          "Physical examination for ischemia, skin atrophy, pallor, absent pulses, ultrasound",
          "Weight loss, exercise, control blood pressure with antihypertensive, reduce cholesterol with cholesterol-lowering medication",
          "Healthy lifestyle, diet and exercise, weight loss, low-fat diet",
        ],
      },
      {
        values: [
          "Raynaud’s disease",
          "Unknown",
          "Changes in skin color from pallor to cyanosis, sensation of cold, numbness, or tingling",
          "Physical examination",
          "Medications that improve circulation such as calcium channel blockers, alpha blockers, and vasodilators",
          "Abstinence from cigarette smoking; protect extremities, ears, and nose from cold",
        ],
      },
      {
        values: [
          "Aortic aneurysm",
          "Atherosclerosis, connective tissue disease, infections, trauma, inflammation",
          "Usually asymptomatic until rupture",
          "Physical examination, ultrasound, echocardiography, CT scan, MRI",
          "Surgery to repair aneurysm, control of blood pressure and atherosclerosis",
          "Healthy lifestyle; control of hypertension, diabetes, and hypercholesterolemia",
        ],
      },
      {
        values: [
          "Arterial hypertension",
          "Older age, sedentary lifestyle, overweight, excessive dietary salt intake, family history",
          "Elevated blood pressure",
          "Blood pressure measurement via sphygmomanometer",
          "Blood pressure–lowering medication, diet, weight loss, and exercise",
          "Healthy lifestyle with proper diet and exercise; control of diabetes and hypercholesterolemia, weight loss",
        ],
      },
      {
        values: [
          "Pulmonary arterial hypertension",
          "Etiology unknown in many cases, ventricular septal defect, patent ductus arteriosus",
          "Asymptomatic",
          "Echocardiography, pulmonary function test, lung scan, cardiac catheterization",
          "Medications to lower pressure, oxygen, lung transplant",
          "Etiology often unknown; surgical correction of ventricular septal defect and patent ductus arteriosus",
        ],
      },
      {
        values: [
          "Varicose veins",
          "Long periods of standing, pregnancy",
          "Swollen veins of the legs, knotty appearance under the skin",
          "Physical examination of the legs",
          "Elastic bandages, support hose, walking, elevating the legs, surgical vein stripping, compression sclerotherapy",
          "Weight loss, walking, elevation of the legs after long periods of standing",
        ],
      },
      {
        values: [
          "Chronic venous insufficiency",
          "Deep vein thrombosis, obesity, smoking, pregnancy, sedentary lifestyle",
          "Tissue congestion, edema, necrosis or skin atrophy, pain with walking",
          "Doppler imaging studies",
          "Diet, exercise, compression stockings, surgical bypass procedure",
          "Weight loss, control of atherosclerosis and hypercholesterolemia, diabetes, exercise, healthy eating",
        ],
      },
      {
        values: [
          "Venous thrombosis",
          "Hypercoagulability, vascular trauma, surgery, immobilization",
          "No symptoms in about 50% of individuals; symptoms of inflammation such as pain, swelling, deep muscle tenderness",
          "Doppler imaging, physical exam",
          "Blood thinning medication, surgery to remove the thrombus",
          "Early ambulation following surgery or childbirth, compression stockings",
        ],
      },
      {
        values: [
          "Coronary heart disease",
          "Atherosclerosis, high blood pressure, diabetes, obesity, inactivity",
          "Angina pectoris, palpitations, myocardial infarction",
          "Physical exam, ECG, stress test, nuclear imaging, angiography",
          "Angioplasty, coronary artery bypass surgery, blood pressure–lowering medication, blood thinners, diuretics, nitrates to stop chest pain, cholesterol-lowering medication, diet, exercise",
          "Control of atherosclerosis; diet, exercise, weight loss if overweight or obese",
        ],
      },
      {
        values: [
          "Myocarditis",
          "Coxsackie virus, adenovirus, echovirus, HIV",
          "Fever, chest pain, shortness of breath, tachycardia",
          "Echocardiography, ECG, physical examination",
          "Bed rest to prevent further myocardial damage, treatment of the viral infection",
          "Unknown",
        ],
      },
      {
        values: [
          "Dilated cardiomyopathy",
          "Infections, myocarditis, metabolic disorders, genetic disorders, immune disorders",
          "Dyspnea, orthopnea, weakness, fatigue, ascites, and peripheral edema",
          "Echocardiography, ECG, physical examination",
          "Medications to treat symptoms, rest, heart transplant if severe",
          "Unknown",
        ],
      },
      {
        values: [
          "Hypertrophic cardiomyopathy",
          "Unknown",
          "Excessive ventricular growth",
          "Echocardiography, ECG, physical examination",
          "Medications to treat symptoms and prevent sudden cardiac death",
          "Unknown",
        ],
      },
      {
        values: [
          "Restrictive cardiomyopathy",
          "Endemic in parts of Africa, India, South and Central America, and Asia; amyloidosis",
          "Dyspnea, orthopnea, peripheral edema, weakness, fatigue",
          "Echocardiography, ECG, physical examination",
          "Medications to treat symptoms",
          "Unknown",
        ],
      },
      {
        values: [
          "Infective endocarditis",
          "Rheumatic heart disease, valvular disease, degenerative heart disease, congenital heart disease, intravenous drug abuse, bacterial infections",
          "Fever, chills, change in sound of an existing murmur, vegetative lesion on the heart valves",
          "Blood cultures, echocardiography, ECG, body temperature, blood cultures to identify bacterium",
          "Antimicrobial therapy, surgery in severe cases to remove vegetations",
          "Prompt treatment of bacterial infections, prophylactic antimicrobial therapy",
        ],
      },
      {
        values: [
          "Rheumatic heart disease",
          "Infection with group A hemolytic streptococci",
          "Fever, inflammation of the joints, rash",
          "Blood cultures, ECG, echocardiography",
          "Antimicrobial therapy",
          "Prompt treatment of bacterial infections, prophylactic antimicrobial therapy",
        ],
      },
      {
        values: [
          "Valvular heart disease: Mitral stenosis",
          "Rheumatic fever",
          "Increased pressure in the heart, congestion of the veins, cyanosis, congestive heart failure",
          "ECG, echocardiography, phonocardiogram, cardiac catheterization",
          "Valvuloplasty, surgical valve replacement",
          "Prompt treatment of bacterial infections, prophylactic antimicrobial therapy, treatment of cardiac symptoms",
        ],
      },
      {
        values: [
          "Valvular heart disease: Mitral regurgitation",
          "Mitral valve prolapse",
          "Usually no symptoms",
          "ECG, echocardiography, phonocardiogram, cardiac catheterization",
          "Surgery to replace valve",
          "Prophylactic antimicrobial therapy prevents bacteria from colonizing defective valve",
        ],
      },
      {
        values: [
          "Valvular heart disease: Aortic stenosis",
          "Rheumatic fever, congenital defect, arteriosclerosis",
          "Hypertrophy of the left ventricle, calcified deposits on the valve",
          "ECG, echocardiography, phonocardiogram, cardiac catheterization",
          "Surgery to replace valve",
          "Prophylactic antimicrobial therapy prevents bacteria from colonizing defective valve",
        ],
      },
      {
        values: [
          "Aortic Regurgitation",
          "Endocarditis, dilated aorta; causes dilation of the ventricle and backflow of blood into the left ventricle",
          "Decreased diastolic pressure, symptoms of heart failure",
          "ECG, blood pressure check, echocardiography, phonocardiogram, cardiac catheterization",
          "Surgery to replace valve",
          "Unknown",
        ],
      },
      {
        values: [
          "Cardiac Arrhythmias: Supraventricular",
          "Abnormalities in the SA node, AV node, and junctional tissue; myocardial infarction, hypertension, atherosclerosis, metabolic disease, smoking, drug abuse",
          "Tachycardia, bradycardia, heart block, syncope, edema, shortness of breath",
          "ECG, blood pressure check, echocardiography, phonocardiogram, cardiac catheterization",
          "Anti-arrhythmic medications",
          "Prevention of heart disease",
        ],
      },
      {
        values: [
          "Cardiac Arrhythmias: Ventricular",
          "Generated by abnormalities in the ventricular conduction system and ventricle; myocardial infarction, hypertension, atherosclerosis, metabolic disease, smoking, drug abuse",
          "Tachycardia, bradycardia, heart block, syncope, edema, shortness of breath",
          "ECG, blood pressure check, echocardiography, phonocardiogram, cardiac catheterization",
          "Anti-arrhythmic medications",
          "Prevention of heart disease",
        ],
      },
      {
        values: [
          "Congestive Heart Failure",
          "Complication of most forms of heart disease",
          "Shortness of breath, fatigue, edema",
          "Physical examination, ECG, x-ray, echocardiography, blood pressure",
          "Medication therapy (diuretics, antihypertensives, anti-arrhythmics, cardiac output enhancers), bed rest",
          "Treatment of underlying heart disease",
        ],
      },
      {
        values: [
          "Shock",
          "Heart disease, hemorrhage, trauma, surgery, allergic reaction, bacterial toxins, central nervous system damage",
          "Drop in blood pressure too low to sustain life",
          "Physical exam, medical history",
          "Rapid fluid administration to increase blood pressure, medication to increase heart rate",
          "Fluid replacement during surgery, prompt treatment of infections/allergic reactions, blood transfusions",
        ],
      },
      {
        values: [
          "Congenital Heart Disease: Tetralogy of Fallot",
          "Maternal history of rubella, overuse of alcohol, diabetes, poor prenatal nutrition; infants born with Down syndrome",
          "Difficulty feeding, failure to gain weight, poor development, cyanosis, fainting, sudden death",
          "ECG, blood pressure check, echocardiography, phonocardiogram, cardiac catheterization",
          "Corrective surgery",
          "Unknown",
        ],
      },
      {
        values: [
          "Congenital Heart Disease: Transposition of the Great Arteries",
          "Unknown",
          "Cyanosis, shortness of breath, poor feeding",
          "ECG, blood pressure check, echocardiography, cardiac catheterization",
          "Administration of prostaglandins at birth to maintain patent ductus arteriosus until corrective surgery",
          "Unknown",
        ],
      },
      {
        values: [
          "Septal defects",
          "Unknown",
          "Heart murmur; an interventricular septal defect causes increased blood flow to the lungs.",
          "ECG, blood pressure check, echocardiography, phonocardiogram, cardiac catheterization",
          "Large defects require surgical correction.",
          "Unknown",
        ],
      },
      {
        values: [
          "Patent ductus arteriosus",
          "Unknown",
          "Initially asymptomatic; increased pressure in the lungs can lead to pulmonary hypertension.",
          "ECG, blood pressure check, echocardiography, cardiac catheterization",
          "Antibiotics to prevent endocarditis; anti-inflammatory medication to close the patent ductus.",
          "Unknown",
        ],
      },
      {
        values: [
          "Coarctation of the aorta",
          "Unknown",
          "Increased pressure in the left ventricle; symptoms of heart failure in severe narrowing.",
          "ECG, blood pressure check, echocardiography, cardiac catheterization, Doppler ultrasound",
          "Corrective surgery.",
          "Unknown",
        ],
      },
    ],
  },
];

export const ch6DiseaseAtAGlance: Section = {
  id: "s3-bio160-6-diseases-at-a-glance",
  title: "Diseases At a Glance",
  description: "Diseases At a Glance",
  number: 5,
  type: "section",
  questions,
};
