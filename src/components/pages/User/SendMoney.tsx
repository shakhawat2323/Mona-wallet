"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  User,
  Mail,
  Send,
  Loader2,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function SendMoney() {
  const [receiver, setReceiver] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [history, setHistory] = useState<
    { receiver: string; email: string; amount: string; note: string; status: string }[]
  >([]);
  const [loading, setLoading] = useState(false);

  const handleSend = () => {
    if (!receiver || !amount) {
      return alert("⚠️ Please enter receiver name and amount!");
    }
    setLoading(true);

    setTimeout(() => {
      setHistory(
        [
          {
            receiver,
            email,
            amount,
            note,
            status: "Success",
          },
          ...history,
        ].slice(0, 5)
      );

      setReceiver("");
      setEmail("");
      setAmount("");
      setNote("");
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-gray-100 flex items-center justify-center">
      <Card className="w-full max-w-4xl bg-gray-800 border border-gray-700 shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-purple-400">
            Send Money
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Form */}
          <div className="space-y-6">
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
              <label className="text-sm font-medium">
                Receiver Email (optional)
              </label>
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
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white hover:opacity-90 transition flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" /> Send Money
                </>
              )}
            </Button>
          </div>

          {/* Recent Transfers Table */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Recent Transfers</h3>
            {history.length === 0 ? (
              <p className="text-gray-400 text-sm">No transfers yet.</p>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow className="border-gray-700">
                    <TableHead className="text-gray-300">Receiver</TableHead>
                    <TableHead className="text-gray-300">Email</TableHead>
                    <TableHead className="text-gray-300">Amount</TableHead>
                    <TableHead className="text-gray-300">Note</TableHead>
                    <TableHead className="text-gray-300 text-right">
                      Status
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {history.map((tx, idx) => (
                    <TableRow key={idx} className="border-gray-700">
                      <TableCell>{tx.receiver}</TableCell>
                      <TableCell>{tx.email || "-"}</TableCell>
                      <TableCell>৳ {tx.amount}</TableCell>
                      <TableCell className="text-gray-400 italic">
                        {tx.note || "-"}
                      </TableCell>
                      <TableCell className="text-green-400 text-right">
                        {tx.status}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
