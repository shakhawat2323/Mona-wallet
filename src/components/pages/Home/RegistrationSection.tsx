import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PhoneImg from "../../../assets/images/Phone.webp";
import { Link } from "react-router";

export default function RegistrationSection() {
  return (
    <section className="relative bg-background text-foreground py-20 px-6 md:px-20 overflow-hidden">
      {/* Gradient Circle Background */}
      <div className="absolute top-[38%] left-[73%] -translate-x-1/2 -translate-y-1/2 lg:w-[550px] lg:h-[550px] rounded-full bg-gradient-to-tr from-purple-600/40 to-pink-400/30 blur-3xl z-0"></div>

      <div className="relative z-10 grid md:grid-cols-2 items-center gap-12">
        {/* Left Content */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Get Started With{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Quick Registration
            </span>
          </h1>
          <p className="mt-4 text-muted-foreground">
            Open your digital wallet in just a few simple steps. 
            Sign up securely, set up your profile, and enjoy 
            instant access to payments, transfers, and more.
          </p>

          {/* Steps */}
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
            {[
              "Verify your ID",
              "Set up your profile",
              "Select your country",
              "Add your first funds",
              "Start sending money",
              "Access full features",
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-2"
              >
                <span className="w-5 h-5 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs">
                  ✓
                </span>
                {step}
              </motion.div>
            ))}
          </div>

          {/* Buttons */}
       
          <div className="mt-8 flex gap-4">
             <Link to="/register">
             <Button className="px-6 py-3 cursor-pointer rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90">
              Register Now
            </Button></Link>
          <Link to="/about">  <Button className="px-6 py-3 cursor-pointer rounded-full border border-purple-500 bg-transparent text-foreground hover:bg-purple-600 hover:text-white">
              Learn More
            </Button></Link>
          </div>
        </motion.div>

        {/* Right Image (Phone) */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center relative"
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
      </div>
    </section>
  );
}
