import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey:process.env.GOOGLE_GEMINI_KEY});

async function generateContent(ques) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash", // can process 10,000 lines of code at a time
    contents: ques,
  });
  console.log(response.text);
  return response
}


export default generateContent;