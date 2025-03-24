"use client";

import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";

export default function Footer() {
  return (
    <motion.footer
      className="py-8 bg-gray-900 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <AnimatedText
        text="© 2025 AI-Powered NFT Marketplace"
        className="text-gray-400 font-poppins"
        type="pulse"
        delay={0.5}
      />
    </motion.footer>
  );
}