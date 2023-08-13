document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("button-menu").addEventListener("click", function() {
        var barraLateral = document.querySelector(".container-barraLateral");
        barraLateral.style.left = "0"; // Mostra a barra lateral definindo o valor "left" para 0
    });

    document.getElementById("closeMenuNav").addEventListener("click", function() {
        var barraLateral = document.querySelector(".container-barraLateral");
        barraLateral.style.left = "-320px"; // Mostra a barra lateral definindo o valor "left" para 0
    });
});