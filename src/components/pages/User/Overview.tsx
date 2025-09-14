
import {
  Wallet,
  Send,
  Activity,
  PlusCircle,
  ArrowDownCircle,
  ArrowUpCircle,
} from "lucide-react";

export default function Overview() {
  return (
    <div className="p-6 space-y-10 bg-gray-900 text-gray-100 min-h-screen">
      {/* Top Overview Cards */}
 
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Actions Card */}
        <div className="w-full bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl h-36 flex flex-col items-center justify-center text-white shadow-lg hover:scale-105 transition-transform duration-300">
          <Activity className="w-10 h-10 mb-2" />
          <span className="text-3xl font-bold">120</span>
          <p className="font-medium text-lg">Actions</p>
        </div>

        {/* Transactions Card */}
        <div className="w-full bg-gradient-to-r from-green-600 to-green-800 rounded-2xl h-36 flex flex-col items-center justify-center text-white shadow-lg hover:scale-105 transition-transform duration-300">
          <Send className="w-10 h-10 mb-2" />
          <span className="text-3xl font-bold">95</span>
          <p className="font-medium text-lg">Transactions</p>
        </div>

        {/* Balance Card */}
        <div className="w-full bg-gradient-to-r from-orange-600 to-orange-800 rounded-2xl h-36 flex flex-col items-center justify-center text-white shadow-lg hover:scale-105 transition-transform duration-300">
          <Wallet className="w-10 h-10 mb-2" />
          <span className="text-3xl font-bold">৳ 12,540</span>
          <p className="font-medium text-lg">Balance</p>
        </div>
      </div>

      {/* Recent Transactions */}
      <section className="bg-gray-800 rounded-2xl p-6 shadow-md">
        <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
        <ul className="divide-y divide-gray-700 text-sm">
          <li className="flex justify-between py-3">
            <span>Amazon Purchase</span>
            <span className="text-red-400">-৳ 500</span>
          </li>
          <li className="flex justify-between py-3">
            <span>Freelance Payment</span>
            <span className="text-green-400">+৳ 2000</span>
          </li>
          <li className="flex justify-between py-3">
            <span>Mobile Recharge</span>
            <span className="text-red-400">-৳ 200</span>
          </li>
        </ul>
      </section>

      {/* Quick Actions */}
      <section className="bg-gray-800 rounded-2xl p-6 shadow-md">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          <button className="flex flex-col items-center p-4 rounded-lg bg-blue-600/30 hover:bg-blue-600/50 transition">
            <PlusCircle className="w-6 h-6 mb-2 text-blue-400" />
            <span className="text-sm">Add Funds</span>
          </button>
          <button className="flex flex-col items-center p-4 rounded-lg bg-green-600/30 hover:bg-green-600/50 transition">
            <ArrowUpCircle className="w-6 h-6 mb-2 text-green-400" />
            <span className="text-sm">Send Money</span>
          </button>
          <button className="flex flex-col items-center p-4 rounded-lg bg-amber-600/30 hover:bg-amber-600/50 transition">
            <ArrowDownCircle className="w-6 h-6 mb-2 text-amber-400" />
            <span className="text-sm">Request Money</span>
          </button>
        </div>
      </section>

      {/* Spending Overview */}
      <section className="bg-gray-800 rounded-2xl p-6 shadow-md">
        <h2 className="text-xl font-semibold mb-4">Spending Overview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 bg-blue-600/30 rounded-lg flex flex-col items-center">
            <p className="text-lg font-bold">৳ 4,200</p>
            <span className="text-sm text-gray-300">This Week</span>
          </div>
          <div className="p-4 bg-green-600/30 rounded-lg flex flex-col items-center">
            <p className="text-lg font-bold">৳ 12,500</p>
            <span className="text-sm text-gray-300">This Month</span>
          </div>
          <div className="p-4 bg-purple-600/30 rounded-lg flex flex-col items-center">
            <p className="text-lg font-bold">৳ 1,45,000</p>
            <span className="text-sm text-gray-300">This Year</span>
          </div>
        </div>
      </section>
    </div>
  );
}
