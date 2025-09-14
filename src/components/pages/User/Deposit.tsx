

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Wallet, CreditCard, Banknote } from "lucide-react";

export default function Deposit() {
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [method, setMethod] = useState("wallet");

  const handleDeposit = () => {
    if (!amount) return alert("⚠️ Please enter an amount!");
    alert(`✅ Deposited ৳${amount} via ${method.toUpperCase()} 🎉`);
    setAmount("");
    setNote("");
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-gray-100 flex items-center justify-center">
      <Card className="w-full max-w-lg bg-gray-800 border border-gray-700 shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-blue-400">
            Deposit Money
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Amount Input */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Amount (৳)</label>
            <Input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="bg-gray-900 border-gray-700 text-white focus-visible:ring-blue-500"
            />
          </div>

          {/* Note Input */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Note (optional)</label>
            <Input
              type="text"
              placeholder="Write a note..."
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="bg-gray-900 border-gray-700 text-white focus-visible:ring-blue-500"
            />
          </div>

          {/* Payment Method */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Select Payment Method</label>
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => setMethod("wallet")}
                className={`flex flex-col items-center p-3 rounded-lg border transition ${
                  method === "wallet"
                    ? "bg-blue-600/30 border-blue-500"
                    : "bg-gray-900 border-gray-700"
                }`}
              >
                <Wallet className="w-5 h-5 mb-1 text-blue-400" />
                <span className="text-xs">Wallet</span>
              </button>
              <button
                onClick={() => setMethod("card")}
                className={`flex flex-col items-center p-3 rounded-lg border transition ${
                  method === "card"
                    ? "bg-green-600/30 border-green-500"
                    : "bg-gray-900 border-gray-700"
                }`}
              >
                <CreditCard className="w-5 h-5 mb-1 text-green-400" />
                <span className="text-xs">Card</span>
              </button>
              <button
                onClick={() => setMethod("bank")}
                className={`flex flex-col items-center p-3 rounded-lg border transition ${
                  method === "bank"
                    ? "bg-amber-600/30 border-amber-500"
                    : "bg-gray-900 border-gray-700"
                }`}
              >
                <Banknote className="w-5 h-5 mb-1 text-amber-400" />
                <span className="text-xs">Bank</span>
              </button>
            </div>
          </div>

          {/* Deposit Button */}
          <Button
            onClick={handleDeposit}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:opacity-90 transition"
          >
            Deposit Now
          </Button>

          {/* Recent Deposit History */}
          <div className="pt-4 border-t border-gray-700">
            <h3 className="text-sm font-semibold mb-2">Recent Deposits</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex justify-between">
                <span>৳ 2000 - Wallet</span>
                <span className="text-green-400">Success</span>
              </li>
              <li className="flex justify-between">
                <span>৳ 5000 - Card</span>
                <span className="text-green-400">Success</span>
              </li>
              <li className="flex justify-between">
                <span>৳ 1500 - Bank</span>
                <span className="text-green-400">Success</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
