import { Course } from "@/app/types";
import { buildCourse } from "../utils/course-builder";
import { nutritionQuestions } from "./nutrition/questions";

const courseConfigs: Course[] = [
  {
    id: "nutrition",
    title: "Nutrition",
    description: "Learn about the science of nutrition and healthy eating.",
    number: 1,
    type: "course",
    questions: nutritionQuestions,
    chapters: [],
  },
];

export const courses = courseConfigs.map((config) => ({
  ...config,
  quizzes: buildCourse(config),
}));
