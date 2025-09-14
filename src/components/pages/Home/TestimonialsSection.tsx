"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import LadyPic from "../../../assets/images/lady.webp"; // তোমার লেডি ছবির path

export default function TestimonialsSection() {
  return (
    <section className="bg-[#0B0B16] text-white py-20 px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* ========== LEFT CONTENT (Heading + Counter + Accordion) ========== */}
        <div>
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold leading-tight"
          >
            What Customers say{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              About Us
            </span>
          </motion.h2>

          <p className="mt-4 text-gray-400">
            Lorem ipsum dolor sit amet consectetur. Scelerisque tincidunt nibh molestie nisi egestas nulla massa.  
          </p>

          {/* Counter Section */}
          <div className="mt-10 flex flex-wrap gap-8">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} viewport={{ once: true }}>
              <h3 className="text-3xl font-bold">
                <CountUp end={93} duration={3} />k+
              </h3>
              <p className="text-gray-400 text-sm">Satisfied Users</p>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }} viewport={{ once: true }}>
              <h3 className="text-3xl font-bold">
                <CountUp end={4.9} duration={3} decimals={1} />/5
              </h3>
              <p className="text-gray-400 text-sm">Client Rating</p>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.6 }} viewport={{ once: true }}>
              <h3 className="text-3xl font-bold">
                <CountUp end={100} duration={3} />k+
              </h3>
              <p className="text-gray-400 text-sm">App Downloads</p>
            </motion.div>
          </div>

          {/* Accordion (Q&A) */}
          <div className="mt-12">
            <Accordion type="single" collapsible className="w-full space-y-3">
              <AccordionItem value="item-1" className="border border-purple-500 rounded-lg px-4">
                <AccordionTrigger>How secure is my data?</AccordionTrigger>
                <AccordionContent>
                  We use end-to-end encryption and top-level security protocols to keep your data safe.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border border-purple-500 rounded-lg px-4">
                <AccordionTrigger>Can I use it worldwide?</AccordionTrigger>
                <AccordionContent>
                  Yes, our platform supports multiple countries and works with international payment systems.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border border-purple-500 rounded-lg px-4">
                <AccordionTrigger>Is customer support available?</AccordionTrigger>
                <AccordionContent>
                  Absolutely! Our 24/7 support team is always ready to assist you with any issue.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* ========== RIGHT IMAGE ========== */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img src={LadyPic} alt="Happy customer" className="w-[400px] md:w-[500px] rounded-xl shadow-2xl" />
        </motion.div>
      </div>

      {/* 🔥 Extra 3 Professional Sections */}
      <div className="mt-24 space-y-24">
        
        {/* Section 1: CTA */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold">Ready to Experience the Future of Finance?</h3>
          <p className="text-gray-400 mt-3">Join thousands of happy customers and start your journey today.</p>
          <button className="mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90">
            Get Started
          </button>
        </motion.div>

        {/* Section 2: Features Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {["Fast Transactions", "Low Fees", "24/7 Support"].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-gradient-to-br from-purple-600 to-pink-500 shadow-lg"
            >
              <h4 className="font-bold text-xl mb-2">{feature}</h4>
              <p className="text-sm text-white/90">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.
              </p>
            </motion.div>
          ))}
        </div>

        {/* Section 3: Newsletter */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#1A1A2E] rounded-2xl p-10 text-center"
        >
          <h3 className="text-2xl font-bold">Stay Updated!</h3>
          <p className="text-gray-400 mt-2">Subscribe to our newsletter for latest updates and offers.</p>
          <div className="mt-6 flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-l-full bg-gray-800 text-white focus:outline-none"
            />
            <button className="px-6 py-3 rounded-r-full bg-gradient-to-r from-purple-500 to-pink-500 text-white">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
