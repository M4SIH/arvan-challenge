import { FileText, Plus } from "lucide-react";
import { MenuItem } from "../types";

export const mainNavigationItems: MenuItem[] = [
  {
    title: "Articles",
    url: "/dashboard/articles",
    icon: FileText,
  },
  {
    title: "New Articles",
    url: "/dashboard/articles/create",
    icon: Plus,
  },
];
