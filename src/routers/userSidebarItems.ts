import {
  Home,
  Download,
  Upload,
  Send,
  History,
  User,
  Lock,
} from "lucide-react";

import Deposit from "@/components/pages/User/Deposit";
import Withdraw from "@/components/pages/User/Withdraw";
import SendMoney from "@/components/pages/User/SendMoney";
import Transactions from "@/components/pages/User/Transactions";
import Profile from "@/components/pages/User/Profile";

import type { ISidebarItem } from "@/Types";
import Overview from "@/components/pages/User/Overview";
import SetPassword from "@/components/pages/User/Setpassword";

export const userSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Overview",
        url: "/user/overview",
        icon: Home,
        component: Overview,
      },
    ],
  },
  {
    title: "Wallet",
    items: [
      {
        title: "Deposit Money",
        url: "/user/deposit",
        icon: Download,
        component: Deposit,
      },
      {
        title: "Withdraw Money",
        url: "/user/withdraw",
        icon: Upload,
        component: Withdraw,
      },
      {
        title: "Send Money",
        url: "/user/send-money",
        icon: Send,
        component: SendMoney,
      },
      {
        title: "History",
        url: "/user/transactions",
        icon: History,
        component: Transactions,
      },
      {
        title: "Profile",
        url: "/user/profile",
        icon: User,
        component: Profile,
      },
      {
        title: "Password",
        url: "/user/password",
        icon: Lock,
        component: SetPassword,
      },
    ],
  },
];
