import OpenAI from "openai";

import { config as env } from "dotenv";
env();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY,
});

export async function chatCompletion(
  prompt,
  systemMsg = "You are a helpful and funny comedian."
) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: systemMsg },
        { role: "user", content: prompt },
      ],
    });
    const answer = response.choices[0].message.content;
    return answer;
  } catch (error) {
    console.log(`ChatGPT Request Failed!`);
  }
}
