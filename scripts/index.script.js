function abrirCriarConta(valor) {
    if (valor) {
        document.getElementById("criar-conta").style.display = "block";
        document.getElementById("wp").style.display = "block";
    }
    else {
        document.getElementById("criar-conta").style.display = "none";
        document.getElementById("wp").style.display = "none";
    }
}

function enviarCriarConta() {
    let dados = {
        usuario: document.getElementById("u-cc").value,
        nome: document.getElementById("n-cc").value,
        sobrenome: document.getElementById("sb-cc").value,
        senha: document.getElementById("s-cc").value,
        confsenha: document.getElementById("cs-cc").value
    }

    document.getElementById("envio").src = `https://script.google.com/macros/s/AKfycbzv4KtjWQoNZ7IfahFl5WYn1Z4mJhSie5o0_OSQ_GC2pYJf9wLI5xEvhw/exec?usuario=${dados.usuario}&nome=${dados.nome}&sobrenome=${dados.sobrenome}&senha=${dados.senha}`;
}