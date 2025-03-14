import architectImg from "./assets/architect.png";

function contact() {
  const content = document.getElementById("content");
  content.innerHTML = "";
  content.className = "";

  content.classList.add("contentContact");

  const aboutUs = document.createElement("p");
  aboutUs.classList.add("mealsName");
  aboutUs.textContent = "About Us";

  const textAboutUs = document.createElement("p");
  textAboutUs.classList.add("textAboutUs");
  textAboutUs.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas labore optio officiis veniam fuga aliquid, culpa et ea sit ipsum reprehenderit dolorem totam voluptate doloribus distinctio recusandae sequi pariatur omnis. Vitae eius ipsa, adipisci veniam similique saepe! Optio, totam amet reiciendis ipsum reprehenderit ad voluptatum tenetur consequatur vitae id quia cumque sapiente, harum nisi dolor saepe deleniti exercitationem aut velit?Praesentium ratione quae, vel placeat obcaecati natus illo magnam unde earum hic aliquid! Minus obcaecati impedit deserunt suscipit voluptatibus nostrum, amet earum placeat ratione dicta voluptates, sed quam ipsa dolorem!";


  const imgArch = document.createElement("img");
  imgArch.classList.add("imgArch");
  imgArch.src = architectImg;
  imgArch.alt = "architect Image";





  content.appendChild(aboutUs);
  content.appendChild(textAboutUs)
  content.appendChild(imgArch)

}

export { contact };
