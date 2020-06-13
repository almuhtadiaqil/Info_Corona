import "regenerator-runtime";
import "./assets/css/bootstrap.css";
import "jquery";
import "bootstrap";
import "./src/styles/style.css";
import "./src/script/component/app-bar.js";
import "./src/script/component/side-bar.js";
import main from "./src/script/view/main.js";
document.addEventListener("DOMContentLoaded", main);