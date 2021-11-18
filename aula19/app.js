const submitBtn = document.querySelector('#btn');
const nomeInput = document.querySelector('#nome');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const usernameInput = document.querySelector('#username');
const websiteInput = document.querySelector('#website');

let url = 'https://jsonplaceholder.typicode.com/users/';

async function submitHandler(event){
    event.preventDefault();

    const data = {
        name: nomeInput.value,
        username: usernameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        website: websiteInput.value
    }

    const req = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    let response = await fetch(url, req);
    let jsonResponse = await response.json();

    console.log(jsonResponse);

    if(response.status === 201){
        alert('Usuário criado com sucesso!');
    } else {
        alert('Erro ao criar usuario!');
    }

}

submitBtn.addEventListener('click', submitHandler);