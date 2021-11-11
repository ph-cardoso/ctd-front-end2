const inputNome = document.querySelector('#nome');
const submitBtn = document.querySelector('#submit-button');

const arrayChecks = Array.from(document.querySelectorAll('.input-checkbox'));

function nomeValidator() {
    let error = false;

    const nomeWords = inputNome.value.split(' ');

    // Deve conter ao menos duas palavras
    if(nomeWords.length < 2){
        error = true;
    }

    // O campo não pode ter mais de 150 caracteres
    if(inputNome.value.length > 150){
        error = true;
    }

    // Não pode ter números
    if(!inputNome.value.match(/([a-zA-Z]+( [a-zA-Z]+)+)/i)){
        error = true;
    }

    // Não pode ter menos de um caractere na palavra
    nomeWords.forEach(palavra => {
        if(palavra.length < 2){
            error = true;
        }
    });

    // Altera o background do elemento caso exista erro
    if(error){
        inputNome.style.backgroundColor = '#FA8D8D';
    } else {
        inputNome.style.backgroundColor = '';
    }
}

function hobbiesValidator() {
    let error = false;
    const checkedCounter = arrayCheckeds.length;

    if(checkedCounter > 4){
        error = true;
    }
}

arrayChecks.forEach(elemento => {
    elemento.addEventListener('change', () => {
        const arrayCheckeds = arrayChecks.filter((elemento) => elemento.checked);

        arrayCheckeds.forEach(elemento => {
            let cozinhaElement;
            if(elemento.name === "videogame"){
                cozinhaElement = arrayChecks.find(elemento => elemento.name === "cozinha");
                cozinhaElement.setAttribute('disabled', 'disabled');
            } else {
                cozinhaElement = arrayChecks.find(elemento => elemento.name === "cozinha");
                cozinhaElement.removeAttribute('disabled');
            }

            let videogameElement;
            if(elemento.name === "cozinha"){
                videogameElement = arrayChecks.find(elemento => elemento.name === "videogame");
                videogameElement.toggleAttribute('disabled', 'disabled');
            } else {
                videogameElement = arrayChecks.find(elemento => elemento.name === "videogame");
                videogameElement.removeAttribute('disabled');
            }

            let leituraElement;
            if(elemento.name === "guitarra"){
                leituraElement = arrayChecks.find(elemento => elemento.name === "leitura");
                leituraElement.toggleAttribute('disabled', 'disabled');
            } else {
                leituraElement = arrayChecks.find(elemento => elemento.name === "leitura");
                leituraElement.removeAttribute('disabled');
            }

            let guitarraElement;
            if(elemento.name === "leitura"){
                guitarraElement = arrayChecks.find(elemento => elemento.name === "guitarra");
                guitarraElement.toggleAttribute('disabled', 'disabled');
            } else {
                guitarraElement = arrayChecks.find(elemento => elemento.name === "guitarra");
                guitarraElement.removeAttribute('disabled');
            }

            let corteCosturaElement;
            if(elemento.name === "netflix"){
                corteCosturaElement = arrayChecks.find(elemento => elemento.name === "cortecostura");
                corteCosturaElement.toggleAttribute('disabled', 'disabled');
            } else {
                corteCosturaElement = arrayChecks.find(elemento => elemento.name === "cortecostura");
                corteCosturaElement.removeAttribute('disabled');
            }

            let netflixElement;
            if(elemento.name === "cortecostura"){
                netflixElement = arrayChecks.find(elemento => elemento.name === "netflix");
                netflixElement.toggleAttribute('disabled', 'disabled');
            } else {
                netflixElement = arrayChecks.find(elemento => elemento.name === "netflix");
                netflixElement.removeAttribute('disabled');
            }
        });
    })
});


submitBtn.addEventListener('click', (event) =>{
    event.preventDefault();
    hobbiesValidator();
    nomeValidator();
});
