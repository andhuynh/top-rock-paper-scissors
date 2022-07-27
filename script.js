function getComputerChoice(){
    let options = ['rock', 'paper', 'scissors'];
    let choice = Math.floor(Math.random() * 3);

    return options[choice];
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return "It's a tie!";
    } else if (playerSelection === 'rock'){
        if (computerSelection === 'scissors')
        {
            return "You win! Rock beats scissors!";
        } else {
            return "You lose! Paper beats rock!";
        }
    } else if (playerSelection === 'paper'){
        if (computerSelection === 'rock'){
            return "You win! Paper beats rock!";
        } else {
            return "You lose! Scissors beats paper!";
        }
    } else {
        if (computerSelection === 'paper'){
            return "You win! Scissors beats paper!";
        } else {
            return "You lose! Rock beats scissors!"
        }
    }
}

function game(){
    for (let i = 0; i < 5; i++){
        let input = prompt('Choose from the following: rock, paper, scissors: ');
        playerSelection = input.toLowerCase();
        const computerSelection = getComputerChoice();
        let gameMessage = playRound(playerSelection, computerSelection);
        console.log(gameMessage);
    }
}

game()
