// pages/ContactPage.tsx
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { toast, Toaster } from "sonner";

const schema = z.object({
  name: z.string().min(2, "Name required"),
  email: z.email("Invalid email"),
  subject: z.string().min(3, "Subject required"),
  message: z.string().min(10, "Message too short"),
});

type FormData = z.infer<typeof schema>;

export default function ContactPage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { register, handleSubmit, reset, formState } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = (data: FormData) => {
    // এখানে সরাসরি backend কল করতে পারো (RTK Query)।
    // এখন আমরা ফেক সাবমিশন দেখাচ্ছি।
    toast.success("Message sent! We will contact you soon.");
    reset();
  };

  return (
    <main className="min-h-screen bg-[#0B0B16] text-white py-20 px-6 md:px-20">
      <Toaster position="top-right" />
      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <motion.div initial={{ x: -30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl font-extrabold">
            Contact <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Us</span>
          </h1>
          <p className="text-gray-300 mt-4">
            Have a question or need help? Send us a message — our team responds quickly.
          </p>

          <div className="mt-8 space-y-6">
            <div>
              <h4 className="font-semibold">Office</h4>
              <p className="text-sm text-gray-300 mt-1">Dhaka, Bangladesh • Mon-Fri 9:00–18:00</p>
            </div>

            <div>
              <h4 className="font-semibold">Support</h4>
              <p className="text-sm text-gray-300 mt-1">support@example.com • +880 1XXXXXXXXX</p>
            </div>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-[#0f0b18]/60 p-6 rounded-2xl"
        >
          <label className="block">
            <span className="text-sm text-gray-300">Name</span>
            <input {...register("name")} className="mt-1 w-full px-4 py-2 rounded-md bg-[#0b0b16]/60" />
          </label>

          <label className="block mt-4">
            <span className="text-sm text-gray-300">Email</span>
            <input {...register("email")} className="mt-1 w-full px-4 py-2 rounded-md bg-[#0b0b16]/60" />
          </label>

          <label className="block mt-4">
            <span className="text-sm text-gray-300">Subject</span>
            <input {...register("subject")} className="mt-1 w-full px-4 py-2 rounded-md bg-[#0b0b16]/60" />
          </label>

          <label className="block mt-4">
            <span className="text-sm text-gray-300">Message</span>
            <textarea {...register("message")} rows={5} className="mt-1 w-full px-4 py-2 rounded-md bg-[#0b0b16]/60" />
          </label>

          <div className="mt-6 flex gap-3">
            <button type="submit" className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
              Send Message
            </button>
            <button type="button" onClick={() => reset()} className="px-6 py-2 border border-gray-700 rounded-full">
              Reset
            </button>
          </div>
        </motion.form>
      </section>

      {/* Optional: Map placeholder + FAQ teaser */}
      <section className="max-w-7xl mx-auto mt-16 grid md:grid-cols-2 gap-6">
        <div className="h-64 rounded-2xl bg-gradient-to-br from-[#0f0b18] to-[#1a1228] flex items-center justify-center text-gray-400">
          {/* Replace with actual embedded map iframe if desired */}
          Map / Location placeholder
        </div>

        <div className="p-6 rounded-2xl bg-[#0f0b18]">
          <h3 className="text-xl font-semibold">Quick FAQ</h3>
          <div className="mt-4 space-y-3 text-sm text-gray-300">
            <div>
              <strong>Refund policy:</strong> In-app refunds follow T&C. Contact support.
            </div>
            <div>
              <strong>Agent top-up:</strong> Agents credit wallets instantly after cash deposit.
            </div>
            <div>
              <strong>Security:</strong> We support 2FA and monitor suspicious activity.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
