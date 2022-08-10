// Constants
let playerScore = 0;
let computerScore = 0;

// Collect nodes
const buttons = document.querySelectorAll("button");

// Play game when player clicks
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.textContent);
  });
});

function getComputerChoice() {
  let options = ["rock", "paper", "scissors"];
  let choice = Math.floor(Math.random() * 3);

  return options[choice];
}

function playRound(playerSelection) {
  if(playerScore >= 5 || computerScore >= 5){
    return;
  }

  let computerSelection = getComputerChoice();

  document.getElementById("player").textContent = "player: " + playerSelection;
  document.getElementById("computer").textContent =
    "computer: " + computerSelection;

  let resultMsg = "";
  if (playerSelection === computerSelection) {
    resultMsg += "It's a tie!";
  } else if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      resultMsg += "You win! Rock beats scissors!";
      playerScore++;
    } else {
      resultMsg += "You lose! Paper beats rock!";
      computerScore++;
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      resultMsg += "You win! Paper beats rock!";
      playerScore++;
    } else {
      resultMsg += "You lose! Scissors beats paper!";
      computerScore++;
    }
  } else {
    if (computerSelection === "paper") {
      resultMsg += "You win! Scissors beats paper!";
      playerScore++;
    } else {
      resultMsg += "You lose! Rock beats scissors!";
      computerScore++;
    }
  }
  
  if(playerScore >= 5){
    resultMsg = 'Game over! Player wins!'
  } else if(computerScore >= 5){
    resultMsg = 'Game over! Computer wins!'
  }

  document.getElementById("result").textContent = resultMsg;
  document.getElementById("score").textContent =
    "score: " + playerScore + " - " + computerScore;
}
