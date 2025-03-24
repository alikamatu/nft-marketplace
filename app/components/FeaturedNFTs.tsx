"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";

interface NFT {
  id: number;
  title: string;
  imageUrl: string;
  creator: string;
}

interface FeaturedNFTsProps {
  nfts: NFT[];
}

export default function FeaturedNFTs({ nfts }: FeaturedNFTsProps) {
  const router = useRouter();

  const cardVariants = {
    hover: {
      scale: 1.1,
      rotate: [0, 5, -5, 0],
      boxShadow: "0px 15px 40px rgba(0, 240, 255, 0.6)",
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 px-6 relative bg-black">
      <AnimatedText
        text="FEATURED NFTS"
        className="text-4xl md:text-5xl font-orbitron text-center mb-16 text-neonBlue"
        type="pulse"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {nfts.map((nft, index) => (
          <motion.div
            key={nft.id}
            className="bg-gray-900 rounded-xl overflow-hidden cursor-pointer border border-neonBlue/30"
            variants={cardVariants}
            whileHover="hover"
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            onClick={() => router.push(`/nft/${nft.id}`)}
          >
            <motion.img
              src={nft.imageUrl}
              alt={nft.title}
              className="w-full h-64 object-cover"
              whileHover={{ scale: 1.05 }}
            />
            <div className="p-6">
              <AnimatedText
                text={nft.title}
                className="text-2xl font-orbitron text-neonPurple"
                type="fade"
                delay={0.2}
              />
              <AnimatedText
                text={`by ${nft.creator}`}
                className="text-gray-400 font-poppins"
                type="fade"
                delay={0.4}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}