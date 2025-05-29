import { LucideIcon } from "lucide-react";

export interface MenuItem {
  title: string;
  url: string;
  icon: LucideIcon;
}

export interface DashboardStats {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down" | "neutral";
}

export interface ActivityItem {
  id: string;
  type: "user" | "payment" | "maintenance" | "notification";
  title: string;
  time: string;
  color: "blue" | "green" | "orange" | "red";
}
