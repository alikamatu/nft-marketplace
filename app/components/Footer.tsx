"use client";

import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";

export default function Footer() {
  return (
    <motion.footer
      className="py-8 bg-[linear-gradient(to_right,#1a1a2e,#111,#0f172a)] text-center"
    >
      <AnimatedText
        text="© 2025 AI-Powered NFT Marketplace"
        className="text-gray-400 font-poppins"
      />
    </motion.footer>
  );
}