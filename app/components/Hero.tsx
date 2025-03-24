"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
      className="relative h-screen flex items-center justify-center bg-gradient-to-br from-neonBlue via-neonPurple to-black overflow-hidden"
    >
      {/* Animated Grid Background */}
      <motion.div
        className="absolute inset-0 bg-[url('/grid.png')] opacity-20"
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="text-center z-10">
        <AnimatedText
          text="AI-POWERED"
          className="text-5xl md:text-7xl font-orbitron font-bold tracking-wider text-white"
          delay={0.2}
          type="bounce"
        />
        <AnimatedText
          text="NFT MARKETPLACE"
          className="text-5xl md:text-7xl font-orbitron font-bold tracking-wider text-neonBlue"
          delay={0.6}
          type="spin"
        />
        <AnimatedText
          text="Create, Mint, Trade in a Decentralized Cosmos"
          className="text-lg md:text-2xl mt-6 max-w-xl mx-auto font-poppins text-gray-300"
          delay={1}
          type="fade"
        />
        <Link href="/generate">
          <motion.button
            className="mt-10 px-10 py-4 bg-neonPurple text-white font-orbitron rounded-full border-2 border-neonBlue"
            whileHover={{ scale: 1.2, rotate: 5, boxShadow: "0px 0px 25px rgba(212, 0, 255, 0.8)" }}
            whileTap={{ scale: 0.9 }}
            animate={{ scale: [1, 1.05, 1], transition: { duration: 1, repeat: Infinity } }}
          >
            START NOW
          </motion.button>
        </Link>
      </div>
    </motion.section>
  );
}