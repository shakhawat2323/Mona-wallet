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
import { Loader2, ArrowDownCircle } from "lucide-react";

import { toast } from "sonner";
import { useGetuserQuery, useWithdrawMutation } from "@/Redux/features/auth/user.api";

export default function Withdraw() {
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");

  // user info আনছি
  const { data } = useGetuserQuery(undefined);
  const user = data?.data?.user;

  const [withdraw, { isLoading }] =   useWithdrawMutation();

  const handleWithdraw = async () => {

    try {
      const res: any = await withdraw({
        email: user?.email,
        amount: Number(amount),
        note: note || "No note",
      }).unwrap();
      console.log(res)
      toast.success("Withdraw Successful ✅")
      setAmount("");
      setNote("");
    } catch (error: any) {
      console.error(error);

         toast.error("Withdraw Failed ❌")
    }
  };

  return (
    <div className="p-6 bg-gray-900 text-gray-100 flex items-center justify-center">
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


          {/* Withdraw Button */}
          <Button
            onClick={handleWithdraw}
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-red-600 to-red-800 text-white font-semibold py-2 rounded-lg hover:opacity-90 transition"
          >
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin mr-2" />
            ) : (
              "Withdraw Now"
            )}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
