"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2, ArrowDownCircle } from "lucide-react";

type Txn = {
  id: number;
  amount: number;
  note: string;
  status: "Success" | "Failed";
  time: string;
};

export default function Withdraw() {
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState<Txn[]>([]);
  const [error, setError] = useState("");
  const [confirmOpen, setConfirmOpen] = useState(false);

  const parsedAmount = parseFloat(amount);

  const handleStart = () => {

    setError("");
    setConfirmOpen(true);
  };

  const confirmWithdraw = () => {
    setLoading(true);
    setTimeout(() => {
      const newTxn: Txn = {
        id: Date.now(),
        amount: parsedAmount,
        note: note || "Wallet withdrawal",
        status: "Success",
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setHistory([newTxn, ...history].slice(0, 5));
      setAmount("");
      setNote("");
      setConfirmOpen(false);
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="p-6 bg-gray-950 min-h-screen text-gray-100 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-lg"
      >
        <Card className="bg-gray-900/90 border border-gray-800 shadow-2xl rounded-2xl">
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
                className="bg-gray-950 border-gray-800 text-white focus-visible:ring-red-500"
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
                className="bg-gray-950 border-gray-800 text-white focus-visible:ring-red-500"
              />
            </div>

            {error && <p className="text-sm text-red-400">{error}</p>}

            {/* Withdraw Button */}
            <Button
              onClick={handleStart}
              disabled={loading}
              className="w-full bg-gradient-to-r from-red-600 to-red-800 text-white font-semibold py-2 rounded-lg hover:opacity-90 transition"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin mr-2" />
              ) : (
                "🚀 Withdraw Now"
              )}
            </Button>

            {/* History */}
            <div className="pt-4 border-t border-gray-800">
              <h3 className="text-sm font-semibold mb-3 text-gray-200">
                Recent Withdrawals
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <AnimatePresence>
                  {history.map((tx) => (
                    <motion.li
                      key={tx.id}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 30 }}
                      transition={{ duration: 0.3 }}
                      className="flex justify-between items-center bg-gray-800/50 px-3 py-2 rounded-lg border border-gray-700"
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
                    </motion.li>
                  ))}
                </AnimatePresence>
              </ul>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {confirmOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-900 border border-gray-700 rounded-xl p-6 w-full max-w-md text-center space-y-4"
            >
              <h2 className="text-xl font-bold text-red-400">Confirm Withdraw</h2>
              <p className="text-gray-300 text-sm">
                Are you sure you want to withdraw{" "}
                <span className="font-semibold text-white">৳ {parsedAmount}</span>?
              </p>
              <div className="flex justify-center gap-4">
                <Button
                  variant="outline"
                  onClick={() => setConfirmOpen(false)}
                  className="bg-gray-800 border-gray-600 text-gray-300"
                >
                  Cancel
                </Button>
                <Button
                  onClick={confirmWithdraw}
                  className="bg-red-600 hover:bg-red-700 text-white"
                >
                  Confirm
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
