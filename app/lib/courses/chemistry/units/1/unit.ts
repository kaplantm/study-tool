import { Unit } from "@/app/types";
import { chemicalBonding } from "./chapters/3/1";

export const chemUnit1: Unit = {
  id: "unit-1",
  title: "Atomic Strutcture",
  description: "Atomic Strutcture",
  number: 1,
  type: "unit",
  chapters: [chemicalBonding],
  questions: [], // Optionally, add unit-level summary or integrative questions here
};
