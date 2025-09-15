
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-[#0B0B16] dark:to-[#151521] text-gray-900 dark:text-white py-20 px-6 md:px-20 transition-colors duration-300">
      {/* ===== Hero Section ===== */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Frequently Asked{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
            Questions
          </span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg">
          Everything you need to know about using your Digital Wallet — security,
          payments, top-ups, and more.
        </p>
      </motion.div>

      {/* ===== FAQ Section ===== */}
      <section className="max-w-4xl mx-auto mt-12">
        <Card className="bg-white dark:bg-[#1c1c29] border border-gray-200 dark:border-gray-700 shadow-lg">
          <CardContent className="p-8">
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  How can I add money to my wallet?
                </AccordionTrigger>
                <AccordionContent>
                  You can instantly top-up your wallet via bank transfer, debit/credit
                  card, or by visiting a registered agent. All transactions are processed
                  in real-time.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Is my money safe in the Digital Wallet?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. We use bank-grade encryption, two-factor authentication (2FA),
                  and continuous fraud monitoring to keep your funds and data secure.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Can I withdraw cash from my wallet?
                </AccordionTrigger>
                <AccordionContent>
                  Absolutely. You can withdraw cash through our agents, supported ATMs,
                  or transfer funds directly to your linked bank account anytime.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Are there any fees for transactions?
                </AccordionTrigger>
                <AccordionContent>
                  Peer-to-peer wallet transfers are free. Service charges may apply for
                  withdrawals, bill payments, or international transfers. Check the
                  pricing page for details.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>
                  What if I lose my phone or SIM card?
                </AccordionTrigger>
                <AccordionContent>
                  No worries. Simply log in from another device and block access. You can
                  also contact our 24/7 support team to secure your account immediately.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>
                  Do you offer rewards or cashback?
                </AccordionTrigger>
                <AccordionContent>
                  Yes! We frequently run cashback campaigns, referral bonuses, and
                  merchant discounts to maximize your savings while using the wallet.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
