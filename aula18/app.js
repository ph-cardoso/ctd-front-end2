// Grupo 1:
// - Anna Karla Américo
// - Guilherme Chehade
// - Loyana Jacinto
// - Mario Braga
// - Mauricio Gregory
// - Paulo Rossi
// - Pedro Cardoso

const submitBtn = document.querySelector('#btn');
const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#password');
const pageNumber = 2;

const url = 'https://reqres.in/api/login';
const getEndpoint = `https://reqres.in/api/users?page=${pageNumber}`;

async function submitHandler(event) {
    event.preventDefault();
    const data = {
        email: inputEmail.value,
        password: inputPassword.value
    }

    const input = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    let response = await fetch(url, input);
    let responseJson = await response.json();

    if (response.status === 200) {
        alert('Login realizado com sucesso!');
    } else if (response.status === 400) {
        alert(`Error: ${responseJson.error}`);
    }

    let responseGet = await fetch(getEndpoint);
    let userDataResponse = await responseGet.json();

    console.log(userDataResponse);
}

submitBtn.addEventListener('click', submitHandler);