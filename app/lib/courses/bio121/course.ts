import { Course } from "@/app/types";
import { bio121Unit1 } from "./units/1/unit";

export const bio121Course: Course = {
  id: "bio121",
  title: "BIO 121: Ecology",
  description: "Ecology",
  number: 4,
  type: "course",
  units: [bio121Unit1],
};
