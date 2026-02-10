Goal: Generate a new javascript object representing a review questions for a unit of this course, of type Unit, as described in app/types.ts

Inputs:
Required file context: A notes.rtfd file, a course.ts file
Required: Unit number
Opional: Chapter Number(s), if omitted include all chapters in the unit

Changes should follow this file structure:

app/lib/courses/[courseName]/
- /notes/unit-[unitNumber].md <!-- the notes file recieved as context -->
- course.ts <!-- file that will import the unit you create -->
- units/
  -- [unitName].ts <!-- create/update: one or more files that define a unit, imports chapters, is imported by course -->
  -- chapters/
  --- chapterNumber/
  ---- [chapterNumber].ts <!-- create/update: one or more files that define a chapter, imports sections, is imported by unit -->
  ---- sections
  ----- [sectionNumber]-[sectionName].ts <!-- create/update: one or more files that define a section, includes questions, is imported by chapter -->

Add image files: public / images / courses / [courseName] / units / [unitName] / [sectionName] / [imageFile]

Examples from the notes:
Unit 1: Fundamentals of Nutrition - Unit 1
Challenge 1.1 - Planning a Health Diet - Chapter 1 (inside Unit 1)
1.1 - 1. Social Media, Mixed Messages & Misinformation - Section 1 (inside Unit 1 Chapter 1)

Challenge 1.2 - Tools for Planning a Health Diet - Chapter 2 (inside Unit 1)
1.2 - 2. Calculating Nutrient Needs - Section 2 (inside Unit 1 Chapter 2)

Include all questions denoted with `Q:` in the notes, but format them as flash cards, with the question as the front of the card and the answer as the back of the card.
If questions are multiple choice, you'll need to include the options in the question of the flash card.
Also generate new questions based on the content of the notes, ensuring they are relevant and cover key concepts. Each question should be clear and concise, and the answer should be accurate and informative.
Do not include any questions that are not relevant to the unit or chapter content. Do not hallucinate questions or answers that are not supported by the notes. If there is insufficient information to generate questions, only include those that are explicitly stated in the notes.