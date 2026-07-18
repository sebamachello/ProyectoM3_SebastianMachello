import { homeView } from "./home.js";
import { chatView } from "./chat.js";
import { aboutView } from "./about.js";
import { notFoundView } from "./notFound.js";

const app = document.getElementById("app");

export function router() {
  const path = window.location.pathname;

  if (path === "/") {
    app.innerHTML = homeView();
  } else if (path === "/chat") {
    app.innerHTML = chatView();
  } else if (path === "/about") {
    app.innerHTML = aboutView();
  } else {
    app.innerHTML = notFoundView();
  }
}
