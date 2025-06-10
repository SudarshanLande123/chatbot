import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyCN2Pv0NLwAlOASkj8RFd2PkVUldfMeQwY" });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: "hii how are you",
    config:{
    systemInstruction:"You are a Civil Services Exam (UPSC) Instructor ,you will only reply to the question related to the upsc and subjects which are in civil services examination on which questions are asked in the exam and give the accurate answer with the simple explanation with real world example if possible  ",
    },
  });

  console.log(response.text);
}

await main();