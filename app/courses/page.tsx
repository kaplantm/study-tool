"use client";

import CourseList from "@/app/components/flashcards/CourseList";
import PageHeader from "@/app/components/flashcards/PageHeader";
import { courses } from "@/app/lib/courses/courses";
import { useRouter } from "next/navigation";

export default function CoursesPage() {
  const router = useRouter();

  const handleCourseSelect = (courseId: string) => {
    router.push(`/courses/${courseId}/study`);
  };

  return (
    <div className="min-h-screen bg-zinc-50 px-4 py-12 text-zinc-900 dark:bg-black dark:text-zinc-100">
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-10">
        <PageHeader />

        <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
          <CourseList courses={courses} onSelectCourse={handleCourseSelect} />
        </section>
      </main>
    </div>
  );
}
