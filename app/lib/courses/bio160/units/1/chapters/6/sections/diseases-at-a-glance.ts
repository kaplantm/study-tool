import { Questions, Section } from "@/app/types";

const questions: Questions = [
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
  {
    question: "Match each disease with its etiology:",
    matches: [
      {
        values: [
          "Hypercholesterolemia",
          "Genetic, lifestyle, obesity and diabetes, diet high in saturated fat",
        ],
      },
      {
        values: [
          "Atherosclerosis",
          "Genetic, lifestyle, obesity and diabetes, diet high in saturated fat [Atherosclerosis]",
        ],
      },
      {
        values: [
          "Peripheral artery disease",
          "Genetic, lifestyle, obesity and diabetes, diet high in saturated fat [Peripheral artery disease]",
        ],
      },
      { values: ["Raynaud’s disease", "Unknown"] },
      {
        values: [
          "Aortic aneurysm",
          "Atherosclerosis, connective tissue disease, infections, trauma, inflammation",
        ],
      },
      {
        values: [
          "Arterial hypertension",
          "Older age, sedentary lifestyle, overweight, excessive dietary salt intake, family history",
        ],
      },
      {
        values: [
          "Pulmonary arterial hypertension",
          "Etiology unknown in many cases, ventricular septal defect, patent ductus arteriosus",
        ],
      },
      { values: ["Varicose veins", "Long periods of standing, pregnancy"] },
      {
        values: [
          "Chronic venous insufficiency",
          "Deep vein thrombosis, obesity, smoking, pregnancy, sedentary lifestyle",
        ],
      },
      {
        values: [
          "Venous thrombosis",
          "Hypercoagulability, vascular trauma, surgery, immobilization",
        ],
      },
      {
        values: [
          "Coronary heart disease",
          "Atherosclerosis, high blood pressure, diabetes, obesity, inactivity",
        ],
      },
      {
        values: ["Myocarditis", "Coxsackie virus, adenovirus, echovirus, HIV"],
      },
      {
        values: [
          "Dilated cardiomyopathy",
          "Infections, myocarditis, metabolic disorders, genetic disorders, immune disorders",
        ],
      },
      {
        values: [
          "Hypertrophic cardiomyopathy",
          "Unknown [Hypertrophic cardiomyopathy]",
        ],
      },
      {
        values: [
          "Restrictive cardiomyopathy",
          "Endemic in parts of Africa, India, South and Central America, and Asia; amyloidosis",
        ],
      },
      {
        values: [
          "Infective endocarditis",
          "Rheumatic heart disease, valvular disease, degenerative heart disease, congenital heart disease, intravenous drug abuse, bacterial infections",
        ],
      },
      {
        values: [
          "Rheumatic heart disease",
          "Infection with group A hemolytic streptococci",
        ],
      },
      {
        values: ["Valvular heart disease: Mitral stenosis", "Rheumatic fever"],
      },
      {
        values: [
          "Valvular heart disease: Mitral regurgitation",
          "Mitral valve prolapse",
        ],
      },
      {
        values: [
          "Valvular heart disease: Aortic stenosis",
          "Rheumatic fever, congenital defect, arteriosclerosis",
        ],
      },
      {
        values: [
          "Aortic Regurgitation",
          "Endocarditis, dilated aorta; causes dilation of the ventricle and backflow of blood into the left ventricle",
        ],
      },
      {
        values: [
          "Cardiac Arrhythmias: Supraventricular",
          "Abnormalities in the SA node, AV node, and junctional tissue; myocardial infarction, hypertension, atherosclerosis, metabolic disease, smoking, drug abuse",
        ],
      },
      {
        values: [
          "Cardiac Arrhythmias: Ventricular",
          "Generated by abnormalities in the ventricular conduction system and ventricle; myocardial infarction, hypertension, atherosclerosis, metabolic disease, smoking, drug abuse",
        ],
      },
      {
        values: [
          "Congestive Heart Failure",
          "Complication of most forms of heart disease",
        ],
      },
      {
        values: [
          "Shock",
          "Heart disease, hemorrhage, trauma, surgery, allergic reaction, bacterial toxins, central nervous system damage",
        ],
      },
      {
        values: [
          "Congenital Heart Disease: Tetralogy of Fallot",
          "Maternal history of rubella, overuse of alcohol, diabetes, poor prenatal nutrition; infants born with Down syndrome",
        ],
      },
      {
        values: [
          "Congenital Heart Disease: Transposition of the Great Arteries",
          "Unknown [Congenital Heart Disease: Transposition of the Great Arteries]",
        ],
      },
      { values: ["Septal defects", "Unknown [Septal defects]"] },
      {
        values: [
          "Patent ductus arteriosus",
          "Unknown [Patent ductus arteriosus]",
        ],
      },
      {
        values: [
          "Coarctation of the aorta",
          "Unknown [Coarctation of the aorta]",
        ],
      },
    ],
  },
  {
    question: "Match each disease with its signs and symptoms:",
    matches: [
      { values: ["Hypercholesterolemia", "Elevated serum cholesterol"] },
      {
        values: [
          "Atherosclerosis",
          "Occlusion of an artery; symptoms depend on location of occlusion",
        ],
      },
      {
        values: [
          "Peripheral artery disease",
          "Intermittent claudication, thinning of the skin of the lower leg, ulceration of the skin, gangrene can occur in advanced stages of this disease",
        ],
      },
      {
        values: [
          "Raynaud’s disease",
          "Changes in skin color from pallor to cyanosis, sensation of cold, numbness, or tingling",
        ],
      },
      { values: ["Aortic aneurysm", "Usually asymptomatic until rupture"] },
      { values: ["Arterial hypertension", "Elevated blood pressure"] },
      { values: ["Pulmonary arterial hypertension", "Asymptomatic"] },
      {
        values: [
          "Varicose veins",
          "Swollen veins of the legs, knotty appearance under the skin",
        ],
      },
      {
        values: [
          "Chronic venous insufficiency",
          "Tissue congestion, edema, necrosis or skin atrophy, pain with walking",
        ],
      },
      {
        values: [
          "Venous thrombosis",
          "No symptoms in about 50% of individuals; symptoms of inflammation such as pain, swelling, deep muscle tenderness",
        ],
      },
      {
        values: [
          "Coronary heart disease",
          "Angina pectoris, palpitations, myocardial infarction",
        ],
      },
      {
        values: [
          "Myocarditis",
          "Fever, chest pain, shortness of breath, tachycardia",
        ],
      },
      {
        values: [
          "Dilated cardiomyopathy",
          "Dyspnea, orthopnea, weakness, fatigue, ascites, and peripheral edema",
        ],
      },
      {
        values: ["Hypertrophic cardiomyopathy", "Excessive ventricular growth"],
      },
      {
        values: [
          "Restrictive cardiomyopathy",
          "Dyspnea, orthopnea, peripheral edema, weakness, fatigue",
        ],
      },
      {
        values: [
          "Infective endocarditis",
          "Fever, chills, change in sound of an existing murmur, vegetative lesion on the heart valves",
        ],
      },
      {
        values: [
          "Rheumatic heart disease",
          "Fever, inflammation of the joints, rash",
        ],
      },
      {
        values: [
          "Valvular heart disease: Mitral stenosis",
          "Increased pressure in the heart, congestion of the veins, cyanosis, congestive heart failure",
        ],
      },
      {
        values: [
          "Valvular heart disease: Mitral regurgitation",
          "Usually no symptoms",
        ],
      },
      {
        values: [
          "Valvular heart disease: Aortic stenosis",
          "Hypertrophy of the left ventricle, calcified deposits on the valve",
        ],
      },
      {
        values: [
          "Aortic Regurgitation",
          "Decreased diastolic pressure, symptoms of heart failure",
        ],
      },
      {
        values: [
          "Cardiac Arrhythmias: Supraventricular",
          "Tachycardia, bradycardia, heart block, syncope, edema, shortness of breath",
        ],
      },
      {
        values: [
          "Cardiac Arrhythmias: Ventricular",
          "Tachycardia, bradycardia, heart block, syncope, edema, shortness of breath [Cardiac Arrhythmias: Ventricular]",
        ],
      },
      {
        values: [
          "Congestive Heart Failure",
          "Shortness of breath, fatigue, edema",
        ],
      },
      { values: ["Shock", "Drop in blood pressure too low to sustain life"] },
      {
        values: [
          "Congenital Heart Disease: Tetralogy of Fallot",
          "Difficulty feeding, failure to gain weight, poor development, cyanosis, fainting, sudden death",
        ],
      },
      {
        values: [
          "Congenital Heart Disease: Transposition of the Great Arteries",
          "Cyanosis, shortness of breath, poor feeding",
        ],
      },
      {
        values: [
          "Septal defects",
          "Heart murmur; an interventricular septal defect causes increased blood flow to the lungs.",
        ],
      },
      {
        values: [
          "Patent ductus arteriosus",
          "Initially asymptomatic; increased pressure in the lungs can lead to pulmonary hypertension.",
        ],
      },
      {
        values: [
          "Coarctation of the aorta",
          "Increased pressure in the left ventricle; symptoms of heart failure in severe narrowing.",
        ],
      },
    ],
  },
  {
    question: "Match each disease with its diagnosis:",
    matches: [
      { values: ["Hypercholesterolemia", "Blood test"] },
      {
        values: [
          "Atherosclerosis",
          "ECG, coronary angiography, blood tests, CT scan",
        ],
      },
      {
        values: [
          "Peripheral artery disease",
          "Physical examination for ischemia, skin atrophy, pallor, absent pulses, ultrasound",
        ],
      },
      { values: ["Raynaud’s disease", "Physical examination"] },
      {
        values: [
          "Aortic aneurysm",
          "Physical examination, ultrasound, echocardiography, CT scan, MRI",
        ],
      },
      {
        values: [
          "Arterial hypertension",
          "Blood pressure measurement via sphygmomanometer",
        ],
      },
      {
        values: [
          "Pulmonary arterial hypertension",
          "Echocardiography, pulmonary function test, lung scan, cardiac catheterization",
        ],
      },
      { values: ["Varicose veins", "Physical examination of the legs"] },
      { values: ["Chronic venous insufficiency", "Doppler imaging studies"] },
      { values: ["Venous thrombosis", "Doppler imaging, physical exam"] },
      {
        values: [
          "Coronary heart disease",
          "Physical exam, ECG, stress test, nuclear imaging, angiography",
        ],
      },
      {
        values: ["Myocarditis", "Echocardiography, ECG, physical examination"],
      },
      {
        values: [
          "Dilated cardiomyopathy",
          "Echocardiography, ECG, physical examination [Dilated cardiomyopathy]",
        ],
      },
      {
        values: [
          "Hypertrophic cardiomyopathy",
          "Echocardiography, ECG, physical examination [Hypertrophic cardiomyopathy]",
        ],
      },
      {
        values: [
          "Restrictive cardiomyopathy",
          "Echocardiography, ECG, physical examination [Restrictive cardiomyopathy]",
        ],
      },
      {
        values: [
          "Infective endocarditis",
          "Blood cultures, echocardiography, ECG, body temperature, blood cultures to identify bacterium",
        ],
      },
      {
        values: [
          "Rheumatic heart disease",
          "Blood cultures, ECG, echocardiography",
        ],
      },
      {
        values: [
          "Valvular heart disease: Mitral stenosis",
          "ECG, echocardiography, phonocardiogram, cardiac catheterization",
        ],
      },
      {
        values: [
          "Valvular heart disease: Mitral regurgitation",
          "ECG, echocardiography, phonocardiogram, cardiac catheterization [Valvular heart disease: Mitral regurgitation]",
        ],
      },
      {
        values: [
          "Valvular heart disease: Aortic stenosis",
          "ECG, echocardiography, phonocardiogram, cardiac catheterization [Valvular heart disease: Aortic stenosis]",
        ],
      },
      {
        values: [
          "Aortic Regurgitation",
          "ECG, blood pressure check, echocardiography, phonocardiogram, cardiac catheterization",
        ],
      },
      {
        values: [
          "Cardiac Arrhythmias: Supraventricular",
          "ECG, blood pressure check, echocardiography, phonocardiogram, cardiac catheterization [Cardiac Arrhythmias: Supraventricular]",
        ],
      },
      {
        values: [
          "Cardiac Arrhythmias: Ventricular",
          "ECG, blood pressure check, echocardiography, phonocardiogram, cardiac catheterization [Cardiac Arrhythmias: Ventricular]",
        ],
      },
      {
        values: [
          "Congestive Heart Failure",
          "Physical examination, ECG, x-ray, echocardiography, blood pressure",
        ],
      },
      { values: ["Shock", "Physical exam, medical history"] },
      {
        values: [
          "Congenital Heart Disease: Tetralogy of Fallot",
          "ECG, blood pressure check, echocardiography, phonocardiogram, cardiac catheterization [Congenital Heart Disease: Tetralogy of Fallot]",
        ],
      },
      {
        values: [
          "Congenital Heart Disease: Transposition of the Great Arteries",
          "ECG, blood pressure check, echocardiography, cardiac catheterization",
        ],
      },
      {
        values: [
          "Septal defects",
          "ECG, blood pressure check, echocardiography, phonocardiogram, cardiac catheterization [Septal defects]",
        ],
      },
      {
        values: [
          "Patent ductus arteriosus",
          "ECG, blood pressure check, echocardiography, cardiac catheterization [Patent ductus arteriosus]",
        ],
      },
      {
        values: [
          "Coarctation of the aorta",
          "ECG, blood pressure check, echocardiography, cardiac catheterization, Doppler ultrasound",
        ],
      },
    ],
  },
  {
    question: "Match each disease with its treatment:",
    matches: [
      {
        values: [
          "Hypercholesterolemia",
          "Change in dietary habits, low-fat diet, cholesterol-lowering medication",
        ],
      },
      {
        values: [
          "Atherosclerosis",
          "Weight loss, exercise, control blood pressure with antihypertensive, reduce cholesterol with cholesterol-lowering medication",
        ],
      },
      {
        values: [
          "Peripheral artery disease",
          "Weight loss, exercise, control blood pressure with antihypertensive, reduce cholesterol with cholesterol-lowering medication [Peripheral artery disease]",
        ],
      },
      {
        values: [
          "Raynaud’s disease",
          "Medications that improve circulation such as calcium channel blockers, alpha blockers, and vasodilators",
        ],
      },
      {
        values: [
          "Aortic aneurysm",
          "Surgery to repair aneurysm, control of blood pressure and atherosclerosis",
        ],
      },
      {
        values: [
          "Arterial hypertension",
          "Blood pressure–lowering medication, diet, weight loss, and exercise",
        ],
      },
      {
        values: [
          "Pulmonary arterial hypertension",
          "Medications to lower pressure, oxygen, lung transplant",
        ],
      },
      {
        values: [
          "Varicose veins",
          "Elastic bandages, support hose, walking, elevating the legs, surgical vein stripping, compression sclerotherapy",
        ],
      },
      {
        values: [
          "Chronic venous insufficiency",
          "Diet, exercise, compression stockings, surgical bypass procedure",
        ],
      },
      {
        values: [
          "Venous thrombosis",
          "Blood thinning medication, surgery to remove the thrombus",
        ],
      },
      {
        values: [
          "Coronary heart disease",
          "Angioplasty, coronary artery bypass surgery, blood pressure–lowering medication, blood thinners, diuretics, nitrates to stop chest pain, cholesterol-lowering medication, diet, exercise",
        ],
      },
      {
        values: [
          "Myocarditis",
          "Bed rest to prevent further myocardial damage, treatment of the viral infection",
        ],
      },
      {
        values: [
          "Dilated cardiomyopathy",
          "Medications to treat symptoms, rest, heart transplant if severe",
        ],
      },
      {
        values: [
          "Hypertrophic cardiomyopathy",
          "Medications to treat symptoms and prevent sudden cardiac death",
        ],
      },
      {
        values: ["Restrictive cardiomyopathy", "Medications to treat symptoms"],
      },
      {
        values: [
          "Infective endocarditis",
          "Antimicrobial therapy, surgery in severe cases to remove vegetations",
        ],
      },
      { values: ["Rheumatic heart disease", "Antimicrobial therapy"] },
      {
        values: [
          "Valvular heart disease: Mitral stenosis",
          "Valvuloplasty, surgical valve replacement",
        ],
      },
      {
        values: [
          "Valvular heart disease: Mitral regurgitation",
          "Surgery to replace valve",
        ],
      },
      {
        values: [
          "Valvular heart disease: Aortic stenosis",
          "Surgery to replace valve [Valvular heart disease: Aortic stenosis]",
        ],
      },
      {
        values: [
          "Aortic Regurgitation",
          "Surgery to replace valve [Aortic Regurgitation]",
        ],
      },
      {
        values: [
          "Cardiac Arrhythmias: Supraventricular",
          "Anti-arrhythmic medications",
        ],
      },
      {
        values: [
          "Cardiac Arrhythmias: Ventricular",
          "Anti-arrhythmic medications [Cardiac Arrhythmias: Ventricular]",
        ],
      },
      {
        values: [
          "Congestive Heart Failure",
          "Medication therapy (diuretics, antihypertensives, anti-arrhythmics, cardiac output enhancers), bed rest",
        ],
      },
      {
        values: [
          "Shock",
          "Rapid fluid administration to increase blood pressure, medication to increase heart rate",
        ],
      },
      {
        values: [
          "Congenital Heart Disease: Tetralogy of Fallot",
          "Corrective surgery",
        ],
      },
      {
        values: [
          "Congenital Heart Disease: Transposition of the Great Arteries",
          "Administration of prostaglandins at birth to maintain patent ductus arteriosus until corrective surgery",
        ],
      },
      {
        values: [
          "Septal defects",
          "Large defects require surgical correction.",
        ],
      },
      {
        values: [
          "Patent ductus arteriosus",
          "Antibiotics to prevent endocarditis; anti-inflammatory medication to close the patent ductus.",
        ],
      },
      { values: ["Coarctation of the aorta", "Corrective surgery."] },
    ],
  },
  {
    question: "Match each disease with its prevention:",
    matches: [
      {
        values: [
          "Hypercholesterolemia",
          "Healthy lifestyle, diet and exercise, weight loss, low-fat diet",
        ],
      },
      {
        values: [
          "Atherosclerosis",
          "Healthy lifestyle, diet and exercise, weight loss, low-fat diet [Atherosclerosis]",
        ],
      },
      {
        values: [
          "Peripheral artery disease",
          "Healthy lifestyle, diet and exercise, weight loss, low-fat diet [Peripheral artery disease]",
        ],
      },
      {
        values: [
          "Raynaud’s disease",
          "Abstinence from cigarette smoking; protect extremities, ears, and nose from cold",
        ],
      },
      {
        values: [
          "Aortic aneurysm",
          "Healthy lifestyle; control of hypertension, diabetes, and hypercholesterolemia",
        ],
      },
      {
        values: [
          "Arterial hypertension",
          "Healthy lifestyle with proper diet and exercise; control of diabetes and hypercholesterolemia, weight loss",
        ],
      },
      {
        values: [
          "Pulmonary arterial hypertension",
          "Etiology often unknown; surgical correction of ventricular septal defect and patent ductus arteriosus",
        ],
      },
      {
        values: [
          "Varicose veins",
          "Weight loss, walking, elevation of the legs after long periods of standing",
        ],
      },
      {
        values: [
          "Chronic venous insufficiency",
          "Weight loss, control of atherosclerosis and hypercholesterolemia, diabetes, exercise, healthy eating",
        ],
      },
      {
        values: [
          "Venous thrombosis",
          "Early ambulation following surgery or childbirth, compression stockings",
        ],
      },
      {
        values: [
          "Coronary heart disease",
          "Control of atherosclerosis; diet, exercise, weight loss if overweight or obese",
        ],
      },
      { values: ["Myocarditis", "Unknown"] },
      {
        values: ["Dilated cardiomyopathy", "Unknown [Dilated cardiomyopathy]"],
      },
      {
        values: [
          "Hypertrophic cardiomyopathy",
          "Unknown [Hypertrophic cardiomyopathy]",
        ],
      },
      {
        values: [
          "Restrictive cardiomyopathy",
          "Unknown [Restrictive cardiomyopathy]",
        ],
      },
      {
        values: [
          "Infective endocarditis",
          "Prompt treatment of bacterial infections, prophylactic antimicrobial therapy",
        ],
      },
      {
        values: [
          "Rheumatic heart disease",
          "Prompt treatment of bacterial infections, prophylactic antimicrobial therapy [Rheumatic heart disease]",
        ],
      },
      {
        values: [
          "Valvular heart disease: Mitral stenosis",
          "Prompt treatment of bacterial infections, prophylactic antimicrobial therapy, treatment of cardiac symptoms",
        ],
      },
      {
        values: [
          "Valvular heart disease: Mitral regurgitation",
          "Prophylactic antimicrobial therapy prevents bacteria from colonizing defective valve",
        ],
      },
      {
        values: [
          "Valvular heart disease: Aortic stenosis",
          "Prophylactic antimicrobial therapy prevents bacteria from colonizing defective valve [Valvular heart disease: Aortic stenosis]",
        ],
      },
      { values: ["Aortic Regurgitation", "Unknown [Aortic Regurgitation]"] },
      {
        values: [
          "Cardiac Arrhythmias: Supraventricular",
          "Prevention of heart disease",
        ],
      },
      {
        values: [
          "Cardiac Arrhythmias: Ventricular",
          "Prevention of heart disease [Cardiac Arrhythmias: Ventricular]",
        ],
      },
      {
        values: [
          "Congestive Heart Failure",
          "Treatment of underlying heart disease",
        ],
      },
      {
        values: [
          "Shock",
          "Fluid replacement during surgery, prompt treatment of infections/allergic reactions, blood transfusions",
        ],
      },
      {
        values: [
          "Congenital Heart Disease: Tetralogy of Fallot",
          "Unknown [Congenital Heart Disease: Tetralogy of Fallot]",
        ],
      },
      {
        values: [
          "Congenital Heart Disease: Transposition of the Great Arteries",
          "Unknown [Congenital Heart Disease: Transposition of the Great Arteries]",
        ],
      },
      { values: ["Septal defects", "Unknown [Septal defects]"] },
      {
        values: [
          "Patent ductus arteriosus",
          "Unknown [Patent ductus arteriosus]",
        ],
      },
      {
        values: [
          "Coarctation of the aorta",
          "Unknown [Coarctation of the aorta]",
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
