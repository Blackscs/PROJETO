function escolherCorPreto() {
    document.getElementById('img-principal').src = 'IMAGENS/IphonePreto.png';
    document.getElementById('textoTitulo').textContent = "Apple iPhone 14 Pro Max 128GB Preto-Espacial 6,7” 48MP";
}
function escolherCorRoxo() {
    document.getElementById('img-principal').src = 'IMAGENS/IphoneRoxo.png';
    document.getElementById('textoTitulo').textContent = "Apple iPhone 14 Pro Max 128GB Roxo-Profundo 6,7” 48MP";
}
function escolherCorBranco() {
    document.getElementById('img-principal').src = 'IMAGENS/IphoneBranco.png';
    document.getElementById('textoTitulo').textContent = "Apple iPhone 14 Pro Max 128GB Prata 6,7” 48MP";
}
function escolherCorDourado() {
    document.getElementById('img-principal').src = 'IMAGENS/IphoneDourado.png';
    document.getElementById('textoTitulo').textContent = "Apple iPhone 14 Pro Max 128GB Dourado 6,7” 48MP";
}


function TB1() {
    document.getElementById("arm-int").textContent = "Armazenamento Interno: 1TB";
    document.getElementById("depois").textContent = "R$ 17.595,00";
}
function GB128() {
    document.getElementById("arm-int").textContent = "Armazenamento Interno: 128GB";
    document.getElementById("depois").textContent = "R$ 8.320,00";
}
function GB256() {
    document.getElementById("arm-int").textContent = "Armazenamento Interno: 256GB";
    document.getElementById("depois").textContent = "R$ 10.432,00";
}
function GB512() {
    document.getElementById("arm-int").textContent = "Armazenamento Interno: 512GB";
    document.getElementById("depois").textContent = "R$ 12.992,00";
}

document.getElementById("button-menu").addEventListener("click", function() {
    var barraLateral = document.querySelector(".container-barraLateral");
    barraLateral.style.left = "0"; // Mostra a barra lateral definindo o valor "left" para 0
});

document.getElementById("closeMenuNav").addEventListener("click", function() {
    var barraLateral = document.querySelector(".container-barraLateral");
    barraLateral.style.left = "-320px"; // Mostra a barra lateral definindo o valor "left" para 0
});
