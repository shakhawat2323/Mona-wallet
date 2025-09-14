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
} from "lucide-react";

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
        title: "Add Money",
        url: "/agent/add-money",
        component: AddMoney,
        icon: Wallet,
      },
      {
        title: "Withdraw Money",
        url: "/agent/withdraw-money",
        component: WithdrawMoney,
        icon: ArrowDownToLine,
      },
      {
        title: "Transactions",
        url: "/agent/transactions",
        component: Transactionsagent,
        icon: ReceiptText,
      },
      {
        title: "Profile & Settings",
        url: "/agent/settings",
        component: Profile,
        icon: SettingsIcon,
      },
    ],
  },
];
