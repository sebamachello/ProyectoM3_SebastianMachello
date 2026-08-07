import { isValidMessage } from "./utils.js";

const messages = [];

export function chatView() {
  return `
    <section class="chat">
      <h1 class="chat__title">Chat con Deadpool</h1>

      <div class="messages-container">
        <!-- Acá se van a mostrar los mensajes -->
      </div>

      <div class="input-container">
        <input
          type="text"
          id="message-input"
          placeholder="Escribí tu mensaje..."
        />

        <button id="send-button">
          Enviar
        </button>
      </div>
    </section>
  `;
}

export function initializeChat() {
  const button = document.getElementById("send-button");
  const input = document.getElementById("message-input");

  button.addEventListener("click", async () => {
    const message = input.value.trim();

    if (!isValidMessage(message)) {
      return;
    }

    input.value = "";

    messages.push({
      role: "user",
      content: message,
    });

    renderMessages();

    const fakeReply = "¡Hola! Soy Deadpool, el mercenario bocazas. ¿En qué puedo ayudarte hoy?";
    messages.push({
      role: "deadpool",
      content: fakeReply,
    });
    renderMessages();

    /* const response = await fetch("/api/functions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    const data = await response.json();

    messages.push({
      role: "deadpool",
      content: data.reply,
    });

    renderMessages();
    */

  });
}

export function renderMessages() {
  const messagesContainer = document.querySelector(".messages-container");
  messagesContainer.innerHTML = "";
  messages.forEach((message) => {
    messagesContainer.innerHTML += `
          <div class="message ${message.role}">
            ${message.content}
          </div>
        `;
  });
}
