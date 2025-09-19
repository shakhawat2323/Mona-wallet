import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Cards from "../../../assets/images/Hero.webp";

export default function Hero() {
  return (
    <section
      className="
        theme-orange
        bg-background text-foreground
        py-20 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10
      "
    >
      {/* Left Content */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-lg"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          The Ultimate{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
            Online Payment
          </span>{" "}
          Solution
        </h1>
        <p className="mt-5 text-muted-foreground">
          Manage your money smarter with our secure digital wallet. Send, receive 
          and store funds instantly — all in one place. Experience faster, safer 
          and more convenient transactions anytime, anywhere.
        </p>
        <Button
          className="
            mt-5 px-6 py-5 cursor-pointer rounded-full
            bg-primary text-primary-foreground
            hover:bg-orange-600 transition
          "
        >
          Get Started
        </Button>
      </motion.div>

      {/* Right Content */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-6"
      >
        {/* Cards */}
        <div className="relative w-72 h-44">
          {/* Orange Circle Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-40 h-40 rounded-full bg-orange-500/40 blur-3xl"></div>
          </div>

          <motion.img
            src={Cards}
            alt="Card Dark"
            className="absolute top-0 left-0 py-2 w-full rounded-xl shadow-lg"
            initial={{ y: -50, opacity: 0, scale: 0.95 }}
            whileInView={{ y: 0, opacity: 1, scale: 1.7 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </div>
      </motion.div>
    </section>
  );
}
