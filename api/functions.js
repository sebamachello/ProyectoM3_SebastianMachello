import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
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

  const model = genAI.getGenerativeModel({
    model: "gemini-3.6-flash",
    systemInstruction: systemPrompt,
  });

  const previousMessages = messages.slice(0, messages.length - 1);

  const geminiMessages = previousMessages.map((message) => {
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
try {
  const chat = model.startChat({
    history: geminiMessages,
  });
  const lastMessage = messages[messages.length - 1];
  const result = await chat.sendMessage(lastMessage.content);
  const response = result.response;
  const reply = response.text();
  res.status(200).json({ reply });
} catch (error) {
  console.error("Error al enviar mensaje a Gemini:", error);
  res.status(500).json({ error: "Error al procesar la solicitud" });
}
}
