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
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para o sorteio.");
        return;
    }
    
    let sorteio = [...amigos];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    
    for (let i = 0; i < amigos.length; i++) {
        let indiceSorteado;
        do {
            indiceSorteado = Math.floor(Math.random() * sorteio.length);
        } while (sorteio[indiceSorteado] === amigos[i]);
        
        let li = document.createElement("li");
        li.textContent = `${amigos[i]} --> ${sorteio[indiceSorteado]}`;
        resultado.appendChild(li);
        sorteio.splice(indiceSorteado, 1);
    }
}


Esse código implementa as funções para:

Adicionar amigos à lista validando entradas vazias.
Atualizar a lista no HTML ao adicionar novos nomes.
Sortear amigos secretos garantindo que ninguém se sorteie a si mesmo.
