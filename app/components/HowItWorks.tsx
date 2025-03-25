"use client";

import { motion, Variants } from "framer-motion";
import AnimatedText from "./AnimatedText";

interface Step {
  step: string;
  desc: string;
}

interface HowItWorksProps {
  steps: Step[];
}

export default function HowItWorks({ steps }: HowItWorksProps) {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.3, duration: 0.6, ease: "easeOut" },
    }),
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 30px rgba(0, 240, 255, 0.5), 0px 0px 50px rgba(212, 0, 255, 0.4)",
    },
  };

  const numberVariants: Variants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.1, 1],
      boxShadow: [
        "0px 0px 15px rgba(0, 240, 255, 0.6)",
        "0px 0px 25px rgba(0, 240, 255, 0.9)",
        "0px 0px 15px rgba(0, 240, 255, 0.6)",
      ],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <section className="py-20 px-6 bg-[linear-gradient(to_top,#1a2a44,#0a0a1a,#1a2a44)] relative overflow-hidden">
      {/* Holographic Overlay */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,240,255,0.1)_0%,transparent_70%)] opacity-20"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="flex w-full justify-center items-center mb-16">
      <AnimatedText
        text="HOW IT WORKS"
        className="text-4xl md:text-5xl font-orbitron text-neonPurple mb-16 text-center drop-shadow-[0_0_20px_rgba(212,0,255,0.9)] glitch-border"
        type="pulse"
      />
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {steps.map((item, index) => (
          <motion.div
            key={index}
            className="relative bg-gray-900/80 backdrop-blur-md rounded-lg p-6 text-center border-2 border-neonBlue/30 glitch-border group"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            custom={index}
            viewport={{ once: true }}
          >
            <motion.div
              className="w-16 h-16 bg-neonBlue text-black rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-orbitron font-bold relative overflow-hidden"
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
            <AnimatedText
              text={item.step}
              className="text-2xl font-orbitron text-neonBlue drop-shadow-[0_0_10px_rgba(0,240,255,0.8)]"
              type="fade"
              delay={index * 0.2}
            />
            <motion.p
              className="text-gray-400 font-poppins text-sm md:text-base glitch-border-subtle"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.4, duration: 0.6 }}
            >
              {item.desc}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}