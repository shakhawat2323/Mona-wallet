"use client";

import * as React from "react";
import { z } from "zod";
import { motion } from "framer-motion";
import { toast, Toaster } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// shadcn/ui components
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

export default function ContactPage() {
  const [loading, setLoading] = React.useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      // এখানে আসল backend API call করা যাবে
      await new Promise((resolve) => setTimeout(resolve, 1200));
      toast.success("✅ Message sent successfully!");
      console.log("Form Data:", data);
      form.reset();
    } catch {
      toast.error("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-[#0B0B16] dark:to-[#151521] text-gray-900 dark:text-white py-20 px-6 md:px-20 transition-colors duration-300">
      <Toaster position="top-right" />

      {/* ===== Page Header ===== */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Get in{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
            Touch
          </span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg">
          Have questions about Digital Wallet? Our support team is always ready
          to assist you.
        </p>
      </motion.div>

      {/* ===== Contact Info Cards ===== */}
      <section className="max-w-5xl mx-auto mt-12 grid md:grid-cols-3 gap-6">
        {[
          {
            title: "Call Us",
            desc: "+880 1XXXXXXXXX",
            icon: <Phone className="h-6 w-6 text-purple-500" />,
          },
          {
            title: "Email Support",
            desc: "support@digitalwallet.com",
            icon: <Mail className="h-6 w-6 text-pink-500" />,
          },
          {
            title: "Office",
            desc: "Dhaka, Bangladesh",
            icon: <MapPin className="h-6 w-6 text-blue-500" />,
          },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            className="rounded-2xl shadow-md bg-white dark:bg-[#1c1c29] border border-gray-200 dark:border-gray-700 p-6 text-center"
          >
            <div className="flex items-center justify-center mb-3">
              {item.icon}
            </div>
            <h4 className="font-semibold text-lg">{item.title}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </section>

      {/* ===== Contact Form ===== */}
      <section className="max-w-4xl mx-auto mt-16">
        <Card className="bg-white dark:bg-[#1c1c29] border border-gray-200 dark:border-gray-700 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Send us a Message
            </h2>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your email"
                            type="email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter subject" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Write your message..."
                          rows={6}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-center pt-4">
                  <Button
                    type="submit"
                    disabled={loading}
                    className="bg-gradient-to-r cursor-pointer from-purple-500 to-pink-500 text-white px-8"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
