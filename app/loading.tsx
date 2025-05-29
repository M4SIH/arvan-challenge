import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#F0F0F0] flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-sm p-8 max-w-md w-full mx-4">
        <div className="text-center space-y-4">
          <Skeleton className="h-8 w-32 mx-auto" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4 mx-auto" />
          <div className="flex justify-center pt-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
          </div>
          <p className="text-sm text-gray-600">Loading...</p>
        </div>
      </div>
    </div>
  );
}
