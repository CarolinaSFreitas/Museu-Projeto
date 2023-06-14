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

// campo de cpf 
const cpfField = document.getElementById('doc-field');

cpfField.addEventListener('input', function (e) {
    let value = e.target.value;
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    e.target.value = value;
});
//

