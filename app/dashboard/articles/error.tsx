"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ArticlesError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Articles error:", error);
  }, [error]);

  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="max-w-md w-full text-center">
        <div className="mb-6">
          <div className="mx-auto h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
            <svg
              className="h-6 w-6 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Failed to load articles
          </h2>
          <p className="text-gray-600 mb-6">
            Something went wrong while loading the articles. Please try again.
          </p>
          <div className="space-y-2">
            <Button onClick={reset} className="w-full">
              Try again
            </Button>
            <Button
              variant="outline"
              onClick={() => (window.location.href = "/dashboard")}
              className="w-full"
            >
              Back to dashboard
            </Button>
          </div>
        </div>
        {process.env.NODE_ENV === "development" && (
          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-md text-left">
            <p className="text-sm text-red-800 font-mono break-all">
              {error.message}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
