// Elementos HTML
const playerInput = document.getElementById('jogada');
const playBtn = document.querySelector('#play');
const displayResultado = document.getElementById('show-resultado');
const playerLastMove = document.getElementById('player-jogada');
const pcLastMove = document.getElementById('pc-jogada');
const playerPontuation = document.getElementById('player-pontuation');
const pcPontuation = document.getElementById('pc-pontuation');

// Contadores
let playerScore = 0;
let pcScore = 0;
let jogadas = 0;

// Válida e prepara o input do usuário para comparação
function inputValidation(input){
  let playerJogada = input;
  playerJogada = playerJogada.trim();
  playerJogada = playerJogada.toUpperCase();

  // Input validation
  if(playerJogada !== "PEDRA" && playerJogada !== "PAPEL" && playerJogada !== "TESOURA"){
    return null;
  } else {
    return playerJogada
  }
}

// Pega a jogada randômica do computador
function getComputerPlay() {
  // 0 , 1 ou 2
  const random = Math.floor(Math.random() * 3);

  switch (random) {
    case 0:
      return "PEDRA";
    case 1:
      return "PAPEL";
    case 2:
      return "TESOURA";
  }
}

// Retorna => 0: Empate, 1: Player venceu, 2: PC venceu
function getWinner(playerJogada, pcJogada) {
  if(playerJogada === pcJogada) {
    return 0;
  } else if(playerJogada === "PEDRA" && pcJogada === "TESOURA"){
    return 1;
  } else if(playerJogada === "PEDRA" && pcJogada === "PAPEL"){
    return 2;
  } else if(playerJogada === "PAPEL" && pcJogada === "TESOURA"){
    return 2;
  } else if(playerJogada === "PAPEL" && pcJogada === "PEDRA"){
    return 1;
  } else if(playerJogada === "TESOURA" && pcJogada === "PAPEL"){
    return 1;
  } else if(playerJogada === "TESOURA" && pcJogada === "PEDRA"){
    return 2;
  }
}

function playerWin() {
  playerScore++;
  jogadas++;
  displayResultado.innerText = "Você ganhou!";
  displayResultado.style.visibility = "visible";
  playerPontuation.innerText = playerScore.toString();
}

function pcWin() {
  pcScore++;
  jogadas++;
  displayResultado.innerText = "Você perdeu!";
  displayResultado.style.visibility = "visible";
  pcPontuation.innerText = pcScore.toString();
}

function empate() {
  jogadas++;
  displayResultado.innerText = "Empate!";
  displayResultado.style.visibility = "visible";
}

function invalidPlay() {
  displayResultado.innerText = "Jogada Inválida! Tente Novamente...";
  displayResultado.style.visibility = "visible";
}

playBtn.addEventListener('click', () => {
  const playerJogada = inputValidation(playerInput.value);
  const pcJogada = getComputerPlay();
  if(playerJogada){
    // Display das jogadas da rodada
    playerLastMove.innerText = playerJogada;
    pcLastMove.innerText = pcJogada;

    const winner = getWinner(playerJogada, pcJogada);

    switch(winner){
      case 0:
        empate();
        break;
      case 1:
        playerWin();
        break;
      case 2:
        pcWin();
        break;
    }
  } else {
    invalidPlay();
  }
});