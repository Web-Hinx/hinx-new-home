
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

//newsletter
document.getElementById('newsletter-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const responseMessage = document.getElementById('response-message');

  // Simple email validation
  if (validateEmail(email)) {
      // Simulate a successful subscription
      responseMessage.textContent = 'Thank you for subscribing!';
      responseMessage.style.color = '#28a745';
  } else {
      responseMessage.textContent = 'Please enter a valid email address.';
      responseMessage.style.color = '#d9534f';
  }
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

