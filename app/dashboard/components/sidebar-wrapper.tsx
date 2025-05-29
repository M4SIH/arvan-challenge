"use client";

import Link from "next/link";
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
import { useAuth } from "@/lib/auth-context";

interface SidebarWrapperProps {
  children: React.ReactNode;
}

export function SidebarWrapper({ children }: SidebarWrapperProps) {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    window.location.href = "/login";
  };

  return (
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
                {mainNavigationItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <div className="p-4 text-xs text-muted-foreground">
            © 2024 Arvan Challenge
          </div>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center justify-between gap-2 px-6 border-b transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <span className="text-sm text-muted-foreground">
              Welcome {user?.name || "User"}
            </span>
          </div>

          <div className="flex-1 text-center">
            <h1 className="text-lg font-semibold">Arvan Challenge</h1>
          </div>

          <div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleLogout}
              className="text-sm"
            >
              Log out
            </Button>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
