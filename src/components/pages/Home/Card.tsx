import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { User, CreditCard, TrendingUp, Send } from "lucide-react";

const features = [
  {
    title: "Bank Account",
    description: "Connect and manage multiple bank accounts in one secure wallet.",
    icon: <User size={28} />,
    gradient: "from-purple-600 to-pink-500",
  },
  {
    title: "Smart Payments",
    description: "Pay bills, shop online, and make payments instantly with confidence.",
    icon: <CreditCard size={28} />,
    gradient: "from-pink-500 to-purple-700",
  },
  {
    title: "Invest & Grow",
    description: "Discover curated investment options to grow your savings safely.",
    icon: <TrendingUp size={28} />,
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    title: "Instant Transfers",
    description: "Send and receive money globally — fast, secure, and affordable.",
    icon: <Send size={28} />,
    gradient: "from-purple-500 to-indigo-600",
  },
];

export default function Cards() {
  return (
    <section
      className="
        bg-background text-foreground
        py-16 px-6 md:px-12 lg:px-20 
        grid lg:grid-cols-2 gap-12 items-center
      "
    >
      {/* Left Cards */}
      <div
        className="
          grid grid-cols-1 sm:grid-cols-2 
          gap-6 max-w-xl mx-auto lg:mx-0
        "
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={`relative w-full h-40 sm:h-44 rounded-2xl shadow-lg p-6 flex flex-col justify-center items-start bg-gradient-to-r ${feature.gradient} text-white cursor-pointer`}
            whileHover={{ scale: 1.05, rotateZ: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="mb-3"
            >
              {feature.icon}
            </motion.div>
            <h3 className="font-semibold text-base sm:text-lg">
              {feature.title}
            </h3>
            <p className="text-xs sm:text-sm opacity-90">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Right Content */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-lg mx-auto text-center lg:text-left"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
          Your Digital Wallet,{" "}
          <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Smarter & Faster
          </span>
        </h1>
        <p className="mt-5 text-sm sm:text-base text-muted-foreground">
          Experience seamless money management with a wallet designed for the
          future. From payments and transfers to savings and investments —
          everything is secure, reliable, and just a tap away.
        </p>
        <Button
          className="
            mt-6 px-6 sm:px-8 py-4 cursor-pointer sm:py-5 rounded-full
            bg-primary text-primary-foreground
            hover:bg-purple-700 transition
          "
        >
          Get Started
        </Button>
      </motion.div>
    </section>
  );
}
