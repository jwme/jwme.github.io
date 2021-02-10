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

    let dados = {
        usuario: document.getElementById("u-cc").value,
        nome: document.getElementById("n-cc").value,
        sobrenome: document.getElementById("sb-cc").value,
        senha: document.getElementById("s-cc").value,
        confsenha: document.getElementById("cs-cc").value
    }

    document.getElementById("envio").src = `https://script.google.com/macros/s/AKfycbzqfg3EEytqJkThxcI8ovhrttMDKMfM2J-0JZKu548/dev?usuario=${dados.usuario}&nome=${dados.nome}&sobrenome=${dados.sobrenome}&senha=${dados.senha}`;

    // loader.style.display = "block";

    // setTimeout(verificarResposta(dados.usuario), 3000)
}

// function verificarResposta(usuario) {
//     let loader = document.getElementById("loader");

//     const key = "AIzaSyCuQth5jU0v8OIjICZwvduMc8W0pfA2z3c";

//     let ajax = new XMLHttpRequest();
//     ajax.open("GET", `https://sheets.googleapis.com/v4/spreadsheets/1kqj6jshF-r1yAuCz3wtUn9dVyY8BEN35Y4oDTw0af6w/values/Cadastro!A2:C1000?key=${key}`)

//     ajax.onreadystatechange = () => {
//         if (ajax.readyState == 4 && ajax.status == 200) {
//                 let resposta = JSON.parse(ajax.responseText);
//                 let valores = resposta.values;

//                 console.log(valores);
//             }
//         }

//     ajax.send();
    
//     loader.style.display = "none";
// }