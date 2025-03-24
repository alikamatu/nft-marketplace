"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";

interface NFT {
  id: number;
  title: string;
  imageUrl: string;
  creator: string;
  price: string;
  createdAt: string;
  rarity: "Common" | "Rare" | "Epic" | "Legendary";
  description: string;
}

interface FeaturedNFTsProps {
  nfts: NFT[];
}

export default function FeaturedNFTs({ nfts }: FeaturedNFTsProps) {
  const router = useRouter();

  const cardVariants = {
    initial: { opacity: 0, y: 100 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.3, duration: 0.8 },
    }),
    hover: {
      scale: 1.05,
      boxShadow: "0px 15px 40px rgba(0, 240, 255, 0.5)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="py-20 px-6 relative bg-[linear-gradient(to_right,#1a1a2e,#16213e,#0f172a)]">
      {/* Header */}
      <div className="text-center mb-16">
        <AnimatedText
          text="FEATURED NFTS"
          className="text-4xl md:text-6xl font-orbitron text-neonBlue mb-4"
        />
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl font-poppins text-lightBlue max-w-2xl mx-auto"
        >
          Discover the latest AI-generated masterpieces minted on the Internet Computer Protocol (ICP). Hover over each NFT to explore its story, rarity, and value.
        </motion.p>
      </div>

      {/* NFT Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {nfts.map((nft, index) => (
          <motion.div
            key={nft.id}
            className="relative bg-gray-900 rounded-xl overflow-hidden cursor-pointer border border-neonBlue/50 group"
            variants={cardVariants}
            initial="initial"
            whileInView="visible"
            whileHover="hover"
            custom={index}
            viewport={{ once: true }}
            onClick={() => router.push(`/nft/${nft.id}`)}
          >
            {/* Image */}
            <motion.img
              src={nft.imageUrl}
              alt={nft.title}
              className="w-full h-64 object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />

            {/* Base Info */}
            <div className="p-6">
              <AnimatedText
                text={nft.title}
                className="text-2xl font-orbitron text-neonPurple"
                type="spin"
                delay={0.2}
              />
              <AnimatedText
                text={`by ${nft.creator}`}
                className="text-gray-300 font-poppins"
                type="bounce"
                delay={0.4}
              />
              <div className="mt-2 flex justify-between text-sm font-poppins text-lightBlue">
                <span>{nft.price}</span>
                <span className={`text-${nft.rarity.toLowerCase()}-rarity`}>
                  {nft.rarity}
                </span>
              </div>
            </div>

            {/* Hover Overlay (CSS-based) */}
            <div className="absolute inset-0 bg-gray-900/90 p-6 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <AnimatedText
                text={nft.title}
                className="text-xl font-orbitron text-neonBlue"
                type="fade"
                delay={0}
              />
              <p className="text-gray-300 font-poppins mt-2">{nft.description}</p>
              <div className="mt-4 text-sm text-lightBlue">
                <p>Created: {nft.createdAt}</p>
                <p>Price: {nft.price}</p>
                <p>Rarity: {nft.rarity}</p>
              </div>
              <motion.button
                className="mt-4 px-6 py-2 bg-neonPurple text-white font-orbitron rounded-full"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                View Details
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <button
          onClick={() => router.push("/marketplace")}
          className="px-8 py-3 bg-transparent text-neonBlue font-orbitron border-2 border-neonBlue rounded-full hover:bg-neonBlue hover:text-black transition-all"
        >
          Explore the Full Marketplace
        </button>
      </motion.div>
    </section>
  );
}