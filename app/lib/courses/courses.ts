import { Course } from "@/app/types";
import { bio110Course } from "./bio110/course";
import { bio121Course } from "./bio121/course";
import { bio160Course } from "./bio160/course";
import { chemistryCourse } from "./chemistry/course";
import { nutritionCourse } from "./nutrition/course";

export const courses: Course[] = [
  nutritionCourse,
  chemistryCourse,
  bio110Course,
  bio121Course,
  bio160Course,
];
