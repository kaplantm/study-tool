import { Course } from "@/app/types";
import { chemUnit1 } from "./units/1/unit";
import { chemUnit4 } from "./units/4/unit";

export const chemistryCourse: Course = {
  id: "chemistry",
  title: "Chemistry",
  description: "Chemistry",
  number: 2,
  type: "course",
  units: [chemUnit1, chemUnit4],
};
