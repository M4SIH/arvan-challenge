import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-sm min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] grid grid-rows-[20px_1fr_20px] items-center justify-items-center">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2 tracking-[-.01em]">
              Welcome to Arvan Challenge - A modern dashboard application built
              with
              <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
                Next.js 15 & React 19
              </code>
              .
            </li>
            <li className="tracking-[-.01em]">
              Explore the dashboard and authentication features.
            </li>
          </ol>

          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <Link
              href="/dashboard/articles"
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            >
              Go to Dashboard
            </Link>
            <Link
              href="/login"
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            >
              Sign In
            </Link>
          </div>
        </main>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
          <Link
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="/dashboard/articles"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Dashboard
          </Link>
          <Link
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="/login"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Authentication
          </Link>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Next.js Documentation →
          </a>
        </footer>
      </div>
    </div>
  );
}
