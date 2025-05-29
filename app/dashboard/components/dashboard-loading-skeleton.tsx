import { Skeleton } from "@/components/ui/skeleton";

export function DashboardLoadingSkeleton() {
  return (
    <div className="flex h-screen bg-[#F0F0F0]">
      {/* Sidebar skeleton */}
      <div className="w-64 bg-white border-r">
        <div className="p-4">
          <Skeleton className="h-8 w-full mb-4" />
          <div className="space-y-2">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
          </div>
        </div>
      </div>

      {/* Main content skeleton */}
      <div className="flex-1">
        {/* Header skeleton */}
        <div className="h-16 bg-white border-b px-6 flex items-center justify-between">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-8 w-20" />
        </div>

        {/* Content skeleton */}
        <div className="p-6">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <Skeleton className="h-8 w-64 mb-6" />
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
