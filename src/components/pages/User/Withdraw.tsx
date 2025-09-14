"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2, ArrowDownCircle } from "lucide-react";

export default function Withdraw() {
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState<
    { amount: string; note?: string; status: string; time: string }[]
  >([
    { amount: "3000", note: "Bank Transfer", status: "Success", time: "2h ago" },
    { amount: "1500", note: "Card", status: "Success", time: "1d ago" },
    { amount: "2000", note: "Wallet", status: "Success", time: "3d ago" },
  ]);

  const handleWithdraw = () => {
    if (!amount) {
      alert("⚠️ Please enter an amount!");
      return;
    }
    setLoading(true);

    setTimeout(() => {
      setHistory([
        {
          amount,
          note,
          status: "Success",
          time: "Just now",
        },
        ...history,
      ].slice(0, 5));
      setAmount("");
      setNote("");
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-gray-100 flex items-center justify-center">
      <Card className="w-full max-w-lg bg-gray-800 border border-gray-700 shadow-2xl rounded-2xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-red-400 flex items-center justify-center gap-2">
            <ArrowDownCircle className="w-7 h-7 text-red-500" />
            Withdraw Money
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
              className="bg-gray-900 border-gray-700 text-white focus-visible:ring-red-500"
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
              className="bg-gray-900 border-gray-700 text-white focus-visible:ring-red-500"
            />
          </div>

          {/* Withdraw Button */}
          <Button
            onClick={handleWithdraw}
            disabled={loading}
            className="w-full bg-gradient-to-r from-red-600 to-red-800 text-white font-semibold py-2 rounded-lg hover:opacity-90 transition"
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin mr-2" />
            ) : (
              "Withdraw Now"
            )}
          </Button>

          {/* Withdraw History */}
          <div className="pt-4 border-t border-gray-700">
            <h3 className="text-sm font-semibold mb-3 text-gray-200">
              Recent Withdrawals
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {history.map((tx, idx) => (
                <li
                  key={idx}
                  className="flex justify-between items-center bg-gray-900/50 px-3 py-2 rounded-lg border border-gray-700"
                >
                  <div>
                    <p className="font-medium">৳ {tx.amount}</p>
                    {tx.note && (
                      <p className="text-xs text-gray-400">{tx.note}</p>
                    )}
                  </div>
                  <div className="text-right">
                    <span
                      className={`text-xs px-2 py-1 rounded ${
                        tx.status === "Success"
                          ? "bg-green-600/20 text-green-400"
                          : "bg-red-600/20 text-red-400"
                      }`}
                    >
                      {tx.status}
                    </span>
                    <p className="text-[10px] text-gray-500">{tx.time}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
