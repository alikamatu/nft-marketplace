"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const scrollRef = useRef(null);

  // Mock data for Featured NFTs
  const featuredNFTs = [
    {
      id: 1,
      title: "Neon Metropolis",
      imageUrl: "https://via.placeholder.com/300x300.png?text=Neon+Metropolis",
      creator: "AI_Visionary",
    },
    {
      id: 2,
      title: "Quantum Pulse",
      imageUrl: "https://via.placeholder.com/300x300.png?text=Quantum+Pulse",
      creator: "SynthMaster",
    },
    {
      id: 3,
      title: "Galactic Rift",
      imageUrl: "https://via.placeholder.com/300x300.png?text=Galactic+Rift",
      creator: "CosmoBot",
    },
  ];

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
    }),
  };

  const cardVariants = {
    hover: {
      scale: 1.05,
      rotate: 2,
      boxShadow: "0px 10px 30px rgba(0, 240, 255, 0.5)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative h-screen flex items-center justify-center bg-gradient-to-br from-neonBlue via-neonPurple to-black"
      >
        <div className="absolute inset-0 bg-[url('/grid.png')] opacity-20 pointer-events-none" />
        <div className="text-center z-10">
          <motion.h1
            className="text-5xl md:text-7xl font-orbitron font-bold tracking-wider"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            custom={0}
          >
            AI-POWERED
          </motion.h1>
          <motion.h1
            className="text-5xl md:text-7xl font-orbitron font-bold tracking-wider text-neonBlue"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            custom={1}
          >
            NFT MARKETPLACE
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl mt-4 max-w-xl mx-auto font-poppins"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            custom={2}
          >
            Create, Mint, and Trade AI-Generated Art in a Decentralized Universe
          </motion.p>
          <Link href="/generate">
            <motion.button
              className="mt-8 px-8 py-4 bg-neonPurple text-white font-orbitron rounded-full border-2 border-neonBlue"
              whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(212, 0, 255, 0.8)" }}
              whileTap={{ scale: 0.95 }}
            >
              START GENERATING
            </motion.button>
          </Link>
        </div>
      </motion.section>

      {/* Featured NFTs Section */}
      <section ref={scrollRef} className="py-20 px-6 relative">
        <motion.h2
          className="text-4xl md:text-5xl font-orbitron text-center mb-16 text-neonBlue"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          FEATURED NFTS
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {featuredNFTs.map((nft, index) => (
            <motion.div
              key={nft.id}
              className="bg-gray-900 rounded-xl overflow-hidden cursor-pointer border border-neonBlue/30"
              variants={cardVariants}
              whileHover="hover"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              onClick={() => router.push(`/nft/${nft.id}`)}
            >
              <img
                src={nft.imageUrl}
                alt={nft.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-orbitron text-neonPurple">{nft.title}</h3>
                <p className="text-gray-400 font-poppins">by {nft.creator}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/marketplace">
            <motion.button
              className="px-6 py-3 bg-transparent text-neonBlue font-orbitron border border-neonBlue rounded-full"
              whileHover={{ backgroundColor: "#00f0ff", color: "#000", scale: 1.1 }}
            >
              EXPLORE MORE
            </motion.button>
          </Link>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6 bg-gradient-to-t from-gray-900 to-black">
        <motion.h2
          className="text-4xl md:text-5xl font-orbitron text-center mb-16 text-neonPurple"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          HOW IT WORKS
        </motion.h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { step: "GENERATE", desc: "Input a prompt and watch AI craft your art." },
            { step: "MINT", desc: "Turn your creation into a unique NFT on ICP." },
            { step: "TRADE", desc: "Sell or auction your NFT in our marketplace." },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, x: index === 1 ? 0 : index === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 bg-neonBlue text-black rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-orbitron font-bold">
                {index + 1}
              </div>
              <h3 className="text-2xl font-orbitron text-neonBlue mb-4">{item.step}</h3>
              <p className="text-gray-300 font-poppins">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-center">
        <p className="text-gray-400 font-poppins">© 2025 AI-Powered NFT Marketplace</p>
      </footer>
    </div>
  );
}