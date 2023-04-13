const btnInicio = document.getElementById('filtro-inicio');
const btnLanc = document.getElementById('filtro-lanc');
const btnFem = document.getElementById('filtro-fem');
const btnMasc = document.getElementById('filtro-masc');

var itensTodos = document.getElementsByClassName("celula");
var itensMasc = document.getElementsByClassName("item-masc");
var itensFem = document.getElementsByClassName("item-fem");
var itensLanc = document.getElementsByClassName("item-lanc");

var selAtual = 'inicio';
var selAnterior = 'inicio';

function filtrarMasculino(){
    [].forEach.call(itensTodos, function (div) {
        div.style.display = 'none';
    });
    
    [].forEach.call(itensMasc, function (div) {
        div.style.display = 'block';
    });
    
    selAnterior = selAtual;
    selAtual = 'masc';
    atualizarSelecionado(selAtual, selAnterior);
}

function filtrarFeminino(){
    [].forEach.call(itensTodos, function (div) {
        div.style.display = 'none';
    });
    
    [].forEach.call(itensFem, function (div) {
        div.style.display = 'block';
    });
    
    selAnterior = selAtual;
    selAtual = 'fem';
    atualizarSelecionado(selAtual, selAnterior);
}

function filtrarLancamento(){
    [].forEach.call(itensTodos, function (div) {
        div.style.display = 'none';
    });
    
    [].forEach.call(itensLanc, function (div) {
        div.style.display = 'block';
    });
    
    selAnterior = selAtual;
    selAtual = 'lanc';
    atualizarSelecionado(selAtual, selAnterior);
}



function atualizarSelecionado(atual, anterior){
    if(anterior == 'inicio'){
        btnInicio.style.fontWeight = 'normal';
        btnInicio.style.color = 'darkslategray';
    }else if(anterior == 'lanc'){
        btnLanc.style.fontWeight = 'normal';
        btnLanc.style.color = 'darkslategray';
    }else if(anterior == 'fem'){
        btnFem.style.fontWeight = 'normal';
        btnFem.style.color = 'darkslategray';
    }else if(anterior == 'masc'){
        btnMasc.style.fontWeight = 'normal';
        btnMasc.style.color = 'darkslategray';
    }
    
    if(atual == 'inicio'){
        btnInicio.style.fontWeight = 'bolder';
        btnInicio.style.color = 'black';
    }else if(atual == 'lanc'){
        btnLanc.style.fontWeight = 'bolder';
        btnLanc.style.color = 'black';
    }else if(atual == 'fem'){
        btnFem.style.fontWeight = 'bolder';
        btnFem.style.color = 'black';
    }else if(atual == 'masc'){
        btnMasc.style.fontWeight = 'bolder';
        btnMasc.style.color = 'black';
    }
}


var cards = document.getElementsByClassName("card-roupa");

for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener("mouseover", function(){
        this.classList.remove('contraido');
        this.classList.add('expandido');
    });
    cards[i].addEventListener("mouseout", function(){
        this.classList.remove('expandido');
        this.classList.add('contraido');
    });
}