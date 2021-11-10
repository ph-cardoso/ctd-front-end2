// Query dos elementos de input
const nomeInput = document.querySelector('#nome');
const telefoneInput = document.querySelector('#telefone');
const submitBtn = document.querySelector('#submit-button');
const lista = document.querySelector('#display-inputs');

// Pega os dados do localStorage
const lcStorageJSON = JSON.parse(localStorage.getItem('dados'));

// Array que armazena os objetos de input
let arrayDados;
if(lcStorageJSON) {
    arrayDados = lcStorageJSON;
} else {
    arrayDados = [];
}

// Função que mostra os dados do array na página
function mostrarDados() {
    lista.style.fontWeight = 'bold';

    if(arrayDados.length > 0) {
        // Reseta o HTML da lista
        lista.innerHTML = '';

        // Loop que insere os dados do array na lista
        arrayDados.forEach(dado => {
            lista.innerHTML += `<p>Nome: ${dado.nome} - Telefone: ${dado.telefone}</p>`;
        });
    }
}

// Armazenar os elementos de arrayDados no localStorage
function armazenarDados() {
    localStorage.setItem('dados', JSON.stringify(arrayDados));
}

mostrarDados();

// Evento de click do botão
submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const dados = {
        nome: nomeInput.value,
        telefone: telefoneInput.value
    };

    console.log(event);

    arrayDados.push(dados); // Insere os dados no array
    armazenarDados(); // Armazena os dados no localStorage
    // location.reload(); // Recarrega a página
});