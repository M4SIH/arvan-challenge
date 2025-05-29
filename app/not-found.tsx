import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-8">
            {"The page you're looking for doesn't exist or has been moved."}
          </p>
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
            >
              Go Home
            </Link>
            <div className="text-sm">
              <Link
                href="/dashboard/articles"
                className="text-indigo-600 hover:text-indigo-500 mx-2"
              >
                Dashboard
              </Link>
              |
              <Link
                href="/login"
                className="text-indigo-600 hover:text-indigo-500 mx-2"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
