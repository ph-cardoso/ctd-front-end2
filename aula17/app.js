 // Grupo 02
 // Pedro Henrique Cardoso
 // João Rocha
 // João Eduardo Eloi
 // Anna Karla Américo
 // Loyana Jacinto
 // Mauricio Gregory

const ul = document.createElement('ul');
const liName = document.createElement('li');
const liGender = document.createElement('li');
const liEmail = document.createElement('li');
const liPhone = document.createElement('li');
const container = document.querySelector('.container');

const dados = fetch('https://randomuser.me/api/')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        data.results.map((elemento) => {
            liName.innerHTML = `${elemento.name.first} ${elemento.name.last}`;
            liGender.innerHTML = elemento.gender;
            liEmail.innerHTML = elemento.email;
            liPhone.innerHTML = elemento.phone;
        });
    })
    .catch(function (error) {
        console.log(error);
    });

ul.appendChild(liName);
ul.appendChild(liGender);
ul.appendChild(liEmail);
ul.appendChild(liPhone);
container.appendChild(ul);