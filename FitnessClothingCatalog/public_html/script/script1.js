
var itensTodos = document.getElementsByClassName("celula");
var itensMasc = document.getElementsByClassName("item-masc");
var itensFem = document.getElementsByClassName("item-fem");
var itensLanc = document.getElementsByClassName("item-lanc");

function filtrarMasculino(){
    [].forEach.call(itensTodos, function (div) {
        div.style.display = 'none';
    });
    
    [].forEach.call(itensMasc, function (div) {
        div.style.display = 'block';
        div.style.marginBottom = '36%';
    });
}

function filtrarFeminino(){
    [].forEach.call(itensTodos, function (div) {
        div.style.display = 'none';
    });
    
    [].forEach.call(itensFem, function (div) {
        div.style.display = 'block';
        div.style.marginBottom = '36%';
    });
}

function filtrarLancamento(){
    [].forEach.call(itensTodos, function (div) {
        div.style.display = 'none';
    });
    
    [].forEach.call(itensLanc, function (div) {
        div.style.display = 'block';
        div.style.marginBottom = '36%';
    });
}