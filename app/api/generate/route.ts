import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { prompt } = await request.json();
  // Use 'prompt' (e.g., log it or pass it to an AI function)
  console.log(`Received prompt: ${prompt}`);
  // Placeholder response; replace with actual AI logic later
  return NextResponse.json({ message: `Generating image for: ${prompt}` });
}
