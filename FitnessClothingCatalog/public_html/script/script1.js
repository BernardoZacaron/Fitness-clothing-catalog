const card = document.getElementById("celula1");
const info = document.getElementById("info-roupa1");

card.addEventListener('mouseover', function handleMouseOver() {
    info.style.display = 'block';
    card.style.zIndex = '99';
});

card.addEventListener('mouseout', function handleMouseOut() {
    info.style.display = 'none';
    card.style.zIndex = '0';
});


var itensMasc = document.getElementsByClassName("");
var itensFem = document.getElementsByClassName("");
var itensLanc = document.getElementsByClassName("");