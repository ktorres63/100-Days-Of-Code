import "./styles.css";
import bgImage from "./assets/background.png"
import * as contact from "./contact.js"
import * as menu from "./menu.js"

const content = document.getElementById("content");

const btnHome = document.getElementById("btnHome");
const btnMenu = document.getElementById("btnMenu");
const btnAbout = document.getElementById("btnAbout")

function home(){
  content.innerHTML = "";
  content.className = "";

  content.classList.add("contentHome")

  const discoverTxt = document.createElement("p");
  discoverTxt.classList.add("discover");

  const restName = document.createElement("p");
  restName.classList.add("restName");

  discoverTxt.textContent = "Discover";
  restName.textContent = "nique.";

  content.appendChild(discoverTxt);
  content.appendChild(restName);
}

home();

btnHome.addEventListener("click", () => {
 home()
});

btnMenu.addEventListener("click", () => {
  menu.menu();
});

btnAbout.addEventListener("click", () => {
  contact.contact();
});




console.log("Hello World")
