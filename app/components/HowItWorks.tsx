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
  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: index * 0.3, duration: 0.6, ease: "easeOut" },
    }),
    hover: {
      scale: 1.03,
      boxShadow: "0px 10px 30px rgba(0, 240, 255, 0.3)",
      transition: { duration: 0.3 },
    },
  };

  // Number glow animation
  const numberVariants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.1, 1],
      boxShadow: [
        "0px 0px 10px rgba(0, 240, 255, 0.5)",
        "0px 0px 20px rgba(0, 240, 255, 0.8)",
        "0px 0px 10px rgba(0, 240, 255, 0.5)",
      ],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <section className="py-20 px-6 bg-[linear-gradient(to_right,#1a1a2e,#111,#0f172a)]">
      {/* Header */}
      <div className="text-center mb-16">
        <AnimatedText
          text="HOW IT WORKS"
          className="text-4xl md:text-5xl font-orbitron text-neonPurple mb-4"
          type="fade"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg font-poppins text-gray-400 max-w-2xl mx-auto"
        >
          Follow these simple steps to create, mint, and trade your AI-generated NFTs on our decentralized platform.
        </motion.p>
      </div>

      {/* Steps Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {steps.map((item, index) => (
          <motion.div
            key={index}
            className="relative bg-gray-800 rounded-lg p-6 text-center border border-neonBlue/20 hover:border-neonBlue/50 transition-colors duration-300"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            custom={index}
            viewport={{ once: true }}
          >
            {/* Step Number with Glow */}
            <motion.div
              className="w-16 h-16 bg-neonBlue text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-orbitron font-bold relative overflow-hidden"
              variants={numberVariants}
              initial="initial"
              animate="animate"
            >
              <span className="relative z-10">{index + 1}</span>
              <motion.div
                className="absolute inset-0 bg-lightBlue opacity-30"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>

            {/* Step Title */}
            <AnimatedText
              text={item.step}
              className="text-2xl font-orbitron text-neonBlue mb-4"
              type="fade"
              delay={index * 0.2}
            />

            {/* Step Description */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.4, duration: 0.6 }}
              className="text-gray-300 font-poppins text-sm md:text-base"
            >
              {item.desc}
            </motion.p>

            {/* Connecting Line (visible on medium screens and up) */}
            {index < steps.length - 1 && (
              <motion.div
                className="hidden md:block absolute top-1/2 right-0 w-1/2 h-1 bg-neonBlue/50"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: index * 0.5, duration: 1 }}
                style={{ transformOrigin: "left" }}
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <button
          className="px-8 py-3 bg-neonPurple text-white font-orbitron rounded-full border-2 border-neonBlue/50 hover:bg-neonBlue hover:text-black hover:border-neonBlue transition-all duration-300"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Get Started Now
        </button>
      </motion.div>
    </section>
  );
}