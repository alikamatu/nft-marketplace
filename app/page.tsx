import FeaturedNFTs from "./components/FeaturedNFTs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";

// Define the NFT type with specific rarity values
type NFT = {
  id: number;
  title: string;
  imageUrl: string;
  creator: string;
  price: string;
  createdAt: string;
  rarity: "Common" | "Rare" | "Epic" | "Legendary";
  description: string;
};

// Define the Step type for HowItWorks component
type Step = {
  step: string;
  desc: string;
};

export default function Home() {
    const featuredNFTs: NFT[] = [
      {
        id: 1,
        title: "Neon Metropolis",
        imageUrl: "/images/card.jpg",
        creator: "AI_Visionary",
        price: "0.5 ICP",
        createdAt: "2025-03-20",
        rarity: "Rare",
        description: "A sprawling cityscape glowing with neon lights, crafted by advanced AI.",
      },
      {
        id: 2,
        title: "Quantum Pulse",
        imageUrl: "/images/card.jpg",
        creator: "SynthMaster",
        price: "1.2 ICP",
        createdAt: "2025-03-22",
        rarity: "Epic",
        description: "An electrifying burst of quantum energy, visualized by AI.",
      },
      {
        id: 3,
        title: "Galactic Rift",
        imageUrl: "/images/card.jpg",
        creator: "CosmoBot",
        price: "2.0 ICP",
        createdAt: "2025-03-23",
        rarity: "Legendary",
        description: "A cosmic tear in spacetime, imagined by an AI explorer.",
      },
    ];
  
    const steps: Step[] = [
      { step: "GENERATE", desc: "Input a prompt and watch AI craft your art." },
      { step: "MINT", desc: "Turn your creation into a unique NFT on ICP." },
      { step: "TRADE", desc: "Sell or auction your NFT in our marketplace." },
    ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Hero />
      <FeaturedNFTs nfts={featuredNFTs} />
      <HowItWorks steps={steps} />
      <Footer />
    </div>
  );
}
