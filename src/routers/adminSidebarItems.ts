import Analytics from "@/components/pages/Admin/Analytics";
import ManageAgents from "@/components/pages/Admin/ManageAgents";
import ManageUsers from "@/components/pages/Admin/ManageUsers";
import Overviewadmin from "@/components/pages/Admin/Overviewadmin";
import Settings from "@/components/pages/Admin/Settings";
import Transactions from "@/components/pages/Admin/Transactions";
import type { ISidebarItem } from "@/Types";
import SetPassword from "@/components/pages/User/Setpassword";
import {
  LayoutDashboard,
  Users,
  UserCog,
  ReceiptText,
  Settings as SettingsIcon,
  BarChart3,
  Lock,
} from "lucide-react";

export const adminSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Overview",
        url: "/admin/overview",
        component: Overviewadmin,
        icon: LayoutDashboard,
      },
      {
        title: "Analytics",
        url: "/admin/analytics",
        component: Analytics,
        icon: BarChart3,
      },
    ],
  },
  {
    title: "Management",
    items: [
      {
        title: "Manage Users",
        url: "/admin/users",
        component: ManageUsers,
        icon: Users,
      },
      {
        title: "Manage Agents",
        url: "/admin/agents",
        component: ManageAgents,
        icon: UserCog,
      },
      {
        title: "Transactions",
        url: "/admin/transactions",
        component: Transactions,
        icon: ReceiptText,
      },
      {
        title: "Profile & Settings",
        url: "/admin/settings",
        component: Settings,
        icon: SettingsIcon,
      },
      {
        title: "Password",
        url: "/admin/password",
        icon: Lock,
        component: SetPassword,
      },
    ],
  },
];
