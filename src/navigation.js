import { router } from "./router.js";

export function navigateTo(path) {
  history.pushState({}, "", path);
  router();
}

document.addEventListener("click", (event) => {
  console.log("CLICL DETECTADO", event.target);
if (event.target.matches("a[data-link]")) {
  console.log("ES UN DATA-LINK");
    event.preventDefault();
    navigateTo(event.target.getAttribute("href"));
  }




});
