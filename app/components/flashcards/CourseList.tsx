"use client";

import { Course } from "@/app/types";

type CourseListProps = {
  courses: Course[];
  onSelectCourse: (courseId: string) => void;
};

export default function CourseList({
  courses,
  onSelectCourse,
}: CourseListProps) {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-xl font-semibold">Available courses</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {courses.map((course) => (
          <button
            key={course.id}
            onClick={() => onSelectCourse(course.id)}
            className="flex flex-col gap-2 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 text-left transition hover:border-zinc-400 hover:bg-white dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-zinc-600"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold uppercase text-zinc-500">
                Course {course.number}
              </span>
              <span className="rounded-full bg-zinc-200 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                {course.units.length} units
              </span>
            </div>
            <h3 className="text-lg font-semibold">{course.title}</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {course.description}
            </p>
            <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
              Start studying →
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
