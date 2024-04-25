/*
CLASSES: 
- .containerCatalogo
    - slidesContainer
*/

const slides = document.querySelector(".containerSlides");
const slideWidth = slides.clientWidth; // 1000px
const lengthCards = slides.clientWidth / slides.children.length;
const children = slides.children.length;
let currentIndex = 0;

function newPosition(index) {
    currentIndex = index;
    const offset = -lengthCards * currentIndex;
    slides.style.transform = `translateX(${offset}px)`;
}

function nextSlide() {
    let newIndex = 0;
    if(currentIndex < children - 4){
        newIndex = currentIndex + 1;
    }
    newPosition(newIndex)
}

function prevSlide() {
    let newIndex = children - 4;
    if (currentIndex > 0) {
        newIndex = currentIndex - 1;
    }
    newPosition(newIndex)
}
