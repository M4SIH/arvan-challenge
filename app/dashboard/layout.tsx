import { Suspense } from "react";
import { SidebarWrapper } from "./components/sidebar-wrapper";
import { getUser } from "@/lib/auth-server";
import { redirect } from "next/navigation";
import { DashboardLoadingSkeleton } from "./components/dashboard-loading-skeleton";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Server-side authentication check
  const user = await getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <Suspense fallback={<DashboardLoadingSkeleton />}>
      <SidebarWrapper user={user}>{children}</SidebarWrapper>
    </Suspense>
  );
}
