function openMenu() {
    var menu = document.getElementsByClassName('.nav_links2');

    if (menu.display === "block") {
        menu.style.display = "none";

    } else {
        menu.style.display = "block";
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