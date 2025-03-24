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
      rotateX: 10,
      rotateY: 15,
      boxShadow: "0px 20px 50px rgba(0, 240, 255, 0.7)",
      transition: { duration: 0.4 },
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
            className="bg-gray-900 rounded-xl overflow-hidden cursor-pointer border border-neonBlue/30 relative"
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
              whileHover={{ scale: 1.1, rotate: 5 }}
            />
            {/* Particle Burst on Hover */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              whileHover={{ opacity: 1 }}
              initial={{ opacity: 0 }}
            >
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-neonPurple rounded-full absolute"
                  initial={{ x: "50%", y: "50%" }}
                  whileHover={{
                    x: Math.random() * 200 - 100,
                    y: Math.random() * 200 - 100,
                    opacity: [1, 0],
                  }}
                  transition={{ duration: 0.5 }}
                />
              ))}
            </motion.div>
            <div className="p-6">
              <AnimatedText
                text={nft.title}
                className="text-2xl font-orbitron text-neonPurple"
                type="spin"
                delay={0.2}
              />
              <AnimatedText
                text={`by ${nft.creator}`}
                className="text-gray-400 font-poppins"
                type="bounce"
                delay={0.4}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}