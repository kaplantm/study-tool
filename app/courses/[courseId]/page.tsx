import { courses } from "@/app/lib/courses/courses";
import CoursePageClient from "./CoursePageClient";

export function generateStaticParams() {
  return courses.map((course) => ({ courseId: course.id }));
}

export default function CoursePage() {
  return <CoursePageClient />;
}
