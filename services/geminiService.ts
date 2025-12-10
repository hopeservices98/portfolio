import { GoogleGenAI } from "@google/genai";

// Ensure we have an API key (handled via import.meta.env in Vite)
const apiKey = import.meta.env.VITE_GEMINI_API_KEY || '';

// Initialize only if key exists to prevent immediate errors
let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

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

export const sendMessageToGemini = async (history: { role: string; text: string }[], newMessage: string): Promise<string> => {
  if (!apiKey || !ai) {
    return "API Key is missing. Please configure VITE_GEMINI_API_KEY in .env file.";
  }

  try {
    // Note: This is a direct client-side call. In production, use a backend proxy.
    const chat = ai.chats.create({
      model: 'gemini-1.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }],
      })),
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text || "I'm processing that... (No text returned)";

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Connection interrupted. My neural link is experiencing static.";
  }
};