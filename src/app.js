import { router } from "./router.js";
import "./navigation.js";

window.addEventListener("popstate", router);


router()