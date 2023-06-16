function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}

const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Variables pour la navigation
let counter = 1;
const slideWidth = carouselImages[0].clientWidth;

// Déplacer le carrousel à l'image suivante
function moveToNextSlide() {
    if (counter >= carouselImages.length - 2) return;
    carouselSlide.style.transition = "transform 0.5s ease-in-out";
    counter++;
    carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
}

// Déplacer le carrousel à l'image précédente
function moveToPrevSlide() {
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.5s ease-in-out";
    counter--;
    carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
}

// Événements pour la navigation
document.addEventListener("DOMContentLoaded", () => {
    carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
});

// Écouteurs d'événements pour les boutons de navigation
nextBtn.addEventListener("click", moveToNextSlide);
prevBtn.addEventListener("click", moveToPrevSlide);
