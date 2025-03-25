"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import AnimatedText from "../components/AnimatedText";
import Image from "next/image";
import { HttpAgent, Actor } from "@dfinity/agent";
import { idlFactory } from "../../lib/nft_marketplace_ai.did";

// Header Component
function Header() {
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

  return (
    <div className="relative text-center mb-12">
      <AnimatedText
        text="GENERATE YOUR ART"
        className="text-5xl md:text-7xl font-orbitron text-neonBlue drop-shadow-[0_0_20px_rgba(0,240,255,0.8)]"
        type="pulse"
      />
      <motion.div
        className="absolute top-0 left-10 text-neonPurple font-poppins text-lg md:text-xl"
        variants={glitchVariants}
        initial="hidden"
        animate="visible"
      >
        Powered by AI
      </motion.div>
    </div>
  );
}

// Input Section Component
function InputSection({ prompt, setPrompt, loading }: { prompt: string; setPrompt: (value: string) => void; loading: boolean }) {
  const inputGlowVariants: Variants = {
    idle: { boxShadow: "0px 0px 20px rgba(0, 240, 255, 0.5)" },
    focus: {
      boxShadow: "0px 0px 40px rgba(0, 240, 255, 1), 0px 0px 60px rgba(212, 0, 255, 0.8)",
      scale: 1.02,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      className="w-full max-w-lg relative"
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter a wild prompt (e.g., 'Cyberpunk dragon in a neon jungle')"
        className="w-full p-5 bg-gray-900/80 backdrop-blur-md border-2 border-neonBlue rounded-xl text-white font-poppins text-lg focus:outline-none focus:border-neonPurple transition-all duration-300 resize-none glowing-input"
        rows={4}
        disabled={loading}
      />
      {/* Glowing Overlay */}
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none"
        variants={inputGlowVariants}
        initial="idle"
        animate={prompt && !loading ? "focus" : "idle"}
      />
      {/* Orbiting Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-neonBlue rounded-full"
          initial={{ x: "50%", y: "50%" }}
          animate={{
            x: [0, Math.cos(i * Math.PI / 3) * 100, 0],
            y: [0, Math.sin(i * Math.PI / 3) * 100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{ duration: 2 + i * 0.2, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </motion.div>
  );
}

// Generate Button Component
function GenerateButton({ onClick, loading, disabled }: { onClick: () => void; loading: boolean; disabled: boolean }) {
  const buttonVariants: Variants = {
    idle: { scale: 1, rotateX: 0, rotateY: 0 },
    hover: {
      scale: 1.15,
      rotateX: [0, 15, -15, 0],
      rotateY: [0, 20, -20, 0],
      boxShadow: "0px 0px 40px rgba(0, 240, 255, 1), 0px 0px 60px rgba(212, 0, 255, 0.8)",
      transition: { duration: 0.8, repeat: Infinity },
    },
    tap: { scale: 0.95, rotate: 5 },
  };

  return (
    <motion.button
      onClick={!disabled ? onClick : undefined}
      variants={!disabled ? buttonVariants : {}}
      initial="idle"
      whileHover={!disabled ? "hover" : {}}
      whileTap={!disabled ? "tap" : {}}
      className={`mt-10 px-12 py-5 font-orbitron text-white text-xl rounded-full border-2 ${
        loading || disabled
          ? "bg-gray-700 border-gray-600 cursor-not-allowed"
          : "bg-neonPurple border-neonBlue"
      } relative overflow-hidden`}
    >
      {loading ? (
        <motion.span
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        >
          GENERATING...
        </motion.span>
      ) : (
        <AnimatedText text="CREATE NOW" type="bounce" className="text-xl" />
      )}
      {/* Inner Glow Effect */}
      {!disabled && (
        <motion.div
          className="absolute inset-0 bg-neonBlue opacity-20"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      )}
    </motion.button>
  );
}

// Image Preview Component
function ImagePreview({ imageUrl }: { imageUrl: string }) {
  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0, rotate: 180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 1.2, type: "spring", stiffness: 120 },
    },
  };

  return (
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
          className="rounded-xl border-4 border-neonPurple object-cover drop-shadow-[0_0_20px_rgba(212,0,255,0.8)]"
          unoptimized
        />
      </div>
      {/* Pulsating Glow */}
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none"
        animate={{ opacity: [0, 0.6, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ boxShadow: "0px 0px 50px rgba(212, 0, 255, 0.9)" }}
      />
      {/* Mint Button */}
      <motion.button
        className="mt-8 px-10 py-4 bg-neonBlue text-black font-orbitron text-lg rounded-full relative overflow-hidden"
        whileHover={{ scale: 1.2, rotate: 360 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => alert("Minting coming soon!")}
      >
        <AnimatedText text="MINT NFT" type="spin" />
        <motion.div
          className="absolute inset-0 bg-white opacity-20"
          animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.button>
    </motion.div>
  );
}

export default function GeneratePage() {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);


  const agent = new HttpAgent({ host: "http://localhost:4943" }); // Local replica; use "https://ic0.app" for mainnet
  const canisterId = "rrkah-fqaaa-aaaaa-aaaaq-cai"; // Replace with your canister ID
  const actor = Actor.createActor(idlFactory, { agent, canisterId });

  const handleGenerate = async () => {
    if (!prompt) return;
    setImageUrl("");
    setLoading(true);
    try {
      const result = await actor.generateArt(prompt);
      if ('ok' in result) {
        setImageUrl(result.ok);
      } else if ('err' in result) {
        console.error("Generation error:", result.err);
        setImageUrl("https://via.placeholder.com/400x400.png?text=Error+" + encodeURIComponent(result.err));
      }
    } catch (error) {
      console.error("Error generating art:", error);
      setImageUrl("https://via.placeholder.com/400x400.png?text=Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8 overflow-hidden relative">
      {/* Linear Luminous Moon Background */}
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(45deg,#1a1a2e_0%,#2a4066_50%,#1a1a2e_100%)]"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Moon Glow */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-neonBlue/30 to-transparent rounded-full"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
          boxShadow: "0px 0px 100px rgba(0, 240, 255, 0.5)",
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <Header />
      <InputSection prompt={prompt} setPrompt={setPrompt} loading={loading} />
      <GenerateButton onClick={handleGenerate} loading={loading} disabled={!prompt || loading} />
      {imageUrl && <ImagePreview imageUrl={imageUrl} />}
    </div>
  );
}