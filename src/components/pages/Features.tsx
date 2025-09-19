// pages/FeaturesPage.tsx

"use client";

import { motion } from "framer-motion";
import { Bolt, ShieldCheck, BarChart3, Gift } from "lucide-react";
import Phone from "../../assets/images/Phone.webp";
// import Cards from "../../assets/images/Hero.webp";
import Security from "../../assets/images/Security.png";
import { Link } from "react-router";

const features = [
  {
    title: "Instant Top-up",
    desc: "Recharge your wallet instantly via agents, bank transfer, or cards — no waiting, no delays.",
    icon: <Bolt className="w-6 h-6" />,
  },
  {
    title: "Secure by Design",
    desc: "End-to-end encryption, 2FA, and continuous monitoring keep your money and data protected.",
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    title: "Smart Insights",
    desc: "Visualize spending with expense breakdowns, monthly trends, and real-time charts.",
    icon: <BarChart3 className="w-6 h-6" />,
  },
  {
    title: "Rewards & Offers",
    desc: "Earn cashback, referral bonuses, and enjoy exclusive merchant deals every day.",
    icon: <Gift className="w-6 h-6" />,
  },
];

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0B0B16] text-gray-900 dark:text-white py-20 px-6 md:px-20 transition-colors duration-300">
      {/* HERO */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Built for fast, safe & modern payments —{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
              Digital Wallet
            </span>
          </h1>
          <p className="mt-5 text-gray-600 dark:text-gray-400 max-w-xl">
            Experience seamless money management. Top-up, transfer and pay
            anywhere in seconds with bank-level security and powerful insights —
            all from your phone.
          </p>

          <div className="mt-8 flex gap-4">
            <a className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:opacity-90 transition">
              Get Started
            </a>
            <a className="inline-block px-6 py-3 rounded-full border border-purple-500 hover:bg-purple-600 hover:text-white transition">
              Learn More
            </a>
          </div>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative flex flex-col items-center"
        >
          {/* Background Gradient Circle */}
          <div className="absolute -z-10 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-purple-600/40 to-pink-400/30 blur-3xl"></div>

          {/* Phone mockup */}
             <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center relative"
        >
          <img
            src={Phone}
            alt="Phone Mockup"
            className="w-[280px] md:w-[380px] drop-shadow-2xl"
          />

          {/* Floating small cards */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="absolute top-10 right-0 bg-card text-card-foreground px-4 py-3 rounded-xl shadow-lg"
          >
            <p className="text-xs text-muted-foreground">Incomes</p>
            <p className="font-bold">$2,750.50</p>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="absolute bottom-10 right-0 bg-card text-card-foreground px-4 py-3 rounded-xl shadow-lg"
          >
            <p className="text-xs text-muted-foreground">Expenses</p>
            <p className="font-bold">$1,240.80</p>
          </motion.div>
        </motion.div>

          {/* Stats */}
          <div className="mt-8 flex gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                93k+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Satisfied Users
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                4.9/5
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Avg Rating
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                100k+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                App Downloads
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FEATURES GRID */}
      <section className="max-w-7xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((f, i) => (
          <motion.article
            key={i}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a1330] dark:to-[#2a1638] shadow-lg flex gap-4 items-start"
          >
            <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-300">
              {f.icon}
            </div>
            <div>
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {f.desc}
              </p>
            </div>
          </motion.article>
        ))}
      </section>

      {/* CTA / SECURITY IMAGE */}
      <section className="max-w-7xl mx-auto mt-20 grid md:grid-cols-3 gap-6 items-center">
        {/* CTA */}
        <motion.aside
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="p-6 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-500 text-white shadow-lg"
        >
          <h4 className="text-2xl font-bold">Start Today</h4>
          <p className="text-sm mt-2">
            Sign up, verify, and start sending money instantly. Your wallet, your
            freedom.
          </p>
          <Link to="/register">
                 <button className="mt-4 w-full cursor-pointer px-4 py-2 bg-black/80 rounded-full hover:bg-black transition">
            Sign Up
          </button></Link>
   
        </motion.aside>

        {/* SECURITY IMAGE */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2 flex justify-center"
        >
          <img
            src={Security}
            alt="security illustration"
            className="w-full md:w-2/3 rounded-2xl shadow-xl"
          />
        </motion.div>
      </section>
    </main>
  );
}
