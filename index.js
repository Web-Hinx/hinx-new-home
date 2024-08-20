
const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");
const discussBtn = document.querySelector(".discuss");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
  if (discussBtn) {
    discussBtn.classList.toggle("active");
  }
});

const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;
const totalItems = carouselItems.length;

function moveCarousel() {
    currentIndex++;
    if (currentIndex >= totalItems) {
        currentIndex = 0;
    }
    const offset = -currentIndex * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;
}


setInterval(moveCarousel, 3000);

const stylishCarousel = document.querySelector('.carousel-content');
const stylishSlides = document.querySelectorAll('.carousel-slide');
let stylishIndex = 0;
const totalStylishSlides = stylishSlides.length;

function moveStylishCarousel() {
    stylishIndex++;
    if (stylishIndex >= totalStylishSlides) {
        stylishIndex = 0;
    }
    const offset = -stylishIndex * 100;
    stylishCarousel.style.transform = `translateX(${offset}%)`;
}


setInterval(moveStylishCarousel, 5000);
