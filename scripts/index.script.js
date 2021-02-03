function criarConta(valor) {
    if (valor == "abrir") {
        document.getElementById("criar-conta").style.display = "block";
        document.getElementById("wp").style.display = "block";
    }
    else if (valor == "fechar") {
        document.getElementById("criar-conta").style.display = "none";
        document.getElementById("wp").style.display = "none";
    }
}