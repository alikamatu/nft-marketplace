import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { prompt } = req.body;
    // Call Python AI backend here (e.g., via HTTP request or subprocess)
    const imageUrl = "https://via.placeholder.com/400x400.png?text=AI+Art"; // Placeholder
    res.status(200).json({ url: imageUrl });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}