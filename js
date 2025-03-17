Aqui está a implementação do JavaScript para adicionar amigos à lista e exibi-los corretamente na página:

let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();
    
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }
    
    amigos.push(nome);
    input.value = "";
    atualizarLista();
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    for (let amigo of amigos) {
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("É necessário pelo menos dois amigos para o sorteio.");
        return;
    }
    
    let sorteio = [...amigos];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    
    for (let i = 0; i < amigos.length; i++) {
        let sorteado;
        do {
            sorteado = sorteio.splice(Math.floor(Math.random() * sorteio.length), 1)[0];
        } while (sorteado === amigos[i]);
        
        let item = document.createElement("li");
        item.textContent = `${amigos[i]} -> ${sorteado}`;
        resultado.appendChild(item);
    }
}

Esse código implementa as funções para:

Adicionar amigos à lista validando entradas vazias.
Atualizar a lista no HTML ao adicionar novos nomes.
Sortear amigos secretos garantindo que ninguém se sorteie a si mesmo.
