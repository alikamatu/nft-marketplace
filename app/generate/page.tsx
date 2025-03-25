"use client";

import { useState } from "react";
import { motion, Variants, Transition } from "framer-motion";
import AnimatedText from "../components/AnimatedText";
import Image from "next/image";

export default function Generate() {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  // Glitch effect for text
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

  // 3D spin for button
  const buttonVariants = {
    idle: { scale: 1, rotateX: 0, rotateY: 0 },
    hover: {
      scale: 1.2,
      rotateX: [0, 10, -10, 0],
      rotateY: [0, 15, -15, 0],
      boxShadow: "0px 0px 30px rgba(0, 240, 255, 0.8)",
      transition: { duration: 0.6, repeat: Infinity },
    },
    tap: { scale: 0.9 },
  };

  // Image reveal with explosion effect
  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0, rotate: 180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 1, type: "spring", stiffness: 100 },
    },
  };

  const handleGenerate = async () => {
    setImageUrl("");
    setLoading(true);
    try {
      // Mock image generation (replace with API call later)
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setImageUrl("https://via.placeholder.com/400x400.png?text=AI+Masterpiece");
    } catch (error) {
      console.error("Error generating image:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-neonBlue to-neonPurple opacity-30"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Title with Glitch Effect */}
      <AnimatedText
        text="GENERATE YOUR ART"
        className="text-5xl md:text-7xl font-orbitron text-neonBlue mb-12"
      />
      <motion.div
        className="absolute top-10 left-10 text-neonPurple font-poppins text-lg"
        variants={glitchVariants}
        initial="hidden"
        animate="visible"
      >
        Powered by AI
      </motion.div>

      {/* Prompt Input with Slide and Glow */}
      <motion.div
        className="w-full max-w-lg relative"
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter a wild prompt (e.g., 'Cyberpunk dragon in a neon jungle')"
          className="w-full p-4 bg-gray-900 border-2 border-neonBlue rounded-lg text-white font-poppins focus:outline-none focus:border-neonPurple transition-all duration-300"
          rows={4}
          disabled={loading}
        />
        <motion.div
          className="absolute inset-0 rounded-lg pointer-events-none"
          animate={{ boxShadow: "0px 0px 20px rgba(0, 240, 255, 0.5)" }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" as const }}
        />
      </motion.div>

      {/* Generate Button with 3D Spin */}
      <motion.button
        onClick={!loading && prompt ? handleGenerate : undefined}
        variants={!loading && prompt ? buttonVariants : {}}
        initial="idle"
        whileHover={!loading && prompt ? "hover" : {}}
        whileTap={!loading && prompt ? "tap" : {}}
        className={`mt-8 px-10 py-4 font-orbitron text-white rounded-full border-2 ${
          loading || !prompt
            ? "bg-gray-600 border-gray-500 cursor-not-allowed"
            : "bg-neonPurple border-neonBlue"
        }`}
      >
        {loading ? (
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          >
            GENERATING...
          </motion.span>
        ) : (
          <AnimatedText text="CREATE NOW" type="bounce" className="text-lg" />
        )}
      </motion.button>

      {/* Image Preview with Explosion Effect */}
      {imageUrl && (
        <motion.div
          className="mt-12 w-full max-w-lg relative"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="relative w-full h-96">
            <Image
              src={imageUrl}
              alt="Generated Art"
              fill
              className="rounded-lg border-4 border-neonPurple object-cover"
            />
          </div>
          <motion.div
            className="absolute inset-0 rounded-lg pointer-events-none"
            animate={{ opacity: [0, 0.5, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ boxShadow: "0px 0px 40px rgba(212, 0, 255, 0.7)" }}
          />
          <motion.button
            className="mt-6 px-8 py-3 bg-neonBlue text-black font-orbitron rounded-full"
            whileHover={{ scale: 1.15, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => alert("Minting coming soon!")}
          >
            <AnimatedText text="MINT NFT" type="spin" />
          </motion.button>
        </motion.div>
      )}
    </div>
  );
}
