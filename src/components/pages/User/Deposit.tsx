
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";



import { useAddmoneyMutation, useGetuserQuery } from "@/Redux/features/auth/user.api";
import { toast } from "sonner";

export default function Deposit() {
  const [amount, setAmount] = useState("");


  // redux থেকে user এর email নিয়ে আসবো

  const { data } = useGetuserQuery(undefined);
  
  const user = data?.data;
  console.log(user?.user?.email)

  const [addMoney, { isLoading }] = useAddmoneyMutation();

  const handleDeposit = async () => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const res: any = await addMoney({
        email: user?.user?.email, 
        amount: Number(amount),
      }).unwrap();
      setAmount("");
      console.log(res)
      toast("Deposit Successful ✅")
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error(error);
      toast( "Deposit Failed ❌")
    }
  };

  return (
    <div className="bg-gray-950 text-gray-100 flex flex-col">
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
              <motion.div whileHover={{ scale: 1.01 }} className="space-y-2">
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

       
              {/* Deposit Button */}
              <motion.div whileTap={{ scale: 0.97 }}>
                <Button
                  onClick={handleDeposit}
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold hover:opacity-90 shadow-lg"
                >
                  {isLoading ? "Processing..." : "🚀 Deposit Now"}
                </Button>
              </motion.div>

      
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  );
}
