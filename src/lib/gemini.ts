import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY;

export const genAI = apiKey ? new GoogleGenAI({ apiKey }) : null;

export async function getChatResponse(message: string, history: { role: string; parts: { text: string }[] }[]) {
  if (!genAI) return "AI Assistant is currently unavailable.";

  const model = genAI.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: [
      {
        role: "user",
        parts: [{ text: "You are the AI Assistant for Dr. Bindra's Dental Care Centre in Ambala Cantt. Your goal is to help patients with information about services, booking appointments, and general dental advice. Be professional, warm, and helpful. If asked for a location, mention Ambala Cantt. If asked for services, mention scaling, root canal, implants, and tooth wear treatment. Do not provide medical diagnoses." }]
      },
      ...history.map(h => ({ role: h.role, parts: h.parts })),
      { role: "user", parts: [{ text: message }] }
    ],
    config: {
      tools: [{ googleSearch: {} }],
      toolConfig: { includeServerSideToolInvocations: true }
    }
  });

  const response = await model;
  return response.text || "I'm sorry, I couldn't process that.";
}
