import dotenv from "dotenv";
import { OpenAI } from "openai";

dotenv.config();

const SYSTEM_PROMPT = `Based on the given skincare concersn return a recommended skincare routine and active ingredients`;

const client = new OpenAI({
  baseURL: "https://router.huggingface.co/v1",
  apiKey: process.env.HF_ACCESS_TOKEN,
});

export async function getSkincare(concerns) {
  const concernsString = concerns.join(", ");

  try {
    const completion = await client.chat.completions.create({
      model: "moonshotai/Kimi-K2-Instruct-0905",
      messages: [
        {
          role: "system",
          content: SYSTEM_PROMPT,
        },
        {
          role: "user",
          content: `I have ${concernsString}. Please give me a recipe you'd recommend I make!`,
        },
      ],
      max_tokens: 1024,
    });

    const skincareText = completion.choices[0]?.message?.content;
    if (skincareText) {
      return skincareText;
    }

    return completion;
  } catch (err) {
    console.error("Error:", err.message);
    throw err;
  }
}
