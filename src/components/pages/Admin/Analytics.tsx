
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {

  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
} from "recharts";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { useGetUserStatsQuery } from "@/Redux/features/auth/admin.api";
import Loding from "../Agent/Loding";

const COLORS = ["#4ade80", "#f87171", "#60a5fa", "#fbbf24", "#a78bfa", "#34d399"];

export default function DashboardCharts() {
  const { data, isLoading } = useGetUserStatsQuery(undefined);
 if(isLoading){
      <Loding/>
    }
  const stats = data?.data || {};

  const donutData = [
    { name: "Approved Agents", value: stats.approvedAgents },
    { name: "Suspended Agents", value: stats.suspendedAgents },
    { name: "Blocked Wallets", value: stats.blockedWallets },
    { name: "Unblocked Wallets", value: stats.unblockedWallets },
    { name: "Total Wallets", value: stats.totalWallets },
    { name: "Transactions", value: stats.totalTransactions },
    { name: "Total Agents", value: stats.usersByRole?.find((r:any) => r._id === "AGENT")?.count || 0 },
  ];


  const roleData = stats.usersByRole?.map((r:any) => ({
    name: r._id,
    value: r.count,
  })) || [];

  const volumeData = [
    { month: "Jan", value: stats.transactionVolume * 0.2 },
    { month: "Feb", value: stats.transactionVolume * 0.3 },
    { month: "Mar", value: stats.transactionVolume * 0.4 },
    { month: "Apr", value: stats.transactionVolume * 0.5 },
    { month: "May", value: stats.transactionVolume * 0.6 },
    { month: "Jun", value: stats.transactionVolume * 0.7 },
    { month: "Jul", value: stats.transactionVolume },
  ];

  return (
    <div className="grid lg:grid-cols-2 gap-6 p-6 bg-gradient-to-tr from-[#0f172a] via-[#1e1b4b] to-[#312e81] min-h-screen text-white">
      
<Card className="bg-[#181d2f] border-0">
  <CardHeader>
    <CardTitle className="text-white text-sm">Active vs Inactive Users</CardTitle>
  </CardHeader>
  <CardContent className="h-[300px] flex items-center justify-center">
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <defs>
          {/* Gradient for Active (Blue → Teal) */}
          <linearGradient id="activePieGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="10%" stopColor="#3b82f6" stopOpacity={0.9} />
            <stop offset="90%" stopColor="#06b6d4" stopOpacity={0.9} />
          </linearGradient>
          {/* Gradient for Inactive (Orange → Amber) */}
          <linearGradient id="inactivePieGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="10%" stopColor="#f59e0b" stopOpacity={0.9} />
            <stop offset="90%" stopColor="#d97706" stopOpacity={0.9} />
          </linearGradient>
        </defs>

        <Pie
          dataKey="value"
          data={[
            { name: "Active Users", value: stats.totalActiveUsers },
            { name: "Inactive Users", value: stats.totalUsers - stats.totalActiveUsers },
          ]}
          cx="50%"
          cy="50%"
          innerRadius="60%"
          outerRadius="90%"
          paddingAngle={5}
        >
          <Cell fill="url(#activePieGradient)" />
          <Cell fill="url(#inactivePieGradient)" />
        </Pie>

        <Tooltip
          contentStyle={{
            backgroundColor: "#1f2937",
            border: "none",
            borderRadius: "8px",
            color: "#fff",
          }}
        />
        <Legend
          iconSize={12}
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
          wrapperStyle={{ color: "#cbd5e1" }}
        />
      </PieChart>
    </ResponsiveContainer>
  </CardContent>
</Card>


      {/* ✅ Donut Chart */}
      <Card className="bg-[#181d2f] border-0">
        <CardHeader>
          <CardTitle>System Overview</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px] flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={donutData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={4}
              >
                {donutData.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* ✅ Pie Chart (Roles) */}
      <Card className="bg-[#181d2f] border-0">
        <CardHeader>
          <CardTitle>User Roles</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px] flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={roleData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {roleData.map((_:any, index:any) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* ✅ Line Chart */}
      <Card className="bg-[#181d2f] border-0">
        <CardHeader>
          <CardTitle>Transaction Volume</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={volumeData}>
              <XAxis dataKey="month" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#4ade80" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
