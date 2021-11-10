const nomeInput = document.querySelector('#nome');
const telefoneInput = document.querySelector('#telefone');
const submitBtn = document.querySelector('#submit-button')

let error = false;

// Adiciona a lista de erros
function addList(errors, selector) {
    if(errors.length > 0) {
        nomeInput.style.backgroundColor = "#FA8D8D";
        error = true;

        const ul = document.querySelector(selector);
        ul.innerHTML = '';
        errors.forEach(error => {
            const li = document.createElement('li');
            li.style.color = 'red';
            li.style.fontWeight = 'bold';
            li.innerText = error;
            ul.append(li);
        });
        ul.style.paddingBottom = '1rem';
    } else {
        const ul = document.querySelector(selector);
        ul.innerHTML = '';
        nomeInput.style.backgroundColor = "";
        error = false;
    }
}

// Value atualiza sempre que o input perde o focus
nomeInput.addEventListener('change', () => {
    const nameErrors = [];

    // Checa a quantidade de palavras
    if(nomeInput.value.split(' ').length < 2) {
        nameErrors.push("Nome deve conter pelo menos 2 palavras");
    }

    // Checa a quantidade de caracteres
    if(nomeInput.value.length > 150) {
        nameErrors.push("Nome deve ter menos de 150 caracteres");
    }

    // Checa se o campo é vazio
    if(nomeInput.value.length === 0) {
        nameErrors.push("Nome não pode ser vazio");
    }

    // Checa se o nome tem apenas letras
    if(!nomeInput.value.match(/^[a-zA-Z ]+$/)) {
        nameErrors.push("Nome deve conter apenas letras");
    }

    addList(nameErrors, '#name-errors');
});

telefoneInput.addEventListener('change', () => {
    const phoneErrors = [];

    // Checa se o telefone é vazio
    if(!/^\d{2}\s\d{5}-\d{4}$/.test(telefoneInput.value)) {
        phoneErrors.push("Telefone não está no padrão XX XXXXX-XXXX");
    }

    addList(phoneErrors, '#phone-errors');

    console.log(phoneErrors);
});

submitBtn.addEventListener('click', (event) => {
    if(error) {
        event.preventDefault();
    } else {
        console.log('Enviando formulário');
    }
});