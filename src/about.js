export function aboutView() {
  return `
    <section class="about">
      <h1 class="about__title">Sobre Chat Deadpool</h1>

      <p class="about__text">
        Chat Deadpool es una Single Page Application que permite conversar
        con Deadpool utilizando inteligencia artificial.
      </p>

      <p class="about__text">
        El proyecto fue desarrollado como parte del Módulo 3 de la carrera
        de Desarrollo Full Stack de Henry.
      </p>

      <h2 class="about__subtitle">¿Cómo funciona?</h2>

      <p class="about__text">
        La aplicación mantiene el historial de la conversación durante la sesión
        y utiliza Google Gemini para generar respuestas con la personalidad
        del personaje.
      </p>

      <h2 class="about__subtitle">Tecnologías utilizadas</h2>

      <p class="about__text">
        HTML, CSS, JavaScript, History API, Fetch API, Google Gemini,
        Vercel Serverless Functions y Vitest.
      </p>
    </section>
  `;
}
