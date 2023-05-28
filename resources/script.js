function openMenu() {
    itens.style.display = 'block'
    if (itens.style.display == 'block') {
        itens.style.display = 'none'
    } else {
        itens.style.display = 'block'
    }
}


// botao de voltar pro topo
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

