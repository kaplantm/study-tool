Goal: Generate a new javascript object representing a review questions for a unit of this course, of type Unit, as described in app/types.ts

Inputs:
Required file context: A notes.rtfd file, a course.ts file
Required: Unit number
Opional: Chapter Number(s), if omitted include all chapters in the unit

Change should follow this file structure:

app/lib/courses/[courseName]/

- notes/notes.rtfd <!-- the notes file recieved as context -->
- course.ts <!-- file that will import the unit you create -->
- units/
  -- [unitName].ts <!-- create/update: one or more files that define a unit, imports chapters, is imported by course -->
  -- chapters
  --- [chapterNumber].ts <!-- create/update: one or more files that define a chapter, imports sections, is imported by unit -->
  --- sections
  ---- [sectionName].ts <!-- create/update: one or more files that define a section, includes questions, is imported by chapter -->

Add image files: public / images / courses / [courseName] / units / [unitName] / [sectionName] / [imageFile]