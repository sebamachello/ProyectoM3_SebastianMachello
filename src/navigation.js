import { router } from "./router.js";

export function navigateTo(path) {
  history.pushState({}, "", path);
  router();
}

document.addEventListener("click", (event) => {
if (event.target.matches("a[data-link]")) {
    event.preventDefault();
    navigateTo(event.target.getAttribute("href"));
  }




});
