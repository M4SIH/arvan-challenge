import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Articles - Arvan Challenge",
  description: "Manage your articles",
};

interface Props {
  params: Promise<{ page: string }>;
}

export default async function ArticlesPageWithNumber({ params }: Props) {
  const { page: pageParam } = await params;
  const currentPage = parseInt(pageParam);

  // Validate page number
  if (isNaN(currentPage) || currentPage < 1) {
    notFound();
  }

  // If page is 1, redirect to the base articles page
  if (currentPage === 1) {
    redirect("/dashboard/articles");
  }

  // Import the ArticlesTable component dynamically
  const { ArticlesTable } = await import("../../components/articles-table");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">All Posts</h1>
      </div>

      <ArticlesTable currentPage={currentPage} />
    </div>
  );
}
