function chatView() {
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
  const messagesContainer = document.querySelector(".messages-container");

  button.addEventListener("click", async () => {
    const message = input.value.trim();

    if (message === "") {
      return;
    }

    input.value = "";

    messagesContainer.innerHTML += `
  <div class="message user">
    ${message}
  </div>
`;

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    const data = await response.json();
    console.log(data.reply);

    messagesContainer.innerHTML += `
  <div class="message deadpool">
    ${data.reply}
  </div>
`;
  });
}
