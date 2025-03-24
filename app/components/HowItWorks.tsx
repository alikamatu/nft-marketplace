"use client";

import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";

interface Step {
  step: string;
  desc: string;
}

interface HowItWorksProps {
  steps: Step[];
}

export default function HowItWorks({ steps }: HowItWorksProps) {
  return (
    <section className="py-20 px-6 bg-gradient-to-t from-gray-900 to-black">
      <AnimatedText
        text="HOW IT WORKS"
        className="text-4xl md:text-5xl font-orbitron text-center mb-16 text-neonPurple"
        type="spin"
      />
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {steps.map((item, index) => (
          <motion.div
            key={index}
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="w-20 h-20 bg-neonBlue text-black rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-orbitron font-bold"
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              {index + 1}
            </motion.div>
            <AnimatedText
              text={item.step}
              className="text-2xl font-orbitron text-neonBlue mb-4"
              type="bounce"
              delay={index * 0.2}
            />
            <AnimatedText
              text={item.desc}
              className="text-gray-300 font-poppins"
              type="fade"
              delay={index * 0.3}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}