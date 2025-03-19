// Array para armazenar os amigos
const amigos = [];

// Adiciona um amigo à lista, evitando nomes vazios e duplicados
function adicionarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nomeAmigo = inputAmigo.value.trim(); 

    if (nomeAmigo === "") {
        alert("Por favor, insira um nome.");
        return; 
    }

    if (amigos.includes(nomeAmigo)) {
        alert("Esse nome já foi adicionado!");
        return;
    }

    amigos.push(nomeAmigo);
    inputAmigo.value = "";
    atualizarLista();
}

// Atualiza a exibição da lista de amigos na tela
function atualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (const amigo of amigos) {
        const lista = document.createElement("li");
        lista.textContent = amigo; 
        listaAmigos.appendChild(lista);
    }
}

// Sorteia um amigo aleatoriamente, exibe o resultado e reinicia o processo
function sortearAmigo() {
    const resultado = document.getElementById("resultado");

    if (amigos.length === 0) {
        resultado.innerHTML = "<li>[Error] Nenhum amigo para sortear.</li>";
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    resultado.innerHTML = `<li>🎉 O amigo sorteado é: <strong>${amigoSorteado}</strong> 🎉</li>`;

    setTimeout(reiniciarProcesso, 3000);
}

// Reinicia o processo, limpando a lista e o resultado
function reiniciarProcesso() {
    amigos.length = 0; 
    document.getElementById("resultado").innerHTML = "";
    atualizarLista();
}
