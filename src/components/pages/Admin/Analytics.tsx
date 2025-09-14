"use client";

import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  LineChart,
  Line,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

// Example Data
const clicksData = [
  { name: "Jan", value: 7 },
  { name: "Feb", value: 13 },
  { name: "Mar", value: 21 },
  { name: "Apr", value: 32 },
  { name: "May", value: 41 },
  { name: "Jun", value: 53 },
  { name: "Jul", value: 60 },
];

const viewsData = [
  { name: "Jan", value: 24 },
  { name: "Feb", value: 41 },
  { name: "Mar", value: 38 },
  { name: "Apr", value: 55 },
  { name: "May", value: 52 },
  { name: "Jun", value: 68 },
  { name: "Jul", value: 59 },
];

const accountsData = [
  { name: "Jan", value: 20000 },
  { name: "Feb", value: 24000 },
  { name: "Mar", value: 35000 },
  { name: "Apr", value: 50000 },
  { name: "May", value: 68000 },
  { name: "Jun", value: 66000 },
  { name: "Jul", value: 56000 },
];

const deviceData = [
  { name: "Mobile", value: 55, color: "#4ade80" },
  { name: "Desktop", value: 30, color: "#60a5fa" },
  { name: "Tablet", value: 15, color: "#f472b6" },
];

const orders = [
  {
    image: "/items/shoes.jpg",
    name: "Sports Shoes",
    amount: "$149",
    vendor: "Julia Sunota",
    status: "Completed",
    rating: 5,
  },
  {
    image: "/items/watch.jpg",
    name: "Golden Watch",
    amount: "$168",
    vendor: "Julia Sunota",
    status: "Completed",
    rating: 5,
  },
  {
    image: "/items/tshirt.jpg",
    name: "Men Polo Tshirt",
    amount: "$124",
    vendor: "Julia Sunota",
    status: "Pending",
    rating: 4,
  },
  {
    image: "/items/jeans.jpg",
    name: "Blue Jeans Casual",
    amount: "$289",
    vendor: "Julia Sunota",
    status: "Completed",
    rating: 3,
  },
  {
    image: "/items/shirt.jpg",
    name: "Fancy Shirts",
    amount: "$389",
    vendor: "Julia Sunota",
    status: "Canceled",
    rating: 2,
  },
];

function statusBadge(status: string) {
  if (status === "Completed")
    return <Badge className="bg-green-600/20 text-green-400">Completed</Badge>;
  if (status === "Pending")
    return <Badge className="bg-yellow-600/20 text-yellow-300">Pending</Badge>;
  if (status === "Canceled")
    return <Badge className="bg-red-600/20 text-red-400">Canceled</Badge>;
  return <Badge className="bg-blue-600/20 text-blue-300">{status}</Badge>;
}

export default function DashboardPage() {
  return (
    <div className="p-6 lg:p-10 bg-gradient-to-tr from-[#181C2F] via-[#232946] to-[#212133] min-h-screen text-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold">Welcome back, Jhon Anderson!</h1>
          <p className="text-slate-400">Here’s what’s happening today.</p>
        </div>
        <div className="flex gap-8">
          <div>
            <p className="text-lg font-semibold">$65.4K</p>
            <span className="text-slate-400 text-sm">Today’s Sales</span>
          </div>
          <div>
            <p className="text-lg font-semibold">78.4%</p>
            <span className="text-slate-400 text-sm">Growth Rate</span>
          </div>
        </div>
      </div>

      {/* Top Section */}
      <div className="grid lg:grid-cols-3 gap-6 mb-10">
        {/* Active Users */}
        <Card className="bg-[#181d2f] border-0">
          <CardHeader>
            <CardTitle className="text-white text-sm">Active Users</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">42.5K</p>
            <p className="text-slate-400 text-sm">24K users increased from last month</p>
          </CardContent>
        </Card>

        {/* Total Users */}
        <Card className="bg-[#181d2f] border-0">
          <CardHeader>
            <CardTitle className="text-white text-sm">Total Users</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">97.4K</p>
            <p className="text-green-400 text-sm">12.5% from last month</p>
          </CardContent>
        </Card>

        {/* Device Type */}
        <Card className="bg-[#181d2f] border-0">
          <CardHeader>
            <CardTitle className="text-white text-sm">Device Type</CardTitle>
          </CardHeader>
          <CardContent className="h-[160px] flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={deviceData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={60}
                  innerRadius={40}
                  label
                >
                  {deviceData.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Middle Section */}
      <div className="grid lg:grid-cols-2 gap-6 mb-10">
        {/* Clicks Chart */}
        <Card className="bg-[#181d2f] border-0">
          <CardHeader>
            <CardTitle className="text-white text-sm">Total Clicks</CardTitle>
          </CardHeader>
          <CardContent className="h-[150px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={clicksData}>
                <Bar dataKey="value" radius={6} fill="url(#barColor)" />
                <XAxis dataKey="name" hide />
                <YAxis hide />
                <Tooltip />
                <defs>
                  <linearGradient id="barColor" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="30%" stopColor="#ff48b4" />
                    <stop offset="100%" stopColor="#ff00ea" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Views Chart */}
        <Card className="bg-[#181d2f] border-0">
          <CardHeader>
            <CardTitle className="text-white text-sm">Total Views</CardTitle>
          </CardHeader>
          <CardContent className="h-[150px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={viewsData}>
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#66f4ff"
                  strokeWidth={3}
                  dot={{ r: 5, fill: "#ff48b4", stroke: "#fff", strokeWidth: 2 }}
                />
                <XAxis dataKey="name" hide />
                <YAxis hide />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Accounts (Area) */}
      <Card className="bg-[#181d2f] border-0 mb-10">
        <CardHeader>
          <CardTitle className="text-white text-sm">Total Accounts</CardTitle>
        </CardHeader>
        <CardContent className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={accountsData}>
              <defs>
                <linearGradient id="areaColor" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="10%" stopColor="#FFD600" stopOpacity={0.8} />
                  <stop offset="90%" stopColor="#fc8303" stopOpacity={0.2} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="value"
                stroke="#FFD600"
                fill="url(#areaColor)"
                strokeWidth={3}
              />
              <XAxis dataKey="name" hide />
              <YAxis hide />
              <Tooltip />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Recent Orders */}
      <Card className="bg-[#181d2f] border-0">
        <CardHeader className="flex flex-col sm:flex-row justify-between items-center">
          <CardTitle className="text-white text-lg">Recent Orders</CardTitle>
          <Input
            placeholder="Search orders..."
            className="w-64 bg-[#21294d] border-0 text-white placeholder:text-slate-400"
          />
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#21294d] text-slate-200 text-sm">
                  <th className="px-4 py-2 font-medium">Item</th>
                  <th className="px-4 py-2 font-medium">Amount</th>
                  <th className="px-4 py-2 font-medium">Vendor</th>
                  <th className="px-4 py-2 font-medium">Status</th>
                  <th className="px-4 py-2 font-medium">Rating</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((o, i) => (
                  <tr
                    key={i}
                    className="border-t border-[#232946] hover:bg-[#21294d]/60"
                  >
                    <td className="flex items-center gap-3 px-4 py-2">
                      <img
                        src={o.image}
                        alt={o.name}
                        className="h-8 w-8 rounded-full object-cover border border-[#232946]"
                      />
                      <span className="text-slate-200">{o.name}</span>
                    </td>
                    <td className="px-4 py-2 text-slate-300">{o.amount}</td>
                    <td className="px-4 py-2 text-slate-300">{o.vendor}</td>
                    <td className="px-4 py-2">{statusBadge(o.status)}</td>
                    <td className="px-4 py-2 flex items-center text-yellow-300">
                      {o.rating.toFixed(1)}
                      <Star
                        size={14}
                        className="ml-1 fill-yellow-300 text-yellow-300"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
