"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";

export default function Hero() {
  const gradientVariants = {
    animate: {
      background: [
        "linear-gradient(to bottom right, #00f0ff, #d400ff, #40c4ff)", // neonBlue → neonPurple → lightBlue
        "linear-gradient(to bottom right, #40c4ff, #ff00cc, #00f0ff)", // lightBlue → neon pink → neonBlue
        "linear-gradient(to bottom right, #00f0ff, #40c4ff, #d400ff)", // neonBlue → lightBlue → neonPurple
      ],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
      className="relative h-screen flex items-center justify-center overflow-hidden"
      variants={gradientVariants}
      animate="animate"
    >
      {/* Animated Grid Background */}
      <motion.div
        className="absolute inset-0 bg-[url('/grid.png')] opacity-40"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Bright Glowing Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-transparent via-lightBlue/30 to-neonBlue/50"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="text-center z-10">
        <AnimatedText
          text="AI-POWERED"
          className="text-5xl md:text-7xl font-orbitron font-bold tracking-wider text-white drop-shadow-lg"
          delay={0.2}
          type="bounce"
        />
        <AnimatedText
          text="NFT MARKETPLACE"
          className="text-5xl md:text-7xl font-orbitron font-bold tracking-wider text-neonBlue drop-shadow-lg"
          delay={0.6}
          type="spin"
        />
        <AnimatedText
          text="Create, Mint, Trade in a Decentralized Cosmos"
          className="text-lg md:text-2xl mt-6 max-w-xl mx-auto font-poppins text-lightBlue drop-shadow-md"
          delay={1}
          type="fade"
        />
        <Link href="/generate">
          <motion.button
            className="mt-10 px-10 py-4 bg-neonPurple text-white font-orbitron rounded-full border-2 border-lightBlue relative overflow-hidden"
            whileHover={{
              scale: 1.2,
              rotate: 5,
              boxShadow: "0px 0px 30px rgba(64, 196, 255, 0.8)", // lightBlue glow
            }}
            whileTap={{ scale: 0.9 }}
            animate={{ scale: [1, 1.05, 1], transition: { duration: 1, repeat: Infinity } }}
          >
            <motion.div
              className="absolute inset-0 bg-lightBlue opacity-20"
              animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            START NOW
          </motion.button>
        </Link>
      </div>
    </motion.section>
  );
}