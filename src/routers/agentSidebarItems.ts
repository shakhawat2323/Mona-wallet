import AddMoney from "@/components/pages/Agent/AddMoney";
import Overviewagent from "@/components/pages/Agent/Overviewagent";
import Profile from "@/components/pages/Agent/Profile";

import Transactionsagent from "@/components/pages/Agent/Transactionsagent";
import WithdrawMoney from "@/components/pages/Agent/WithdrawMoney";
import type { ISidebarItem } from "@/Types";

import {
  LayoutDashboard,
  Wallet,
  ArrowDownToLine,
  ReceiptText,
  Settings as SettingsIcon,
  Lock,
} from "lucide-react";
import SetPassword from "@/components/pages/User/Setpassword";
export const agentSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Overview",
        url: "/agent/overview",
        component: Overviewagent,
        icon: LayoutDashboard,
      },
    ],
  },
  {
    title: "Wallet Operations",
    items: [
      {
        title: " Cash-In",
        url: "/agent/add-money",
        component: AddMoney,
        icon: Wallet,
      },
      {
        title: "Cash-Out",
        url: "/agent/withdraw-money",
        component: WithdrawMoney,
        icon: ArrowDownToLine,
      },
      {
        title: "Transactions History",
        url: "/agent/transactions",
        component: Transactionsagent,
        icon: ReceiptText,
      },
      {
        title: "Profile ",
        url: "/agent/settings",
        component: Profile,
        icon: SettingsIcon,
      },
      {
        title: "Password",
        url: "/agent/password",
        icon: Lock,
        component: SetPassword,
      },
    ],
  },
];
