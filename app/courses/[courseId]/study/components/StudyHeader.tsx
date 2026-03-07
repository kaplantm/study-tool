import { Course } from "@/app/types";
import { useRouter } from "next/navigation";

export default function StudyHeader({ course, onChangeCourse }: { course: Course, onChangeCourse: () => void }) {
  const router = useRouter();
  return (
    <header className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
          Flashcard Study
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => router.push(`/courses/${course.id}`)}
            className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-600 transition hover:border-zinc-500 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-500"
          >
            ← Back to {course.title}
          </button>
          <button
            onClick={onChangeCourse}
            className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-600 transition hover:border-zinc-500 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-500"
          >
            All courses
          </button>
        </div>
      </div>
      <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">
        {course.title}
      </h1>
      <p className="max-w-2xl text-base text-zinc-600 dark:text-zinc-400">
        {course.description}
      </p>
    </header>
  );
}
