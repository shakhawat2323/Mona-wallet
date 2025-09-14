// pages/FeaturesPage.tsx

import { motion } from "framer-motion";
import { Bolt, ShieldCheck, BarChart3, Gift } from "lucide-react";

const features = [
  {
    title: "Instant Top-up",
    desc: "Agent, bank transfer or card — instant wallet credit with minimal latency.",
    icon: <Bolt />,
  },
  {
    title: "Secure by Design",
    desc: "Encryption, 2FA and continuous monitoring to keep funds safe.",
    icon: <ShieldCheck />,
  },
  {
    title: "Smart Insights",
    desc: "Expense breakdowns, monthly trends and charts to understand spend patterns.",
    icon: <BarChart3 />,
  },
  {
    title: "Rewards & Offers",
    desc: "Cashback, referral bonuses and merchant promos to save you money.",
    icon: <Gift />,
  },
];

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#080812] via-[#0e0620] to-[#0b0b16] text-white py-20 px-6 md:px-20">
      {/* HERO */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Built for fast, safe & modern payments —{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Digital Wallet
            </span>
          </h1>
          <p className="mt-5 text-gray-300 max-w-xl">
            Seamlessly top-up, send and manage money. Role-based dashboards for users,
            agents and admins with real-time insights, robust security and mobile-first UX.
          </p>

          <div className="mt-8 flex gap-4">
            <a className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-black font-semibold">
              Get Started
            </a>
            <a className="inline-block px-6 py-3 rounded-full border border-purple-500">Learn More</a>
          </div>
        </motion.div>

        {/* Hero visual + stats */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <div className="w-[300px] h-[600px] md:w-[360px] md:h-[720px] rounded-3xl bg-gradient-to-br from-[#0f1120]/60 to-[#20102b]/40 flex items-center justify-center shadow-2xl">
            {/* placeholder phone mockup */}
            <img src="/phone-mock.png" alt="phone" className="w-3/4" />
          </div>

          <div className="mt-6 flex gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold">93k+</div>
              <div className="text-sm text-gray-300">Satisfied users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">4.9/5</div>
              <div className="text-sm text-gray-300">Avg rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">100k+</div>
              <div className="text-sm text-gray-300">App downloads</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FEATURES GRID */}
      <section className="max-w-7xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((f, i) => (
          <motion.article
            key={i}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-[#1a1330] to-[#2a1638] shadow-lg flex gap-4 items-start"
          >
            <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-purple-300">
              {f.icon}
            </div>
            <div>
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="text-sm text-gray-300 mt-1">{f.desc}</p>
            </div>
          </motion.article>
        ))}
      </section>

      {/* Testimonials / CTA */}
      <section className="max-w-7xl mx-auto mt-16 grid md:grid-cols-3 gap-6 items-start">
        <motion.div className="md:col-span-2 p-6 rounded-2xl bg-[#0f0b18]/60">
          <h3 className="text-2xl font-bold">Trusted by thousands</h3>
          <p className="text-gray-300 mt-4">Real testimonials and real impact on users' daily finance.</p>

          <div className="mt-6 space-y-4">
            <article className="p-4 rounded-xl bg-gradient-to-r from-purple-600/20 to-pink-400/10 flex gap-4 items-start">
              <img src="/avatars/john.jpg" className="w-12 h-12 rounded-full" alt="john" />
              <div>
                <div className="font-semibold">John Smith</div>
                <div className="text-sm text-gray-300">"Amazing app. Easy to use and super fast."</div>
              </div>
            </article>
            <article className="p-4 rounded-xl bg-[#0b0712]/80 flex gap-4 items-start">
              <img src="/avatars/will.jpg" className="w-12 h-12 rounded-full" alt="will" />
              <div>
                <div className="font-semibold">William John</div>
                <div className="text-sm text-gray-300">"Great customer support and secure transactions."</div>
              </div>
            </article>
          </div>
        </motion.div>

        <motion.aside
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="p-6 rounded-2xl bg-gradient-to-br from-purple-700 to-pink-500"
        >
          <h4 className="text-xl font-bold">Start Today</h4>
          <p className="text-sm mt-2">Create account, verify and start sending money instantly.</p>
          <button className="mt-4 w-full px-4 py-2 bg-black/80 rounded-full">Sign Up</button>
        </motion.aside>
      </section>
    </main>
  );
}
