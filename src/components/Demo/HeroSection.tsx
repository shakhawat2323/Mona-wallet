import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Wallet, ShieldCheck, Smartphone } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-100 via-white to-indigo-50 px-6">
      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* 👉 Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
            Manage Your <span className="text-indigo-600">Digital Wallet</span>{" "}
            Seamlessly
          </h1>
          <p className="text-lg text-gray-600">
            Fast, secure and easy way to handle your money. Send, receive and
            manage funds anywhere, anytime with confidence.
          </p>

          <div className="flex gap-4">
            <Button size="lg" className="rounded-2xl px-6">
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-2xl px-6 border-indigo-600 text-indigo-600"
            >
              Learn More
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-4 pt-6">
            <div className="flex flex-col items-center text-center">
              <ShieldCheck className="h-8 w-8 text-indigo-600" />
              <p className="text-sm mt-2">Secure</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Wallet className="h-8 w-8 text-indigo-600" />
              <p className="text-sm mt-2">Instant Wallets</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Smartphone className="h-8 w-8 text-indigo-600" />
              <p className="text-sm mt-2">Mobile Friendly</p>
            </div>
          </div>
        </motion.div>

        {/* 👉 Right Side Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <Card className="shadow-2xl rounded-2xl">
            <CardContent className="p-8">
              <img
                src="https://illustrations.popsy.co/gray/digital-wallet.svg"
                alt="Digital Wallet"
                className="w-full h-auto"
              />
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
