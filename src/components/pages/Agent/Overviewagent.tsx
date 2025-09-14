"use client";

import {
  Wallet,
  ArrowUpCircle,
  ArrowDownCircle,
  Activity,
} from "lucide-react";

export default function Overview() {
  return (
    <div className="p-6 space-y-10 bg-gray-900 text-gray-100 min-h-screen">
      {/* Top Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Cash In */}
        <div className="w-full bg-gradient-to-r from-green-600 to-green-800 rounded-2xl h-36 flex flex-col items-center justify-center text-white shadow-lg hover:scale-105 transition-transform duration-300">
          <ArrowDownCircle className="w-10 h-10 mb-2" />
          <span className="text-3xl font-bold">৳ 85,400</span>
          <p className="font-medium text-lg">Total Cash-In</p>
        </div>

        {/* Cash Out */}
        <div className="w-full bg-gradient-to-r from-red-600 to-red-800 rounded-2xl h-36 flex flex-col items-center justify-center text-white shadow-lg hover:scale-105 transition-transform duration-300">
          <ArrowUpCircle className="w-10 h-10 mb-2" />
          <span className="text-3xl font-bold">৳ 62,300</span>
          <p className="font-medium text-lg">Total Cash-Out</p>
        </div>

        {/* Transactions */}
        <div className="w-full bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl h-36 flex flex-col items-center justify-center text-white shadow-lg hover:scale-105 transition-transform duration-300">
          <Activity className="w-10 h-10 mb-2" />
          <span className="text-3xl font-bold">245</span>
          <p className="font-medium text-lg">Transactions</p>
        </div>

        {/* Balance */}
        <div className="w-full bg-gradient-to-r from-orange-600 to-orange-800 rounded-2xl h-36 flex flex-col items-center justify-center text-white shadow-lg hover:scale-105 transition-transform duration-300">
          <Wallet className="w-10 h-10 mb-2" />
          <span className="text-3xl font-bold">৳ 1,25,540</span>
          <p className="font-medium text-lg">Agent Balance</p>
        </div>
      </div>

      {/* Recent Activity */}
      <section className="bg-gray-800 rounded-2xl p-6 shadow-md">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <ul className="divide-y divide-gray-700 text-sm">
          <li className="flex justify-between items-center py-3">
            <span className="font-medium">Cash-In from Rahim</span>
            <span className="text-green-400 font-semibold">+৳ 5,000</span>
          </li>
          <li className="flex justify-between items-center py-3">
            <span className="font-medium">Cash-Out to Karim</span>
            <span className="text-red-400 font-semibold">-৳ 3,200</span>
          </li>
          <li className="flex justify-between items-center py-3">
            <span className="font-medium">Cash-In from Jamil</span>
            <span className="text-green-400 font-semibold">+৳ 7,800</span>
          </li>
          <li className="flex justify-between items-center py-3">
            <span className="font-medium">Cash-Out to Akash</span>
            <span className="text-red-400 font-semibold">-৳ 2,000</span>
          </li>
        </ul>
      </section>

      {/* Cash Flow Summary */}
      <section className="bg-gray-800 rounded-2xl p-6 shadow-md">
        <h2 className="text-xl font-semibold mb-4">Cash Flow Summary</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg bg-green-600/30 flex flex-col items-center">
            <p className="text-2xl font-bold text-green-400">৳ 25,000</p>
            <span className="text-gray-300">This Week (In)</span>
          </div>
          <div className="p-6 rounded-lg bg-red-600/30 flex flex-col items-center">
            <p className="text-2xl font-bold text-red-400">৳ 18,200</p>
            <span className="text-gray-300">This Week (Out)</span>
          </div>
          <div className="p-6 rounded-lg bg-blue-600/30 flex flex-col items-center">
            <p className="text-2xl font-bold text-blue-400">৳ 6,800</p>
            <span className="text-gray-300">Net Balance</span>
          </div>
        </div>
      </section>
    </div>
  );
}
