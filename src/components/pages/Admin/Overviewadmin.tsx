import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Users,
  UserCog,
  ReceiptText,
  DollarSign,
  TrendingUp,
  Wallet,
  Lock,
  Unlock,
  UserX,
  UserCheck,
} from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    title: "Total Users",
    value: "12,450",
    icon: Users,
    change: "+5.2%",
    trend: "up",
  },
  {
    title: "Total Agents",
    value: "320",
    icon: UserCog,
    change: "+2.8%",
    trend: "up",
  },
  {
    title: "Transactions",
    value: "48,920",
    icon: ReceiptText,
    change: "+12.3%",
    trend: "up",
  },
  {
    title: "Transaction Volume",
    value: "$1.2M",
    icon: DollarSign,
    change: "-1.2%",
    trend: "down",
  },
  // --- নতুন যোগ করা metrics ---
  {
    title: "Total Wallets",
    value: "5,200",
    icon: Wallet,
    change: "+3.1%",
    trend: "up",
  },
  {
    title: "Blocked Wallets",
    value: "120",
    icon: Lock,
    change: "+1.0%",
    trend: "up",
  },
  {
    title: "Unblocked Wallets",
    value: "5,080",
    icon: Unlock,
    change: "-0.8%",
    trend: "down",
  },
  {
    title: "Suspended Agents",
    value: "25",
    icon: UserX,
    change: "+0.5%",
    trend: "up",
  },
  {
    title: "Approved Agents",
    value: "295",
    icon: UserCheck,
    change: "+4.2%",
    trend: "up",
  },
];

export default function Overview() {
  return (
    <div className="p-6 space-y-8">
      {/* Page Title */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Admin Overview</h1>
        <p className="text-muted-foreground">
          Quick insights about users, agents, wallets, and transactions
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card className="rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <stat.icon className="h-5 w-5 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p
                  className={`text-sm ${
                    stat.trend === "up" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {stat.change} {stat.trend === "up" ? "↑" : "↓"} from last month
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Extra Insights */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="rounded-2xl shadow-sm">
          <CardHeader>
            <CardTitle>Revenue Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4">
              <TrendingUp className="h-10 w-10 text-green-600" />
              <div>
                <p className="text-xl font-semibold">$250K</p>
                <p className="text-sm text-muted-foreground">This month</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-sm">
          <CardHeader>
            <CardTitle>Active Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4">
              <Users className="h-10 w-10 text-blue-600" />
              <div>
                <p className="text-xl font-semibold">8,950</p>
                <p className="text-sm text-muted-foreground">Online in last 24h</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
