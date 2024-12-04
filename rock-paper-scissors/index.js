function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return `It's a tie! You both chose ${playerSelection}.`;
    }

    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
    ) {
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

function game() {
    const playerChoice = prompt("Enter your choice: rock, paper, or scissors");
    if (!playerChoice) {
        console.log("Invalid choice, please refresh and try again.");
        return;
    }
    
    const computerChoice = getComputerChoice();
    console.log(`Computer chose: ${computerChoice}`);
    
    const result = playRound(playerChoice, computerChoice);
    console.log(result);
}

game();
