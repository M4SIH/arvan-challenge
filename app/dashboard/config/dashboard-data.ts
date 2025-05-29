import { DashboardStats, ActivityItem } from "../types";

export const dashboardStats: DashboardStats[] = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    change: "20.1% from last month",
    trend: "up",
  },
  {
    title: "Subscriptions",
    value: "+2350",
    change: "180.1% from last month",
    trend: "up",
  },
  {
    title: "Sales",
    value: "+12,234",
    change: "19% from last month",
    trend: "up",
  },
  {
    title: "Active Now",
    value: "+573",
    change: "201 since last hour",
    trend: "up",
  },
];

export const recentActivities: ActivityItem[] = [
  {
    id: "1",
    type: "user",
    title: "New user registered",
    time: "2 minutes ago",
    color: "blue",
  },
  {
    id: "2",
    type: "payment",
    title: "Payment received",
    time: "5 minutes ago",
    color: "green",
  },
  {
    id: "3",
    type: "maintenance",
    title: "Server maintenance scheduled",
    time: "1 hour ago",
    color: "orange",
  },
];
