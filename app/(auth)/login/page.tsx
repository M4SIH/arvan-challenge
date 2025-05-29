"use client";

import Link from "next/link";
import { LoginForm } from "./components/login-form";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Sign in</h2>
          </div>

          <LoginForm />

          <div className="text-center pt-2">
            <p className="text-sm text-gray-600">
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Sign up now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
