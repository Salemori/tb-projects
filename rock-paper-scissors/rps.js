function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return `It's a tie! Both chose ${playerSelection}.`;
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
  
  document.addEventListener('DOMContentLoaded', () => {
    let userScore = 0;
    let computerScore = 0;
    let roundsToPlay = 0;
    let roundsPlayed = 0;
  
    const gameMode = document.getElementById('game-mode');
    const game = document.getElementById('game');
    const winner = document.getElementById('winner');
    const userChoiceDisplay = document.getElementById('user-choice');
    const computerChoiceDisplay = document.getElementById('computer-choice');
    const roundResultDisplay = document.getElementById('round-result');
    const userScoreDisplay = document.getElementById('user-score');
    const computerScoreDisplay = document.getElementById('computer-score');
    const finalResultDisplay = document.getElementById('final-result');
    const playAgainButton = document.getElementById('play-again');
  
    document.getElementById('three-rounds').addEventListener('click', () => {
      roundsToPlay = 3;
      startGame();
    });
  
    document.getElementById('five-rounds').addEventListener('click', () => {
      roundsToPlay = 5;
      startGame();
    });
  
    document.querySelectorAll('.choice').forEach(button => {
      button.addEventListener('click', () => {
        const playerChoice = button.getAttribute('data-choice');
        const computerChoice = getComputerChoice();
        userChoiceDisplay.textContent = playerChoice;
        computerChoiceDisplay.textContent = computerChoice;
  
        const result = playRound(playerChoice, computerChoice);
        roundResultDisplay.textContent = result;
  
        if (result.includes('You win')) {
          userScore++;
        } else if (result.includes('You lose')) {
          computerScore++;
        }
  
        userScoreDisplay.textContent = userScore;
        computerScoreDisplay.textContent = computerScore;
  
        roundsPlayed++;
        if (roundsPlayed === roundsToPlay) {
          endGame();
        }
      });
    });
  
    playAgainButton.addEventListener('click', resetGame);
  
    function startGame() {
      gameMode.classList.add('hidden');
      game.classList.remove('hidden');
      resetScores();
    }
  
    function resetScores() {
      userScore = 0;
      computerScore = 0;
      roundsPlayed = 0;
      userScoreDisplay.textContent = userScore;
      computerScoreDisplay.textContent = computerScore;
      userChoiceDisplay.textContent = '-';
      computerChoiceDisplay.textContent = '-';
      roundResultDisplay.textContent = 'Start Playing!';
    }
  
    function endGame() {
      game.classList.add('hidden');
      winner.classList.remove('hidden');
      if (userScore > computerScore) {
        finalResultDisplay.textContent = 'Congratulations! You are the winner!';
      } else if (userScore < computerScore) {
        finalResultDisplay.textContent = 'Sorry, the computer won!';
      } else {
        finalResultDisplay.textContent = "It's a tie!";
      }
    }
  
    function resetGame() {
      winner.classList.add('hidden');
      gameMode.classList.remove('hidden');
    }
  });
  