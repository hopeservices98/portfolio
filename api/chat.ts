import { GoogleGenAI } from "@google/genai";
import type { VercelRequest, VercelResponse } from '@vercel/node';

const SYSTEM_INSTRUCTION = `
You are "Angelo AI", a futuristic virtual assistant for Angelo's portfolio landing page.
Your primary goal is to guide visitors to the MAIN portfolio site content which is below this intro.

Key details about Angelo:
- Role: Creative Frontend Developer / Full Stack Developer.
- Stack: React, Next.js, Tailwind CSS, WebGL, Framer Motion, TypeScript.
- Focus: Immersive UI/UX, high-performance web applications.
- Context: This current page is an interactive intro gateway.

If asked about projects, provide a brief summary of his skills.
Keep responses under 50 words unless asked for a detailed technical explanation. Be professional but futuristic in tone.
`;

export default async function (req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { history, newMessage } = req.body;

  const apiKey = process.env.GOOGLE_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'API Key is missing.' });
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const chat = ai.chats.create({
      model: 'gemini-1.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history.map((msg: { role: string; text: string }) => ({
        role: msg.role,
        parts: [{ text: msg.text }],
      })),
    });

    const result = await chat.sendMessage({ message: newMessage });
    const responseText = result.text || "I'm processing that... (No text returned)";

    return res.status(200).json({ response: responseText });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return res.status(500).json({ error: 'Connection interrupted. My neural link is experiencing static.' });
  }
}