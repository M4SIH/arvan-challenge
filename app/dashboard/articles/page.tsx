import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Articles - Arvan Challenge",
  description: "Manage your articles",
};

interface Props {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function ArticlesPage({ searchParams }: Props) {
  const params = await searchParams;
  const page = params.page ? parseInt(params.page as string) : 1;

  // If page is not 1, redirect to the proper URL structure
  if (page !== 1) {
    redirect(`/dashboard/articles/page/${page}`);
  }

  // Import the ArticlesTable component dynamically
  const { ArticlesTable } = await import("./components/articles-table");

  return (
    <div className="space-y-6  border-gray-200">
      <div>
        <h1 className="text-lg font-semibold tracking-tight">All Posts</h1>
      </div>

      <ArticlesTable currentPage={1} />
    </div>
  );
}
