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