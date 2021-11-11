const pokemonContent = document.querySelector('.pokemon-content');
const levelBtn = document.querySelector('.level-btn');
const levelText = document.querySelector('#level-text');
const percentageText = document.querySelector('#percentage-text');
const barProgress = document.querySelector('#bar');

let url = `https://pokeapi.co/api/v2/pokemon/4`;

async function fetchPokemonData(id) {
    let url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch(e) {
        console.error(e);
    }
}

async function renderPokemonData(id) {
    const data = await fetchPokemonData(id);
    console.log(data);

    const pokemonImg = document.createElement('img');
    pokemonImg.setAttribute('src', `${data.sprites.other.dream_world.front_default}`);
    pokemonImg.setAttribute('alt', `${data.name}`);

    const pokemonName = document.createElement('h2');
    pokemonName.innerHTML = `${data.name.toUpperCase()}`;

    pokemonName.style.color = '#F5EFEF';
    pokemonName.style.padding = '2rem 0';

    pokemonContent.appendChild(pokemonImg);
    pokemonContent.appendChild(pokemonName);
}

renderPokemonData(4);

let pokemonLevel = 1;
let percentage = 0;

levelBtn.addEventListener('click', () => {
    percentage += 10;
    if(percentage > 100){
        percentage = 0;
        barProgress.style.width = `${percentage}%`;
        percentageText.style.visibility = 'hidden';
        pokemonLevel++;
    } else {
        barProgress.style.width = `${percentage}%`;
        percentageText.style.visibility = 'visible';
        percentageText.innerHTML = `${percentage}%`;
    }

    levelText.innerHTML = `Level ${pokemonLevel}`;
});