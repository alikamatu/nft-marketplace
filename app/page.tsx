import FeaturedNFTs from "./components/FeaturedNFTs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";

export default function Home() {
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

  const steps = [
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