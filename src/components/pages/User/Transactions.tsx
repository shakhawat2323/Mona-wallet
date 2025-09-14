"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

export default function Transactions() {
  const [transactions] = useState([
    { id: 1, title: "Amazon Purchase", amount: -500, status: "Failed" },
    { id: 2, title: "Freelance Payment", amount: 2000, status: "Success" },
    { id: 3, title: "Mobile Recharge", amount: -200, status: "Success" },
    { id: 4, title: "Deposit", amount: 5000, status: "Success" },
    { id: 5, title: "Withdraw", amount: -1500, status: "Pending" },
  ]);

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-gray-100 flex justify-center">
      <Card className="w-full max-w-3xl bg-gray-800 border border-gray-700 shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-yellow-400">
            Transactions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <ul className="divide-y divide-gray-700">
            {transactions.map((tx) => (
              <li
                key={tx.id}
                className="flex justify-between items-center py-3 px-2 rounded-lg hover:bg-gray-700 transition"
              >
                <div className="flex flex-col">
                  <span className="font-medium">{tx.title}</span>
                  <span className="text-sm text-gray-400">
                    Transaction ID: #{tx.id}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span
                    className={`font-bold ${
                      tx.amount > 0 ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {tx.amount > 0 ? `+৳${tx.amount}` : `-৳${Math.abs(tx.amount)}`}
                  </span>
                  <span
                    className={`text-sm font-medium px-2 py-1 rounded-full ${
                      tx.status === "Success"
                        ? "bg-green-500/30 text-green-400"
                        : tx.status === "Failed"
                        ? "bg-red-500/30 text-red-400"
                        : "bg-yellow-500/30 text-yellow-400"
                    }`}
                  >
                    {tx.status}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
