/* eslint-disable @typescript-eslint/no-explicit-any */

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useGetagentQuery } from "@/Redux/features/auth/user.api";
import {
  Wallet,
  ArrowUpCircle,
  ArrowDownCircle,
  Activity,
} from "lucide-react";
import Loding from "./Loding";

export default function Overview() {
  const { data, isLoading } = useGetagentQuery(undefined);

 if(isLoading){
      <Loding/>
    }

  const user = data?.data;
  const wallet = user?.wallets?.[0] || {};
  const transactions = user?.transactions || [];
  const summary = user?.summary || {};
  console.log(user,"user")
  console.log(wallet,"wallet")
  console.log(transactions,"transactions")
  console.log(summary,"summary")

  return (
    <div className="p-6 space-y-10 bg-gray-900 text-gray-100">
    {/* ✅ User Profile Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-gray-800 rounded-2xl p-6 shadow-md gap-6">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16 ring-2 ring-primary ring-offset-2">
              <AvatarImage
                src={user?.agent?.picture || "https://i.pravatar.cc/150?img=12"}
                alt={user?.agent?.picture}
              />
            </Avatar>
            <div>
              <p className="text-sm text-gray-400">Welcome back</p>
              <h2 className="text-2xl font-bold capitalize">{user?.agent?.name}</h2>
              <p className="text-sm text-gray-400">{user?.agent?.email}</p>
            </div>
          </div>
  
          {/* Right: Info */}
          <div className="flex flex-row justify-center items-center gap-4">
            <div className="flex flex-col gap-3">
              <div className="p-3 bg-blue-600/20 rounded-lg text-center">
                <p className="text-gray-400">Role</p>
                <p className="font-semibold">{user?.agent?.role}</p>
              </div>
              <div
                className={`p-3 rounded-lg text-center ${
                  user?.agent?.status === "APPROVED"
                    ? "bg-green-600/20"
                    : "bg-red-600/20"
                }`}
              >
                <p className="text-gray-400">Status</p>
                <p
                  className={`font-semibold ${
                    user?.agent?.status === "APPROVED"
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {user?.agent?.status}
                </p>
              </div>
            </div>
  
            <div className="flex flex-col gap-4">
              <div
                className={`p-3 rounded-lg text-center ${
                  user?.agent?.isActive === "ACTIVE"
                    ? "bg-green-600/20"
                    : "bg-red-600/20"
                }`}
              >
                <p className="text-gray-400">Account</p>
                <p
                  className={`font-bold ${
                    user?.agent?.isActive === "ACTIVE"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {user?.agent?.isActive}
                </p>
              </div>
              <div className="p-3 bg-amber-600/20 rounded-lg text-center">
                <p className="text-gray-400">Joined</p>
                <p className="font-semibold">
                  {new Date(user?.agent?.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      {/* Top Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Cash In */}
        <div className="w-full bg-gradient-to-r from-green-600 to-green-800 rounded-2xl h-36 flex flex-col items-center justify-center text-white shadow-lg hover:scale-105 transition-transform duration-300">
          <ArrowDownCircle className="w-10 h-10 mb-2" />
          <span className="text-3xl font-bold">৳ {summary?.totalCashIn
 || 0}</span>
          <p className="font-medium text-lg">Total Cash-In</p>
        </div>

        {/* Cash Out */}
        <div className="w-full bg-gradient-to-r from-red-600 to-red-800 rounded-2xl h-36 flex flex-col items-center justify-center text-white shadow-lg hover:scale-105 transition-transform duration-300">
          <ArrowUpCircle className="w-10 h-10 mb-2" />
          <span className="text-3xl font-bold">৳ {summary?.totalCashOut || 0}</span>
          <p className="font-medium text-lg">Total Cash-Out</p>
        </div>

        {/* Transactions */}
        <div className="w-full bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl h-36 flex flex-col items-center justify-center text-white shadow-lg hover:scale-105 transition-transform duration-300">
          <Activity className="w-10 h-10 mb-2" />
          <span className="text-3xl font-bold">{summary?.totalTransactions || 0}</span>
          <p className="font-medium text-lg">Transactions</p>
        </div>

        {/* Balance */}
        <div className="w-full bg-gradient-to-r from-orange-600 to-orange-800 rounded-2xl h-36 flex flex-col items-center justify-center text-white shadow-lg hover:scale-105 transition-transform duration-300">
          <Wallet className="w-10 h-10 mb-2" />
          <span className="text-3xl font-bold">৳ {wallet?.balance || 0}</span>
          <p className="font-medium text-lg">Agent Balance</p>
        </div>
      </div>

      {/* Recent Activity */}
      <section className="bg-gray-800 rounded-2xl p-6 shadow-md">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        {/* <ul className="divide-y divide-gray-700 text-sm">
          {transactions.slice(0, 5).map((tx: any) => (
            <li key={tx._id} className="flex justify-between items-center py-3">
              <span className="font-medium">
                {tx.type === "DEPOSIT" && "Cash-In"}
                {tx.type === "WITHDRAW" && "Cash-Out"}
                {tx.type === "TRANSFER" && "Transfer"}
              </span>
              <span
                className={`font-semibold ${
                  tx.type === "DEPOSIT"
                    ? "text-green-400"
                    : tx.type === "WITHDRAW"
                    ? "text-red-400"
                    : "text-blue-400"
                }`}
              >
                {tx.type === "WITHDRAW" ? "-" : "+"}৳ {tx.amount}
              </span>
            </li>
          ))}
        </ul> */}
        <ul className="divide-y divide-gray-700 text-sm">
  {transactions.slice(0, 5).map((tx: any) => (
    <li key={tx._id} className="flex justify-between items-center py-3">
      <span className="font-medium">
        {tx.type === "CASH_IN" && "Cash-In"}
        {tx.type === "CASH_OUT" && "Cash-Out"}
        {tx.type === "TRANSFER" && "Transfer"}
      </span>
      <span
        className={`font-semibold ${
          tx.type === "CASH_IN"
            ? "text-green-400"
            : tx.type === "CASH_OUT"
            ? "text-red-400"
            : "text-blue-400"
        }`}
      >
        {tx.type === "CASH_OUT" ? "-" : "+"}৳ {tx.amount}
      </span>
    </li>
  ))}
</ul>

      </section>

      

      {/* Cash Flow Summary */}
      <section className="bg-gray-800 rounded-2xl p-6 shadow-md">
        <h2 className="text-xl font-semibold mb-4">Cash Flow Summary</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg bg-green-600/30 flex flex-col items-center">
            <p className="text-2xl font-bold text-green-400">
              ৳ {summary?.totalDeposit || 0}
            </p>
            <span className="text-gray-300">Total Deposit</span>
          </div>
          <div className="p-6 rounded-lg bg-red-600/30 flex flex-col items-center">
            <p className="text-2xl font-bold text-red-400">
              ৳ {summary?.totalWithdraw || 0}
            </p>
            <span className="text-gray-300">Total Withdraw</span>
          </div>
          <div className="p-6 rounded-lg bg-blue-600/30 flex flex-col items-center">
            <p className="text-2xl font-bold text-blue-400">
              ৳ {summary?.totalVolume || 0}
            </p>
            <span className="text-gray-300">Total Volume</span>
          </div>
        </div>
      </section>
    </div>
  );
}
