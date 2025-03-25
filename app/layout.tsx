import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fontPoppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// Enhanced SEO and Metadata
export const metadata: Metadata = {
  title: "AI-Powered NFT Marketplace | Create, Mint, Trade on ICP",
  description:
    "Discover a decentralized platform to create AI-generated art, mint unique NFTs on the Internet Computer Protocol (ICP), and trade them in a vibrant marketplace.",
  keywords:
    "AI NFT, NFT marketplace, Internet Computer Protocol, ICP, AI-generated art, decentralized, mint NFT, trade NFT, blockchain art",
  authors: [{ name: "xAI Team", url: "https://xai.com" }], // Adjust URL as needed
  creator: "xAI",
  publisher: "xAI",
  metadataBase: new URL("https://your-domain.com"), // Replace with your actual domain
  alternates: {
    canonical: "/", // Canonical URL for the homepage
  },
  openGraph: {
    title: "AI-Powered NFT Marketplace",
    description:
      "Create, mint, and trade AI-generated NFTs on ICP with our decentralized platform.",
    url: "https://your-domain.com", // Replace with your domain
    siteName: "AI-Powered NFT Marketplace",
    images: [
      {
        url: "/og-image.jpg", // Add an Open Graph image in /public
        width: 1200,
        height: 630,
        alt: "AI-Powered NFT Marketplace Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Powered NFT Marketplace",
    description:
      "Explore AI-generated NFTs on ICP. Create, mint, and trade in a decentralized ecosystem.",
    creator: "@xAI", // Replace with your Twitter handle
    images: ["/twitter-image.jpg"], // Add a Twitter image in /public
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico", // Ensure this exists in /public
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fontPoppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}