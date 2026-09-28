import { Course } from "@/app/types";
import { bio160Unit1 } from "./units/1/unit";

export const bio160Course: Course = {
  id: "bio160",
  title: "BIO 160: Pathology",
  description: "Pathology",
  number: 5,
  type: "course",
  units: [bio160Unit1],
};
