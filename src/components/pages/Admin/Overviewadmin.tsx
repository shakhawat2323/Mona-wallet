/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Users,
  UserCog,
  ReceiptText,
  DollarSign,
  Wallet,
  Lock,
  Unlock,
  UserX,
  UserCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import { useGetUserStatsQuery } from "@/Redux/features/auth/admin.api";



export default function Overview() {
  const {data}=useGetUserStatsQuery(undefined)
console.log(data)
  const stats = [
    {
      title: "Total Users",
      value: data?.data?.totalUsers || 0,
      icon: Users,
      change: `${((data?.data?.newUsersInLast30Days / (data?.data?.totalUsers || 1)) * 100).toFixed(1)}%`,
      trend: data?.data?.newUsersInLast30Days > 0 ? "up" : "down",
    },
    {
      title: "Total Agents",
      value:
        data?.data?.usersByRole?.find((r: any) => r._id === "AGENT")?.count ||
        0,
      icon: UserCog,
      change: "+2.8%",
      trend: "up",
    },
    {
      title: "Transactions",
      value: data?.data?.totalTransactions || 0,
      icon: ReceiptText,
      change: `${((data?.data?.totalTransactions / (data?.data?.totalUsers || 1)) * 10).toFixed(1)}%`,
      trend:
        data?.data?.totalTransactions > data?.data?.totalUsers ? "up" : "down",
    },
    {
      title: "Transaction Volume",
      value: `৳${data?.data?.transactionVolume || 0}`,
      icon: DollarSign,
      change: "-1.2%",
      trend: "down",
    },
    {
      title: "Total Wallets",
      value: data?.data?.totalWallets || 0,
      icon: Wallet,
      change: "+3.1%",
      trend: "up",
    },
    {
      title: "Blocked Wallets",
      value: data?.data?.blockedWallets || 0,
      icon: Lock,
      change: "+1.0%",
      trend: "up",
    },
    {
      title: "Unblocked Wallets",
      value: data?.data?.unblockedWallets || 0,
      icon: Unlock,
      change: "-0.8%",
      trend: "down",
    },
    {
      title: "Suspended Agents",
      value: data?.data?.suspendedAgents || 0,
      icon: UserX,
      change: "+0.5%",
      trend: "up",
    },
    {
      title: "Approved Agents",
      value: data?.data?.approvedAgents || 0,
      icon: UserCheck,
      change: "+4.2%",
      trend: "up",
    },
  ];

  return (
    <div className="p-6 space-y-8">
      {/* Page Title */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Admin Overview</h1>
        
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

   
    </div>
  );
}
