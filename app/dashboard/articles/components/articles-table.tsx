"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Edit, Trash2 } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import { DeleteConfirmationDialog } from "./delete-confirmation-dialog";

interface Article {
  id: number;
  title: string;
  author: string;
  tags: string[];
  excerpt: string;
  createdAt: string;
}

interface ArticlesTableProps {
  currentPage: number;
}

// Mock data for demonstration
const generateMockArticles = (
  page: number,
  perPage: number = 10
): Article[] => {
  const startId = (page - 1) * perPage + 1;
  return Array.from({ length: perPage }, (_, i) => ({
    id: startId + i,
    title: "Article title",
    author: "@author_username",
    tags: ["list", "of", "tags"],
    excerpt: "First 20 words of article body",
    createdAt: "<date>",
  }));
};

const TOTAL_ARTICLES = 100; // Mock total count
const ARTICLES_PER_PAGE = 10;

export function ArticlesTable({ currentPage }: ArticlesTableProps) {
  const [articles] = useState<Article[]>(() =>
    generateMockArticles(currentPage, ARTICLES_PER_PAGE)
  );
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [articleToDelete, setArticleToDelete] = useState<number | null>(null);

  const totalPages = Math.ceil(TOTAL_ARTICLES / ARTICLES_PER_PAGE);

  const handleEdit = (articleId: number) => {
    console.log("Edit article:", articleId);
    // TODO: Implement edit functionality
  };

  const handleDelete = (articleId: number) => {
    setArticleToDelete(articleId);
    setDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    if (articleToDelete) {
      console.log("Deleting article:", articleToDelete);
      // TODO: Implement actual delete functionality here
      toast.success("Article deleted successfully");
      setDeleteModalOpen(false);
      setArticleToDelete(null);
    }
  };

  const cancelDelete = () => {
    setDeleteModalOpen(false);
    setArticleToDelete(null);
  };

  const generatePageUrl = (page: number) => {
    if (page === 1) {
      return "/dashboard/articles";
    }
    return `/dashboard/articles/page/${page}`;
  };

  const renderPagination = () => {
    const pages = [];

    // Previous button
    if (currentPage > 1) {
      pages.push(
        <Link key="prev" href={generatePageUrl(currentPage - 1)}>
          <Button
            variant="outline"
            size="sm"
            className="text-sm cursor-pointer"
          >
            &lt;
          </Button>
        </Link>
      );
    }

    // First page
    if (currentPage > 3) {
      pages.push(
        <Link key="1" href={generatePageUrl(1)}>
          <Button
            variant={currentPage === 1 ? "default" : "outline"}
            size="sm"
            className="text-sm cursor-pointer"
          >
            1
          </Button>
        </Link>
      );

      if (currentPage > 4) {
        pages.push(
          <span key="ellipsis1" className="text-sm text-muted-foreground px-2">
            ...
          </span>
        );
      }
    }

    // Current page and surrounding pages
    const start = Math.max(1, currentPage - 2);
    const end = Math.min(totalPages, currentPage + 2);

    for (let i = start; i <= end; i++) {
      pages.push(
        <Link key={i} href={generatePageUrl(i)}>
          <Button
            variant={currentPage === i ? "default" : "outline"}
            size="sm"
            className="text-sm cursor-pointer"
          >
            {i}
          </Button>
        </Link>
      );
    }

    // Last page
    if (currentPage < totalPages - 2) {
      if (currentPage < totalPages - 3) {
        pages.push(
          <span key="ellipsis2" className="text-sm text-muted-foreground px-2">
            ...
          </span>
        );
      }

      pages.push(
        <Link key={totalPages} href={generatePageUrl(totalPages)}>
          <Button
            variant={currentPage === totalPages ? "default" : "outline"}
            size="sm"
            className="text-sm cursor-pointer"
          >
            {totalPages}
          </Button>
        </Link>
      );
    }

    // Next button
    if (currentPage < totalPages) {
      pages.push(
        <Link key="next" href={generatePageUrl(currentPage + 1)}>
          <Button
            variant="outline"
            size="sm"
            className="text-sm cursor-pointer"
          >
            &gt;
          </Button>
        </Link>
      );
    }

    return pages;
  };

  return (
    <div className="space-y-4">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#F0F0F0] text-lg font-semibold">
              <TableHead className="w-12">#</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Tags</TableHead>
              <TableHead>Excerpt</TableHead>
              <TableHead>Created</TableHead>
              <TableHead className="w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {articles.map((article) => (
              <TableRow key={article.id}>
                <TableCell className="font-medium">{article.id}</TableCell>
                <TableCell className="font-medium">{article.title}</TableCell>
                <TableCell>{article.author}</TableCell>
                <TableCell>{article.tags.join(", ")}</TableCell>
                <TableCell>{article.excerpt}</TableCell>
                <TableCell>{article.createdAt}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem
                        onClick={() => handleEdit(article.id)}
                        className="cursor-pointer"
                      >
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handleDelete(article.id)}
                        className="cursor-pointer text-red-600"
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex justify-end items-center space-x-2">
        {renderPagination()}
      </div>

      {/* Delete Confirmation Modal */}
      <DeleteConfirmationDialog
        isOpen={deleteModalOpen}
        onClose={cancelDelete}
        onConfirm={confirmDelete}
      />
    </div>
  );
}
