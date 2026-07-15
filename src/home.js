export function homeView() {
  return `
    <section class="home">
      <img
        class="home__image"
        src="./assets/deadpool.png"
        alt="Deadpool"
      >

      <h1 class="home__title">Chat con Deadpool</h1>

      <p class="home__description">
        Conversa con el mercenario mas irreverente del universo.
      </p>

      <a href="/chat" class="home__button" data-link>
        Comenzar a chatear
      </a>
    </section>
  `;
}
