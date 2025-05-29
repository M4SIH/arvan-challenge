"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function DashboardError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Dashboard error:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F0F0F0]">
      <div className="max-w-md w-full text-center bg-white rounded-lg shadow-sm p-8">
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
          <h1 className="text-xl font-semibold text-gray-900 mb-2">
            Something went wrong
          </h1>
          <p className="text-gray-600 mb-6">
            An error occurred while loading the dashboard. Please try again.
          </p>
          <div className="space-y-2">
            <Button onClick={reset} className="w-full">
              Try again
            </Button>
            <Button
              variant="outline"
              onClick={() => (window.location.href = "/")}
              className="w-full"
            >
              Go to home
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
