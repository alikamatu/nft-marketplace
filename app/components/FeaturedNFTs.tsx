"use client";

import { motion, Variants } from "framer-motion";
import AnimatedText from "./AnimatedText";
import { useRouter } from "next/navigation";

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

  const cardVariants: Variants = {
    initial: { opacity: 0, y: 100 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.3, duration: 0.8 },
    }),
    hover: {
      scale: 1.05,
      boxShadow: "0px 15px 40px rgba(0, 240, 255, 0.5), 0px 0px 60px rgba(212, 0, 255, 0.4)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="py-20 px-6 relative bg-[linear-gradient(45deg,#1a2a44,#0a0a1a,#1a2a44_90%)] overflow-hidden">
      {/* Holographic Overlay */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,240,255,0.1)_0%,transparent_70%)] opacity-20"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="flex w-full items-center justify-center mb-16">
      <AnimatedText
        text="FEATURED NFTS"
        className="text-4xl md:text-6xl font-orbitron text-neonBlue mb-16 text-center drop-shadow-[0_0_20px_rgba(0,240,255,0.9)] glitch-border"
        type="pulse"
      />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {nfts.map((nft, index) => (
          <motion.div
            key={nft.id}
            className="relative bg-gray-900/80 backdrop-blur-md rounded-xl overflow-hidden cursor-pointer border-2 border-neonBlue/30 group glitch-border"
            variants={cardVariants}
            initial="initial"
            whileInView="visible"
            whileHover="hover"
            custom={index}
            viewport={{ once: true }}
            onClick={() => router.push(`/nft/${nft.id}`)}
          >
            <motion.img
              src={nft.imageUrl}
              alt={nft.title}
              className="w-full h-64 object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            {/* Holographic Glow */}
            <motion.div
              className="absolute inset-0 pointer-events-none bg-gradient-to-t from-neonBlue/20 to-transparent opacity-0 group-hover:opacity-50"
              transition={{ duration: 0.3 }}
            />
            <div className="p-6">
              <AnimatedText
                text={nft.title}
                className="text-2xl font-orbitron text-neonPurple drop-shadow-[0_0_10px_rgba(212,0,255,0.8)]"
                type="spin"
                delay={0.2}
              />
              <AnimatedText
                text={`by ${nft.creator}`}
                className="text-gray-400 font-poppins glitch-border-subtle"
                type="bounce"
                delay={0.4}
              />
              <div className="mt-2 flex justify-between text-sm font-poppins text-gray-300">
                <span>{nft.price}</span>
                <span className={`text-${nft.rarity.toLowerCase()}-rarity`}>{nft.rarity}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}