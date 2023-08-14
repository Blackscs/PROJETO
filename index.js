document.getElementById("button-menu").addEventListener("click", function() {
    var barraLateral = document.querySelector(".container-barraLateral");
    barraLateral.style.left = "0"; // Mostra a barra lateral definindo o valor "left" para 0
});

document.getElementById("closeMenuNav").addEventListener("click", function() {
    var barraLateral = document.querySelector(".container-barraLateral");
    barraLateral.style.left = "-320px"; // Mostra a barra lateral definindo o valor "left" para 0
});


const controls = document.querySelectorAll(".control"); //selecionando os botoes
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

controls.forEach((control) => {
    control.addEventListener("click", (e) => {
        isLeft = e.target.classList.contains("arrow-left");

            if (isLeft) {
                currentItem -= 4;
            } else {
                currentItem += 4;
            }

            if (currentItem >= maxItems) {
                currentItem = 0;
            }

            if (currentItem < 0) {
                currentItem = maxItems - 1;
            }

            items.forEach((item) => item.classList.remove("current-item"));
        items[currentItem].classList.add("current-item");
    });
});
