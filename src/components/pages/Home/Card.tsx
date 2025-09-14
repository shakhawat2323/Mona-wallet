import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { User, CreditCard, TrendingUp, Send } from "lucide-react";

const features = [
  {
    title: "Bank Account",
    description: "Manage and link your bank accounts easily.",
    icon: <User size={28} />,
    gradient: "from-purple-600 to-pink-500",
  },
  {
    title: "Easy Payment",
    description: "Fast and secure payment solutions.",
    icon: <CreditCard size={28} />,
    gradient: "from-pink-500 to-purple-600",
  },
  {
    title: "Investments",
    description: "Grow your money with smart investments.",
    icon: <TrendingUp size={28} />,
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    title: "Funds Transfer",
    description: "Instant and low-cost money transfers.",
    icon: <Send size={28} />,
    gradient: "from-indigo-500 to-pink-500",
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-[#0B0B16]  text-white py-20 px-6 md:px-20 grid md:grid-cols-2 gap-10 items-center">
      {/* Left Cards */}
      <div className="grid grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={`relative w-full h-40 rounded-xl shadow-lg p-5 flex flex-col justify-center items-start bg-gradient-to-r ${feature.gradient} text-white dark:text-white cursor-pointer`}
            whileHover={{ scale: 1.08, rotateZ: 1 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="mb-2"
            >
              {feature.icon}
            </motion.div>
            <h3 className="font-bold text-lg">{feature.title}</h3>
            <p className="text-sm opacity-80">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Right Content */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-lg"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Your Money, Your Way,{" "}
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Our Guarantee
          </span>
        </h1>
        <p className="mt-5 text-gray-400 dark:text-gray-600">
          Experience the future of finance with our all-in-one solution.
          Secure, fast, and built for your needs. From payments to transfers,
          we’ve got you covered.
        </p>
        <Button className="mt-5 px-6 py-5 rounded-full dark:text-white bg-transparent border border-purple-500 hover:bg-purple-600 hover:border-purple-600 transition">
          Get Started
        </Button>
      </motion.div>
    </section>
  );
}
