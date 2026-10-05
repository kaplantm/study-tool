import { courses } from "@/app/lib/courses/courses";
import StudyPageClient from "./StudyPageClient";
import { Suspense } from "react";

export function generateStaticParams() {
  return courses.map((course) => ({ courseId: course.id }));
}

export default function StudyPage() {
  return (
    <Suspense fallback={null}>
      <StudyPageClient />
    </Suspense>
  );
}
