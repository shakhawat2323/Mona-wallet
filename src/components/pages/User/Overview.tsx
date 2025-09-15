/* eslint-disable @typescript-eslint/no-explicit-any */

import { useGetuserQuery } from "@/Redux/features/auth/user.api";
import {
  Wallet,
  Send,
  Activity,

} from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default function Overview() {
  const { data } = useGetuserQuery(undefined);
  const user = data?.data;

  const wallet = user?.wallets?.[0];
  const transactions = user?.transactions || [];
  const summary = user?.summary || {};

  return (
    <div className="space-y-10 bg-gray-900 text-gray-100 min-h-screen">
      {/* ✅ User Profile Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-gray-800 rounded-2xl p-6 shadow-md gap-6">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16 ring-2 ring-primary ring-offset-2">
            <AvatarImage
              src={user?.user?.picture || "https://i.pravatar.cc/150?img=12"}
              alt={user?.user?.picture}
            />
          </Avatar>
          <div>
            <p className="text-sm text-gray-400">Welcome back</p>
            <h2 className="text-2xl font-bold capitalize">{user?.user?.name}</h2>
            <p className="text-sm text-gray-400">{user?.user?.email}</p>
          </div>
        </div>

        {/* Right: Info */}
        <div className="flex flex-row justify-center items-center gap-4">
          <div className="flex flex-col gap-3">
            <div className="p-3 bg-blue-600/20 rounded-lg text-center">
              <p className="text-gray-400">Role</p>
              <p className="font-semibold">{user?.user?.role}</p>
            </div>
            <div
              className={`p-3 rounded-lg text-center ${
                user?.user?.status === "APPROVED"
                  ? "bg-green-600/20"
                  : "bg-red-600/20"
              }`}
            >
              <p className="text-gray-400">Status</p>
              <p
                className={`font-semibold ${
                  user?.user?.status === "APPROVED"
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {user?.user?.status}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div
              className={`p-3 rounded-lg text-center ${
                user?.user?.isActive === "ACTIVE"
                  ? "bg-green-600/20"
                  : "bg-red-600/20"
              }`}
            >
              <p className="text-gray-400">Account</p>
              <p
                className={`font-bold ${
                  user?.user?.isActive === "ACTIVE"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {user?.user?.isActive}
              </p>
            </div>
            <div className="p-3 bg-amber-600/20 rounded-lg text-center">
              <p className="text-gray-400">Joined</p>
              <p className="font-semibold">
                {new Date(user?.user?.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Top Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="w-full bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl h-36 flex flex-col items-center justify-center text-white shadow-lg hover:scale-105 transition-transform duration-300">
          <Activity className="w-10 h-10 mb-2" />
          <span className="text-3xl font-bold">{summary.totalVolume || 0}</span>
          <p className="font-medium text-lg">Total Volume</p>
        </div>

        <div className="w-full bg-gradient-to-r from-green-600 to-green-800 rounded-2xl h-36 flex flex-col items-center justify-center text-white shadow-lg hover:scale-105 transition-transform duration-300">
          <Send className="w-10 h-10 mb-2" />
          <span className="text-3xl font-bold">
            {summary.totalTransactions || 0}
          </span>
          <p className="font-medium text-lg">Transactions</p>
        </div>

        <div className="w-full bg-gradient-to-r from-orange-600 to-orange-800 rounded-2xl h-36 flex flex-col items-center justify-center text-white shadow-lg hover:scale-105 transition-transform duration-300">
          <Wallet className="w-10 h-10 mb-2" />
          <span className="text-3xl font-bold">৳ {wallet?.balance ?? 0}</span>
          <p className="font-medium text-lg">Balance</p>
        </div>
      </div>

      {/* ✅ Recent Transactions */}
      <section className="bg-gray-800 rounded-2xl p-6 shadow-md">
        <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
        <ul className="divide-y divide-gray-700 text-sm">
        
          {transactions.slice(0, 5).map((tx: any) => (
            <li key={tx._id} className="flex justify-between py-3">
              <span>
                {tx.type}{" "}
                <span className="text-xs text-gray-400">
                  ({new Date(tx.createdAt).toLocaleDateString()})
                </span>
              </span>
              <span
                className={
                  tx.type === "DEPOSIT"
                    ? "text-green-400"
                    : tx.type === "WITHDRAW"
                    ? "text-red-400"
                    : "text-yellow-400"
                }
              >
                {tx.type === "DEPOSIT" ? "+" : "-"}৳ {tx.amount}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* ✅ Spending Overview */}
      <section className="bg-gray-800 rounded-2xl p-6 shadow-md">
        <h2 className="text-xl font-semibold mb-4">Spending Overview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 bg-blue-600/30 rounded-lg flex flex-col items-center">
            <p className="text-lg font-bold">৳ {summary.totalDeposit || 0}</p>
            <span className="text-sm text-gray-300">Total Deposit</span>
          </div>
          <div className="p-4 bg-green-600/30 rounded-lg flex flex-col items-center">
            <p className="text-lg font-bold">৳ {summary.totalWithdraw || 0}</p>
            <span className="text-sm text-gray-300">Total Withdraw</span>
          </div>
          <div className="p-4 bg-purple-600/30 rounded-lg flex flex-col items-center">
            <p className="text-lg font-bold">৳ {summary.totalTransfer || 0}</p>
            <span className="text-sm text-gray-300">Total Transfer</span>
          </div>
        </div>
      </section>
    </div>
  );
}
