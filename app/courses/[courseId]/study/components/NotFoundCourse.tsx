export default function NotFoundCourse({ onChangeCourse }: { onChangeCourse: () => void }) {
  return (
    <div className="min-h-screen bg-zinc-50 px-4 py-12 text-zinc-900 dark:bg-black dark:text-zinc-100">
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-10">
        <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
          <p className="text-center text-zinc-600 dark:text-zinc-400">
            Course not found
          </p>
          <div className="mt-4 flex justify-center">
            <button
              onClick={onChangeCourse}
              className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-600 transition hover:border-zinc-500 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-500"
            >
              Back to courses
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
