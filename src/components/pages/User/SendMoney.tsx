"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { User, Mail, Send } from "lucide-react";

export default function SendMoney() {
  const [receiver, setReceiver] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");

  const handleSend = () => {
    if (!receiver || !amount) {
      return alert("⚠️ Please enter receiver name and amount!");
    }
    alert(`✅ Sent ৳${amount} to ${receiver} (${email || "No email"}) 🎉`);
    setReceiver("");
    setEmail("");
    setAmount("");
    setNote("");
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-gray-100 flex items-center justify-center">
      <Card className="w-full max-w-lg bg-gray-800 border border-gray-700 shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-purple-400">
            Send Money
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Receiver Name */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Receiver Name</label>
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-purple-400" />
              <Input
                type="text"
                placeholder="Enter receiver's name"
                value={receiver}
                onChange={(e) => setReceiver(e.target.value)}
                className="bg-gray-900 border-gray-700 text-white focus-visible:ring-purple-500"
              />
            </div>
          </div>

          {/* Receiver Email */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Receiver Email (optional)</label>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-purple-400" />
              <Input
                type="email"
                placeholder="Enter receiver's email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-900 border-gray-700 text-white focus-visible:ring-purple-500"
              />
            </div>
          </div>

          {/* Amount */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Amount (৳)</label>
            <Input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="bg-gray-900 border-gray-700 text-white focus-visible:ring-purple-500"
            />
          </div>

          {/* Note */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Note (optional)</label>
            <Input
              type="text"
              placeholder="Write a note..."
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="bg-gray-900 border-gray-700 text-white focus-visible:ring-purple-500"
            />
          </div>

          {/* Send Button */}
          <Button
            onClick={handleSend}
            className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white hover:opacity-90 transition flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" /> Send Money
          </Button>

          {/* Recent Transactions */}
          <div className="pt-4 border-t border-gray-700">
            <h3 className="text-sm font-semibold mb-2">Recent Transfers</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex justify-between">
                <span>৳ 1200 → Rahim</span>
                <span className="text-green-400">Success</span>
              </li>
              <li className="flex justify-between">
                <span>৳ 800 → Karim</span>
                <span className="text-green-400">Success</span>
              </li>
              <li className="flex justify-between">
                <span>৳ 500 → Sakib</span>
                <span className="text-green-400">Success</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
