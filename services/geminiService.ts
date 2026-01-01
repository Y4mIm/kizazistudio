
import { GoogleGenAI } from "@google/genai";

// Safeguard against 'process' not being defined in browser environments
const getApiKey = () => {
  try {
    return typeof process !== 'undefined' ? process.env.API_KEY : '';
  } catch (e) {
    return '';
  }
};

const ai = new GoogleGenAI({ apiKey: getApiKey() || '' });

export const generateStudioManifesto = async (): Promise<string> => {
  const apiKey = getApiKey();
  if (!apiKey) {
    return "Forging digital legacies with precision and artistic vision for the future.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: "Write a high-end, 1-sentence minimalistic manifesto for a creative studio named Kizazi Studios. Use words like 'vision', 'legacy', 'future', and 'precision'. Ensure it sounds premium.",
      config: {
        temperature: 0.9,
        topP: 0.95,
      }
    });
    return response.text?.trim() || "Crafting digital legacies with precision and artistic vision for the future.";
  } catch (error) {
    console.error("Error generating manifesto:", error);
    return "Crafting digital legacies with precision and artistic vision for the future.";
  }
};

export const generateDetailedServiceInfo = async (serviceTitle: string): Promise<string> => {
  const apiKey = getApiKey();
  if (!apiKey) {
    return "Our approach combines local soul with international standards, ensuring every frame tells a story of precision.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Write a 3-paragraph sophisticated breakdown of how Kizazi Studios approaches "${serviceTitle}". Discuss innovation, the Malawian creative context, and global excellence. Use a tone that is bold, artistic, and premium.`,
    });
    return response.text?.trim() || "Our approach combines local soul with international standards, ensuring every frame tells a story of precision.";
  } catch (error) {
    return "Our approach combines local soul with international standards, ensuring every frame tells a story of precision.";
  }
};
