function openMenu() {
    var burger = document.getElementById("burger");
    var itens = document.getElementById("itens");

    if (itens.style.display === 'block') {
        itens.style.display = 'none';
        burger.style.display = 'block';
    } else {
        itens.style.display = 'block';

    }
}

// botao de voltar pro topo da pag
window.onscroll = function () {
    showButton();
};

function showButton() {
    var btn = document.getElementById("btnTopo");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block";
    }
    else {
        btn.style.display = "none";
    }
}
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
//

// reload na pag qnd clica no logo 
function recarregarPagina() {
    location.reload(); // Recarrega a página
}
//