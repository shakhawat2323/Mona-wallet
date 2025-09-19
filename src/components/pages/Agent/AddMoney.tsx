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
import { Loader2, PlusCircle } from "lucide-react";
import { toast } from "sonner";
import { useAgentCashInMutation } from "@/Redux/features/auth/user.api";
import Loding from "./Loding";

export default function AgentCashIn() {
  const [userEmail, setUserEmail] = useState("");
  const [amount, setAmount] = useState("");

  const [agentCashIn, { isLoading }] = useAgentCashInMutation();

  const handleCashIn = async () => {
    if(isLoading){
      <Loding/>
    }
    if (!userEmail || !amount) {
      return toast.error("⚠️ User email and amount are required!");
    }

    try {
      const res: any = await agentCashIn({
        userEmail,
        amount: Number(amount),
      }).unwrap();

      console.log(res);
      toast.success("✅ Cash-in Successful!");
      setUserEmail("");
      setAmount("");
    } catch (error: any) {
      console.error(error);
      toast.error(error?.data?.message || "❌ Cash-in Failed!");
    }
  };

  return (
    <div className="p-6 bg-gray-900 text-gray-100 flex items-center justify-center">
      <Card className="w-full max-w-lg bg-gray-800 border border-gray-700 shadow-2xl rounded-2xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-green-400 flex items-center justify-center gap-2">
            <PlusCircle className="w-7 h-7 text-green-500" />
            Agent Cash-In
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* User Email */}
          <div className="space-y-2">
            <label className="text-sm font-medium">User Email</label>
            <Input
              type="email"
              placeholder="Enter user email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              className="bg-gray-900 border-gray-700 text-white focus-visible:ring-green-500"
            />
          </div>

          {/* Amount */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Amount (৳)</label>
            <Input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="bg-gray-900 border-gray-700 text-white focus-visible:ring-green-500"
            />
          </div>

          {/* Cash-In Button */}
          <Button
            onClick={handleCashIn}
            disabled={isLoading}
            className="w-full bg-gradient-to-r cursor-pointer from-green-600 to-green-800 text-white font-semibold py-2 rounded-lg hover:opacity-90 transition"
          >
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin mr-2 cursor-pointer" />
            ) : (
              "Cash In"
            )}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
