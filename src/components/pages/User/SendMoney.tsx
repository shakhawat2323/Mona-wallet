/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { Loader2, Send } from "lucide-react";
import { toast } from "sonner";

import { useSendMoneyMutation } from "@/Redux/features/auth/user.api";

export default function SendMoney() {
  const [receiverEmail, setReceiverEmail] = useState("");
  const [amount, setAmount] = useState("");

  const [sendMoney, { isLoading }] = useSendMoneyMutation();

  const handleSend = async () => {
    if (!receiverEmail || !amount) {
      return toast.error("⚠️ Receiver email and amount are required!");
    }

    try {
      const res: any = await sendMoney({
        receiverEmail,
        amount: Number(amount),
      }).unwrap();
      console.log(res);

      toast.success("Money Sent Successfully ✅");
      setReceiverEmail("");
      setAmount("");
    } catch (error: any) {
      console.error(error);
      toast.error(error?.data?.message || "Failed to Send Money ❌");
    }
  };

  return (
    <div className="p-6 bg-gray-900 text-gray-100 flex items-center justify-center">
      <Card className="w-full max-w-lg bg-gray-800 border border-gray-700 shadow-2xl rounded-2xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-purple-400 flex items-center justify-center gap-2">
            <Send className="w-7 h-7 text-purple-500" />
            Send Money
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Receiver Email */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Receiver Email</label>
            <Input
              type="email"
              placeholder="Enter receiver's email"
              value={receiverEmail}
              onChange={(e) => setReceiverEmail(e.target.value)}
              className="bg-gray-900 border-gray-700 text-white focus-visible:ring-purple-500"
            />
          </div>

          {/* Amount Input */}
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

          {/* Send Button */}
          <Button
            onClick={handleSend}
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold py-2 rounded-lg hover:opacity-90 transition"
          >
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin mr-2" />
            ) : (
              "Send Money"
            )}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
