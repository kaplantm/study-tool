import { Unit } from "@/app/types";

import { chemUnit4Chapter3 } from "./chapters/3/3";

export const chemUnit4: Unit = {
  id: "unit-4",
  title: "Organic Chemistry",
  description: "Organic Chemistry",
  number: 4,
  type: "unit",
  chapters: [chemUnit4Chapter3],
  questions: [], // Optionally, add unit-level summary or integrative questions here
};
