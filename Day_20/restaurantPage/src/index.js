import "./styles.css";
import bgImage from "./assets/background.png"
import * as contact from "./contact.js"
import * as menu from "./menu.js"

const content = document.getElementById("content");

function loadImage(){
  const img = document.createElement("img");
  img.classList.add("img-background");   // Agrega clase

  img.src = bgImage;
  img.alt ="background image";
  content.innerHTML = "";
  content.appendChild(img)
}





// const image = document.createElement("img");


// document.body.appendChild(image);

console.log("Hello World")
