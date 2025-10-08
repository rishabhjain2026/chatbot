import dotenv from "dotenv";
import axios from "axios";
dotenv.config();

const API_KEY = process.env.OPENROUTER_API_KEY;

async function run() {
  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-3.5-turbo", // or any model you like
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          { role: "user", content: "give me some motivational lines on study" }
        ],
      },
      {
        headers: {
          "Authorization": `Bearer ${API_KEY}`,
          "HTTP-Referer": "http://localhost",     // required by OpenRouter
          "X-Title": "My Node App"                 // optional, name your app
        }
      }
    );

    console.log("llm says ",response.data.choices[0].message.content);
  } catch (error) {
    console.error("Error:", error.response ? error.response.data : error.message);
  }
}

run();
