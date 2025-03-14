
import noodleSoupImg from "./assets/noodleSoup.png";
import pumpinkSoupImg from "./assets/pumpinkSoup.png";
import tomatoToastImg from "./assets/tomatoToast.png";
import appleBreeImg from "./assets/appleB.png";
import pathouseTonicImg from "./assets/frenchmanD.png";



class Dish {
  constructor(name, img, description, price) {
    this.name = name;
    this.img = img;
    this.description = description;
    this.price = price;
  }

  createElement() {
    const dishContainer = document.createElement("div");
    dishContainer.classList.add("dish");

    const imgElement = document.createElement("img");
    imgElement.src = this.img;
    imgElement.alt = this.name;
    imgElement.classList.add("dishImage");

    const nameElement = document.createElement("p");
    nameElement.textContent = this.name;
    nameElement.classList.add("dishName");

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = this.description;
    descriptionElement.classList.add("dishDescription");

    const priceElement = document.createElement("p");
    priceElement.textContent = `$ ${this.price}`;
    priceElement.classList.add("dishPrice");

    dishContainer.appendChild(imgElement);
    dishContainer.appendChild(nameElement);
    dishContainer.appendChild(descriptionElement);
    dishContainer.appendChild(priceElement);

    return dishContainer;
  }
}

function menu() {
  const content = document.getElementById("content");
  content.innerHTML = "";
  content.className = "";

  content.classList.add("contentMenu");

  const starters = document.createElement("p");
  starters.classList.add("mealsName");
  starters.textContent = "Starters";

  const drinks = document.createElement("p");
  drinks.classList.add("mealsName");
  drinks.textContent = "Drinks";

  const starter0 = new Dish(
    "Tomato Toast",
    tomatoToastImg,
    "Crispy toasted bread topped with fresh tomatoes, olive oil, basil, and a touch of garlic.",
    6.99
  );

  const starter1 = new Dish(
    "Noodle Soup",
    noodleSoupImg,
    "A comforting bowl of hot broth with tender noodles, fresh vegetables, and aromatic herbs.",
    9.99
  );
  const starter2 = new Dish(
    "Pumpkin Soup",
    pumpinkSoupImg,
    "A creamy and rich pumpkin soup, seasoned with warm spices.",
    8.49
  );


  const drink0 = new Dish(
    "Panthouse Tonic",
    pathouseTonicImg,
    "A refreshing blend of premium gin, tonic water, and a hint of citrus, served over ice.",
    5.00
  );

  const drink1 = new Dish(
    "Apple Breeze",
    appleBreeImg,
    "A crisp and fruity mix of apple juice, soda water, and a touch of mint for a refreshing taste",    
    5.00
  );


  content.appendChild(starters)
  content.appendChild(starter0.createElement());
  content.appendChild(starter1.createElement());
  content.appendChild(starter2.createElement());
  content.appendChild(drinks)
  content.appendChild(drink0.createElement());
  content.appendChild(drink1.createElement());
}

export { menu };
