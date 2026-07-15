import { homeView } from "./home.js";

const app = document.getElementById("app");

export function router() {
  const path = window.location.pathname;

  if (path === "/home") {
    app.innerHTML = homeView();
  }
}
