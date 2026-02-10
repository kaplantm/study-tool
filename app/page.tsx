import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-4 dark:bg-black">
      <main className="flex max-w-2xl flex-col items-center gap-8 text-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Flashcard Study
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Master your courses with interactive flashcards. Choose how you want
            to study, get instant feedback, and track your progress.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/courses"
            className="rounded-full bg-zinc-900 px-8 py-3 text-base font-semibold text-white transition hover:bg-zinc-700 dark:bg-zinc-100 dark:text-black dark:hover:bg-white"
          >
            Start studying
          </Link>
          <Link
            href="/courses"
            className="rounded-full border border-zinc-300 px-8 py-3 text-base font-semibold text-zinc-700 transition hover:border-zinc-500 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-zinc-500"
          >
            Browse courses
          </Link>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          <div className="flex flex-col gap-2">
            <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
              📚
            </div>
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
              Study by topic
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Focus on units, chapters, or entire courses
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
              🔀
            </div>
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
              Shuffle mode
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Randomize questions for better retention
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
              📊
            </div>
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
              Track progress
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              See which questions need more review
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
