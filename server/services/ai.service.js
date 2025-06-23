import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey:process.env.GOOGLE_GEMINI_KEY});

async function generateContent(ques) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    systemInstruction:`
    You are a code reviewer, you have an expertise in code development and also provide the optimised code .
    
    Also tell us at the bottom the time complexity and space complexity of the code
    ` // can process 10,000 lines of code at a time
    ,
    contents: ques,
  });
  console.log(response.text);
  return response.text
}


export default generateContent;