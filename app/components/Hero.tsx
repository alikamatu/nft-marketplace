"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import AnimatedText from "./AnimatedText";

export default function Hero() {
  const glitchVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        repeat: 3,
        repeatType: "mirror" as const,
        ease: "easeInOut",
      },
    },
  };

  const buttonVariants: Variants = {
    idle: { scale: 1, rotateX: 0, rotateY: 0 },
    hover: {
      scale: 1.15,
      rotateX: [0, 15, -15, 0],
      rotateY: [0, 20, -20, 0],
      boxShadow: "0px 0px 50px rgba(0, 240, 255, 0.9), 0px 0px 70px rgba(212, 0, 255, 0.7)",
      transition: { duration: 0.8, repeat: Infinity },
    },
    tap: { scale: 0.95 },
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[linear-gradient(45deg,#0a0a1a_0%,#1a2a44_50%,#0a0a1a_100%)]">
      {/* Darker Luminous Background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          opacity: [0.7, 0.9, 0.7],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Moon Glow with Holographic Effect */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-neonBlue/20 to-transparent rounded-full border border-neonBlue/30"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.2, 0.4, 0.2],
          boxShadow: "0px 0px 120px rgba(0, 240, 255, 0.4)",
          borderColor: ["rgba(0, 240, 255, 0.3)", "rgba(212, 0, 255, 0.5)", "rgba(0, 240, 255, 0.3)"],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Holographic Overlay */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,240,255,0.1)_0%,transparent_70%)] opacity-30"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center">
        <AnimatedText
          text="AI-POWERED"
          className="text-5xl md:text-8xl font-orbitron font-bold tracking-wider text-neonBlue drop-shadow-[0_0_25px_rgba(0,240,255,0.9)] glitch-border"
          type="pulse"
        />
        <AnimatedText
          text="NFT MARKETPLACE"
          className="text-5xl md:text-8xl font-orbitron font-bold tracking-wider text-neonPurple drop-shadow-[0_0_25px_rgba(212,0,255,0.9)] glitch-border"
          type="spin"
          delay={0.4}
        />
        <motion.div
          className="mt-6 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <AnimatedText
            text="Create, Mint, Trade in a Decentralized Cosmos"
            className="text-lg md:text-2xl font-poppins text-gray-400 drop-shadow-md glitch-border-subtle"
            type="fade"
            delay={0.8}
          />
          <motion.div
            className="absolute top-0 right-10 text-neonPurple font-poppins text-lg md:text-xl"
            variants={glitchVariants}
            initial="hidden"
            animate="visible"
          >
            Built on ICP
          </motion.div>
        </motion.div>

        <Link href="/generate">
          <motion.button
            className="mt-10 px-12 py-5 bg-neonPurple text-white font-orbitron text-xl rounded-full border-2 border-neonBlue relative overflow-hidden glitch-border"
            variants={buttonVariants}
            initial="idle"
            whileHover="hover"
            whileTap="tap"
          >
            <AnimatedText text="START NOW" type="bounce" className="relative z-10" />
            <motion.div
              className="absolute inset-0 bg-neonBlue opacity-20"
              animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-neonBlue rounded-full"
                initial={{ x: "50%", y: "50%" }}
                whileHover={{
                  x: Math.cos(i * Math.PI / 3) * 60,
                  y: Math.sin(i * Math.PI / 3) * 60,
                  opacity: [1, 0],
                }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              />
            ))}
          </motion.button>
        </Link>
      </div>
    </section>
  );
}