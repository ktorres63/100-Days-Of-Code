console.log("hello world");

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let currentIndex = 0;

function goToSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
  dots.forEach((dot,i) =>{
    dot.classList.toggle("active", i === index);
  });
  currentIndex = index;
}
document.querySelector(".next").addEventListener("click", ()=>{
  const nextIndex = (currentIndex +1 )  % slides.length;
  goToSlide(nextIndex);
})
document.querySelector('.prev').addEventListener('click', () => {
  const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
  goToSlide(prevIndex);
});

dots.forEach((dot) => {
  dot.addEventListener("click", ()=> {
    goToSlide(parseInt(dot.dataset.slide))
  })
})