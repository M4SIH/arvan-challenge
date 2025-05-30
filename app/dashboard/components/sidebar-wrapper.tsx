"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { FileText } from "lucide-react";
import { mainNavigationItems } from "../config/navigation";
import { User } from "@/lib/auth-server";
import { logoutAction } from "@/lib/auth-actions";
import { useTransition } from "react";

interface SidebarWrapperProps {
  children: React.ReactNode;
  user: User;
}

function SidebarLayout({ children, user }: SidebarWrapperProps) {
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const { setOpenMobile } = useSidebar();

  const handleLogout = () => {
    startTransition(() => {
      logoutAction();
    });
  };

  const handleLinkClick = () => {
    // Close mobile sidebar when navigation link is clicked
    setOpenMobile(false);
  };

  const isActive = (itemUrl: string) => {
    // Handle exact match for root dashboard articles and its pagination
    if (itemUrl === "/dashboard/articles") {
      return (
        pathname === "/dashboard/articles" ||
        pathname.startsWith("/dashboard/articles/page/") ||
        Boolean(pathname.match(/^\/dashboard\/articles\/\d+$/))
      );
    }
    // Handle sub-routes like /dashboard/articles/create
    if (pathname.startsWith(itemUrl)) {
      return true;
    }
    return false;
  };

  return (
    <>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2 px-4 py-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <FileText className="h-4 w-4" />
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">Articles</span>
              <span className="truncate text-xs">Content Management</span>
            </div>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {mainNavigationItems.map((item) => {
                  const active = isActive(item.url);
                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        asChild
                        isActive={active}
                        className={
                          active
                            ? "sidebar-menu-active"
                            : "hover:bg-sidebar-accent/50 transition-colors"
                        }
                      >
                        <Link href={item.url} onClick={handleLinkClick}>
                          <item.icon
                            className={`sidebar-icon ${
                              active ? "text-primary" : ""
                            }`}
                          />
                          <span
                            className={
                              active ? "font-semibold text-primary" : ""
                            }
                          >
                            {item.title}
                          </span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <div className="p-4 text-xs text-muted-foreground">
            © 2025 Arvan Challenge
          </div>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset className="bg-background">
        <header className="flex h-16 shrink-0 items-center gap-2 px-4 sm:px-6 border-b border-border transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 bg-card relative">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <span className="text-sm text-muted-foreground hidden sm:block">
              Welcome {user?.name || "User"}
            </span>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2 max-w-[120px] sm:max-w-none">
            <h1 className="text-xs sm:text-sm font-semibold bg-muted text-foreground py-1.5 px-2 sm:py-2 sm:px-3 rounded-lg whitespace-nowrap">
              Arvan Challenge
            </h1>
          </div>

          <div className="ml-auto flex items-center gap-2">
            <ThemeToggle  />
            <Button
              variant="outline"
              size="sm"
              onClick={handleLogout}
              disabled={isPending}
              className="text-xs sm:text-sm px-2 sm:px-3"
            >
              <span className="hidden sm:inline">
                {isPending ? "Logging out..." : "Log out"}
              </span>
              <span className="sm:hidden">{isPending ? "..." : "Logout"}</span>
            </Button>
          </div>
        </header>
        <div className="flex-1 bg-card rounded-lg m-6 p-6 shadow-sm">
          {children}
        </div>
      </SidebarInset>
    </>
  );
}

export function SidebarWrapper({ children, user }: SidebarWrapperProps) {
  return (
    <div>
      <SidebarProvider>
        <SidebarLayout user={user}>{children}</SidebarLayout>
      </SidebarProvider>
    </div>
  );
}
