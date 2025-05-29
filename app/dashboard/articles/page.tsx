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
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">All Posts</h1>
        <p className="text-muted-foreground">
          Manage and view all your articles.
        </p>
      </div>

      <ArticlesTable currentPage={1} />
    </div>
  );
}
