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
    let loader = document.getElementById("loader");

    let usuario = document.getElementById("u-cc").value;
    let nome = document.getElementById("n-cc").value;
    let sobrenome = document.getElementById("sb-cc").value;
    let senha = document.getElementById("s-cc").value;
    // let confsenha = document.getElementById("cs-cc").value;

    document.getElementById("envio").src = `https://script.google.com/macros/s/AKfycbxggNCyGzo80xiX8UFaeIy9Am0hN3X9xVqiVXjBqv8HDfGxjL5c3LMbWA/exec?usuario=${usuario}&nome=${nome}&sobrenome=${sobrenome}&senha=${senha}`;

    loader.style.display = "block";

    verificarResposta(usuario);
}

function verificarResposta(usuario) {
    let loader = document.getElementById("loader");

    const key = "AIzaSyCuQth5jU0v8OIjICZwvduMc8W0pfA2z3c";

    let ajax = new XMLHttpRequest();
    ajax.open("GET", `https://sheets.googleapis.com/v4/spreadsheets/1kqj6jshF-r1yAuCz3wtUn9dVyY8BEN35Y4oDTw0af6w/values/Cadastro!A2:C1000?key=${key}`)

    ajax.onreadystatechange = () => {
        if (ajax.readyState == 4 && ajax.status == 200) {
                let resposta = JSON.parse(ajax.responseText);
                let valores = resposta.values;

                for (let u in valores) {
                    let us  = valores[u];
                    if (us[1] === usuario && us[2] === "OK") {
                        loader.innerHTML = '<h1 style="color: darkgreen"><strong>Tudo Certo!</strong></h1><p>Usuario cadastrado com sucesso</p><br/><button>Entrar</button>';
                    }
                    else if (us[1] === usuario && us[2] === "Erro") {
                        loader.innerHTML = '<h1 style="color: red;"><strong>Tudo Mal!</strong></h1><p>Usuario já existe</p><br/><button>Entrar</button>';
                    }
                }
            }
        }
    ajax.send();
}