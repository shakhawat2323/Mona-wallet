import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PhoneImg from "../../../assets/images/Phone.webp"; // তোমার phone img path

export default function RegistrationSection() {
  return (
    <section className="relative bg-[#0B0B16] text-white py-20 px-6 md:px-20 overflow-hidden">
      {/* Gradient Circle Background (using ::before) */}
      <div className="absolute top-[38%]  left-[73%] -translate-x-1/2 -translate-y-1/2 lg:w-[550px] lg:h-[550px] rounded-full bg-gradient-to-tr from-[#836DD6] to-[#ffa37b] z-0"></div>

      <div className="relative z-10 grid md:grid-cols-2 items-center gap-12">
        {/* Left Content */}
        <motion.div className=""
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl  md:text-5xl font-extrabold leading-tight">
            Our Easy Steps For{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Registration
            </span>
          </h1>
          <p className="mt-4 text-gray-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>

          {/* Steps */}
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
            {[
              "Sign in with ID Card",
              "User Configuration",
              "Select Country Location",
              "Enter the Transaction",
              "Enjoy Full Access",
              "Enter the Transaction",
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-2"
              >
                <span className="w-5 h-5 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
                  ✓
                </span>
                {step}
              </motion.div>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <Button className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90">
              Register Now
            </Button>
            <Button className="px-6 py-3 rounded-full border border-purple-500 bg-transparent hover:bg-purple-600">
              Get Started
            </Button>
          </div>
        </motion.div>

        {/* Right Image (Phone) */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center   relative"
        >
          <img
            src={PhoneImg}
            alt="Phone Mockup"
            className="w-[280px] md:w-[380px] drop-shadow-2xl"
          />

          {/* Floating small cards */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="absolute top-10 right-0 bg-[#1E1E2E] px-4 py-3 rounded-xl shadow-lg"
          >
            <p className="text-xs text-gray-400">Incomes</p>
            <p className="font-bold">$2,750.5</p>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="absolute bottom-10 right-0 bg-[#1E1E2E] px-4 py-3 rounded-xl shadow-lg"
          >
            <p className="text-xs text-gray-400">Expenses</p>
            <p className="font-bold">$1,240.8</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
