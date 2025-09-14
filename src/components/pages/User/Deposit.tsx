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
import { CheckCircle2 } from "lucide-react";

export default function Deposit() {
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [history, setHistory] = useState<
    { amount: string; note: string; status: string; id: number }[]
  >([

  ]);

  const handleDeposit = () => {
    if (!amount) return alert("⚠️ Please enter an amount!");
    const newTransaction = {
      id: Date.now(),
      amount,
      note: note || "No note",
      status: "Success",
    };
    setHistory([newTransaction, ...history].slice(0, 5));
    setAmount("");
    setNote("");
  };

  return (
    <div className=" bg-gray-950 text-gray-100 flex flex-col">


      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-2xl"
        >
          <Card className="w-full bg-gray-900/80 border border-gray-800 shadow-2xl rounded-2xl overflow-hidden">
            <CardHeader className="border-b border-gray-800">
              <CardTitle className="text-2xl font-bold text-center text-blue-400">
                💰 Deposit Money
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              {/* Amount Input */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="space-y-2"
              >
                <label className="text-sm font-medium text-gray-300">
                  Amount (৳)
                </label>
                <Input
                  type="number"
                  placeholder="Enter amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="bg-gray-950 border-gray-800 text-white focus-visible:ring-blue-500"
                />
              </motion.div>

              {/* Note Input */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="space-y-2"
              >
                <label className="text-sm font-medium text-gray-300">
                  Note (optional)
                </label>
                <Input
                  type="text"
                  placeholder="Write a note..."
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="bg-gray-950 border-gray-800 text-white focus-visible:ring-blue-500"
                />
              </motion.div>

              {/* Deposit Button */}
              <motion.div whileTap={{ scale: 0.97 }}>
                <Button
                  onClick={handleDeposit}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold hover:opacity-90 shadow-lg"
                >
                  🚀 Deposit Now
                </Button>
              </motion.div>

              {/* Recent Deposit History */}
              <div className="pt-6 border-t border-gray-800">
                <h3 className="text-sm font-semibold text-gray-300 mb-3">
                  Recent Deposits
                </h3>
                <ul className="space-y-2 text-sm">
                  <AnimatePresence>
                    {history.map((item) => (
                      <motion.li
                        key={item.id}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 30 }}
                        transition={{ duration: 0.3 }}
                        className="flex justify-between items-center bg-gray-800/50 px-3 py-2 rounded-lg border border-gray-700"
                      >
                        <div>
                          <span className="font-medium">৳ {item.amount}</span>{" "}
                          <span className="text-gray-400">- {item.note}</span>
                        </div>
                        <span className="flex items-center gap-1 text-green-400 font-medium">
                          <CheckCircle2 className="w-4 h-4" /> {item.status}
                        </span>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  );
}
