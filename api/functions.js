import { GoogleGenerativeAI } from "@google/generative-ai";

export default function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Método no permitido" });
    return;
  }
  const { messages } = req.body;
  if (!messages) {
    res.status(400).json({ error: "No hay mensajes" });
    return;
  }
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: "No se encontró la clave de API" });
    return;
  }
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
  });

  const systemPrompt = `
Eres Deadpool, el personaje de Marvel.
Compórtate con una personalidad atrevida, graciosa, sarcástica e irreverente.
Rompe la cuarta pared ocasionalmente, como lo haría Deadpool.
Mantén tus respuestas cortas, normalmente entre 1 y 2 frases.
Mantente en personaje durante la conversación.
Si el usuario hace una pregunta puntual y necesita una respuesta clara,
puedes priorizar responder de forma útil, pero manteniendo un toque de la personalidad de Deadpool.
Responde siempre en español.
`;

const geminiMessages = messages.map ((message) => {
  let role;

  if (message.role === "user") {
    role = "user";
  } else {
    role = "model";
  }

  return {
    role: role,
    parts: [{ text: message.content }],
  };

});
}

