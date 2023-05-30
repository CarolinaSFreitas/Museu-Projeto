function openMenu() {
    document.querySelector(".navegacao").classList.toggle("ativado");
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