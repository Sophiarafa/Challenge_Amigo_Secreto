let nomes = []; // lista vazia
//referências para os elementos HTML
let inputAmigos = document.getElementById('amigo');
let listaAmigos = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');

//função para o botão adicionar
function adicionarAmigo() {
    let nome = inputAmigos.value;

    if (nome.trim() === "") {
        alert('Por favor, Digite um nome!');
    } else {
        nomes.push(nome);
    }

    atualizarLista();
    limparinput();
}
//cria a lista de amigos com base no array
function atualizarLista() {
    let listaAmigosHTML = nomes.map((nome) => `<li>${nome}</li>`).join("");
    listaAmigos.innerHTML= listaAmigosHTML;
}

//função limpar campo
function limparinput() {
    inputAmigos.value ="";
}
// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    if (nomes.length === 0) {
        alert('Não há amigos na lista para sortear!');
    } else {
        let indiceSorteado = Math.floor(Math.random() * nomes.length);
        let amigoSorteado = nomes[indiceSorteado];
        resultado.innerHTML = `O amigo sorteado é: ${amigoSorteado}`;
        nomes.splice(indiceSorteado, 1);
        atualizarLista();
    }
}


