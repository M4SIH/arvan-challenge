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
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { mainNavigationItems } from "../config/navigation";
import { User } from "@/lib/auth-server";
import { logoutAction } from "@/lib/auth-actions";
import { useTransition } from "react";

interface SidebarWrapperProps {
  children: React.ReactNode;
  user: User;
}

export function SidebarWrapper({ children, user }: SidebarWrapperProps) {
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleLogout = () => {
    startTransition(() => {
      logoutAction();
    });
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
    <div>
      <SidebarProvider>
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
                          <Link href={item.url}>
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
        <SidebarInset className="bg-[#F0F0F0]">
          <header className="flex h-16 shrink-0 items-center justify-between gap-2 px-6 border-b transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 bg-white">
            <div className="flex items-center gap-2">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <span className="text-sm text-muted-foreground">
                Welcome {user?.name || "User"}
              </span>
            </div>

            <div className="flex-1 text-center">
              <h1 className="text-sm font-semibold bg-[#F0F0F0] py-2 px-3 rounded-lg inline-block">
                Arvan Challenge
              </h1>
            </div>

            <div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
                disabled={isPending}
                className="text-sm"
              >
                {isPending ? "Logging out..." : "Log out"}
              </Button>
            </div>
          </header>
          <div className="flex-1 bg-white rounded-lg m-6 p-6 shadow-sm">
            {children}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
