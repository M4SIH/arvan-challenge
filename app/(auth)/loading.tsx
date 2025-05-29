import { Skeleton } from "@/components/ui/skeleton";

export default function AuthLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
          <div>
            <Skeleton className="h-8 w-32" />
          </div>

          <div className="space-y-4">
            <div>
              <Skeleton className="h-4 w-16 mb-1" />
              <Skeleton className="h-10 w-full" />
            </div>

            <div>
              <Skeleton className="h-4 w-20 mb-1" />
              <Skeleton className="h-10 w-full" />
            </div>

            <div className="pt-4">
              <Skeleton className="h-10 w-full" />
            </div>
          </div>

          <div className="text-center pt-2">
            <Skeleton className="h-4 w-48 mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}
