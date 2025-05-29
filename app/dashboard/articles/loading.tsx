import { Skeleton } from "@/components/ui/skeleton";

export default function ArticlesLoading() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-10 w-32" />
      </div>

      <div className="space-y-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="border rounded-lg p-4 space-y-3">
            <div className="flex items-center justify-between">
              <Skeleton className="h-6 w-64" />
              <Skeleton className="h-4 w-20" />
            </div>
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <div className="flex items-center gap-2">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-20" />
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <Skeleton className="h-10 w-64" />
      </div>
    </div>
  );
}
