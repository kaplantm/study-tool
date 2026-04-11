import { Chapter } from "@/app/types";
import { section1IntoToOrganics } from "./sections/1-intro-to-organics";
import { section2FunctionalGroups } from "./sections/2-function-groups";

export const chemUnit4Chapter3: Chapter = {
  id: "3",
  title: "Organic Chemistry",
  description: "Organic Chemistry",
  number: 3,
  type: "chapter",
  sections: [section1IntoToOrganics, section2FunctionalGroups],
  questions: [
    // Optionally, add chapter-level summary or integrative questions here
  ],
};
