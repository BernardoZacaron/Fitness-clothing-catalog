
var itensTodos = document.getElementsByClassName("celula");
var itensMasc = document.getElementsByClassName("item-masc");
var itensFem = document.getElementsByClassName("item-fem");
var itensLanc = document.getElementsByClassName("");

function filtrarMasculino(){
    [].forEach.call(itensTodos, function (div) {
        div.style.display = 'none';
    });
}


function tornarInvisivel(div){
    div.style.display = 'none';
}