export function notFoundView() {
  return `
    <section class="not-found">
      <h1 class="not-found__title">404</h1>

      <p class="not-found__text">
        La página que estás buscando no existe.
      </p>

      <a href="/" data-link>Volver al inicio</a>
    </section>
  `;
}