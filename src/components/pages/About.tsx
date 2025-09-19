// pages/AboutPage.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Globe, ShieldCheck, Calendar } from "lucide-react";
import Logo from "../../assets/images/login.jpeg"; 
import Team1 from "../../assets/images/Team1.webp";
import Team2 from "../../assets/images/Team2.webp";
import Team3 from "../../assets/images/Team3.webp";
import Team4 from "../../assets/images/Team4.webp";
import Phone from "../../assets/images/Phone.webp";
import { Link } from "react-router";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* HERO */}
      <section className="max-w-7xl mx-auto py-20 px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <img src={Logo} alt="Brand" className="w-12 h-12 object-contain" />
              <span className="text-sm font-medium text-muted-foreground">Trusted • Secure • Fast</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
              We build trusted digital payments for everyday life
            </h1>

            <p className="text-muted-foreground max-w-xl">
              Our digital wallet gives individuals and small businesses a secure, convenient way to
              manage money — from instant top-ups and peer transfers to merchant payments and smart insights.
              We focus on security, ease-of-use, and broad accessibility across devices and regions.
            </p>

            <div className="flex gap-4">
    
        
                <Link to="/register">
               <a className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground shadow">
                Create Account
              </a></Link>
                <Link to="/contact">
                      <a className="inline-flex items-center px-6 py-3 rounded-full border border-input bg-transparent">
                Contact
              </a></Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
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

            <div className="mt-6 grid grid-cols-2 gap-4">
              <StatCard icon={<Users className="w-5 h-5" />} title="93k+" subtitle="Active users" />
              <StatCard icon={<ShieldCheck className="w-5 h-5" />} title="Bank-grade" subtitle="Security & compliance" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* MISSION & VALUES */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          <ValueCard
            icon={<Globe className="w-6 h-6" />}
            title="Inclusive by design"
            text="We build for everyone — simple onboarding, local payment options, and multilingual support so people everywhere can access financial services."
          />
          <ValueCard
            icon={<ShieldCheck className="w-6 h-6" />}
            title="Security first"
            text="From encrypted storage to adaptive fraud detection and optional biometric login — your money stays protected with us."
          />
          <ValueCard
            icon={<Calendar className="w-6 h-6" />}
            title="Reliable & fast"
            text="Real-time processing, resilient infrastructure, and 24/7 monitoring ensure payments clear fast when users need them most."
          />
        </div>
      </section>

      {/* TEAM */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-12">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold mb-6"
        >
          Our leadership team
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <TeamCard img={Team1} name="Aisha Rahman" role="CEO — Product & Strategy" bio="Former fintech product lead, focused on inclusive payments." />
          <TeamCard img={Team2} name="Tanvir Ahmed" role="CTO — Engineering" bio="Built scalable backend systems for millions of users." />
          <TeamCard img={Team3} name="Maya Chowdhury" role="Head of Trust & Safety" bio="Leads security, privacy and fraud teams." />
          <TeamCard img={Team4} name="Rafiq Hossain" role="Head of Operations" bio="Ensures smooth agent and merchant operations." />
        </div>
      </section>

      {/* MILESTONES / TIMELINE */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-12">
        <motion.h3 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-xl font-bold mb-6">
          Built in milestones
        </motion.h3>

        <div className="grid md:grid-cols-3 gap-6">
          <Milestone year="2019" title="Product launch" desc="Launched mobile wallet with agent cash-in and peer transfers in core markets." />
          <Milestone year="2021" title="Scaling & security" desc="Reached 1M users; introduced 2FA, fraud monitoring and bank integrations." />
          <Milestone year="2024" title="International expansion" desc="Added cross-border transfers and multi-currency support." />
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-12">
        <div className="rounded-2xl p-8 bg-card text-card-foreground shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-bold">Ready to bring payments into your pocket?</h4>
            <p className="text-sm text-muted-foreground mt-2">Create an account to start sending, receiving, and managing money securely.</p>
          </div>

          <div className="flex gap-3">
            <a className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground shadow">Get Started</a>
            <a className="inline-flex items-center px-6 py-3 rounded-full border border-input">Contact Sales</a>
          </div>
        </div>
      </section>
    </main>
  );
}

/* --------------------- small subcomponents --------------------- */

function StatCard({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle: string }) {
  return (
    <div className="p-4 rounded-xl bg-card text-card-foreground shadow flex items-start gap-4">
      <div className="p-2 rounded-lg bg-primary/10 text-primary">{icon}</div>
      <div>
        <div className="font-semibold text-lg">{title}</div>
        <div className="text-sm text-muted-foreground">{subtitle}</div>
      </div>
    </div>
  );
}

function ValueCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <motion.article
      initial={{ y: 6, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
      className="p-6 rounded-2xl bg-card text-card-foreground shadow"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 rounded-lg bg-primary/10 text-primary">{icon}</div>
        <h4 className="font-semibold">{title}</h4>
      </div>
      <p className="text-sm text-muted-foreground">{text}</p>
    </motion.article>
  );
}

function TeamCard({ img, name, role, bio }: { img: string; name: string; role: string; bio: string }) {
  return (
    <motion.div initial={{ y: 8, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.45 }} className="rounded-xl bg-card text-card-foreground shadow p-4 text-center">
      <img src={img} alt={name} className="w-20 h-20 rounded-full object-cover mx-auto" />
      <div className="mt-3 font-semibold">{name}</div>
      <div className="text-sm text-muted-foreground">{role}</div>
      <p className="mt-2 text-sm text-muted-foreground">{bio}</p>
    </motion.div>
  );
}

function Milestone({ year, title, desc }: { year: string; title: string; desc: string }) {
  return (
    <div className="p-4 rounded-xl bg-card text-card-foreground shadow">
      <div className="text-sm text-muted-foreground">{year}</div>
      <div className="font-semibold mt-2">{title}</div>
      <div className="text-sm text-muted-foreground mt-1">{desc}</div>
    </div>
  );
}
