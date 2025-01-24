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
}
