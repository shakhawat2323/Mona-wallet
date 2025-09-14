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
import { CheckCircle2, UserPlus } from "lucide-react";

type Txn = {
  id: number;
  user: string;
  amount: number;
  note: string;
  status: "Success" | "Failed";
  time: string;
};

export default function AddMoney() {
  const [user, setUser] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [history, setHistory] = useState<Txn[]>([]);
  const [error, setError] = useState("");
  const [confirmOpen, setConfirmOpen] = useState(false);

  const parsedAmount = parseFloat(amount);

  const handleStart = () => {
    if (!user.trim()) {
      setError("⚠️ Please enter user phone/email!");
      return;
    }
    if (!parsedAmount || parsedAmount < 10) {
      setError("⚠️ Minimum amount is ৳10");
      return;
    }
    setError("");
    setConfirmOpen(true);
  };

  const confirmAdd = () => {
    const newTxn: Txn = {
      id: Date.now(),
      user,
      amount: parsedAmount,
      note: note || "Agent cash-in",
      status: "Success",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setHistory([newTxn, ...history].slice(0, 5));
    setUser("");
    setAmount("");
    setNote("");
    setConfirmOpen(false);
  };

  return (
    <div className="bg-gray-950 text-gray-100 flex flex-col min-h-[80vh]">
      <main className="flex-1 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-2xl"
        >
          <Card className="bg-gray-900/90 border border-gray-800 shadow-2xl rounded-2xl">
            <CardHeader className="border-b border-gray-800">
              <CardTitle className="text-2xl font-bold text-center text-green-400 flex items-center justify-center gap-2">
                <UserPlus className="w-6 h-6" />
                Add Money to User
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-6 pt-6">
              {/* User Input */}
              <motion.div whileHover={{ scale: 1.01 }} className="space-y-2">
                <label className="text-sm font-medium text-gray-300">
                  User Phone / Email
                </label>
                <Input
                  type="text"
                  placeholder="Enter user phone or email"
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                  className="bg-gray-950 border-gray-800 text-white focus-visible:ring-green-500"
                />
              </motion.div>

              {/* Amount Input */}
              <motion.div whileHover={{ scale: 1.01 }} className="space-y-2">
                <label className="text-sm font-medium text-gray-300">
                  Amount (৳)
                </label>
                <Input
                  type="number"
                  placeholder="Enter amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="bg-gray-950 border-gray-800 text-white focus-visible:ring-green-500"
                />
              </motion.div>

              {/* Note Input */}
              <motion.div whileHover={{ scale: 1.01 }} className="space-y-2">
                <label className="text-sm font-medium text-gray-300">
                  Note (optional)
                </label>
                <Input
                  type="text"
                  placeholder="Write a note..."
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="bg-gray-950 border-gray-800 text-white focus-visible:ring-green-500"
                />
              </motion.div>

              {error && <p className="text-sm text-red-400">{error}</p>}

              {/* Add Button */}
              <motion.div whileTap={{ scale: 0.97 }}>
                <Button
                  onClick={handleStart}
                  className="w-full bg-gradient-to-r from-green-600 to-green-800 text-white font-semibold hover:opacity-90 shadow-lg"
                >
                  🚀 Add Money
                </Button>
              </motion.div>

              {/* Recent Activity */}
              <div className="pt-6 border-t border-gray-800">
                <h3 className="text-sm font-semibold text-gray-300 mb-3">
                  Recent Additions
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
                          <div className="text-xs text-gray-500">{item.time}</div>
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
              <h2 className="text-xl font-bold text-green-400">
                Confirm Add Money
              </h2>
              <p className="text-gray-300 text-sm">
                Are you sure you want to add{" "}
                <span className="font-semibold text-white">৳ {parsedAmount}</span>{" "}
                to <span className="font-semibold text-white">{user}</span>?
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
                  onClick={confirmAdd}
                  className="bg-green-600 hover:bg-green-700 text-white"
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
