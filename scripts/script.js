var playerScore = 0;
var computerScore = 0;
const winCondition = 5;
// Computer picks move randomly
let computerPlay = () => {
  // Chosses a random number between 1-3 to represent Rcok Paper and Scissors
  let randomChoice = Math.floor(Math.random() * 3);

  if(randomChoice == 0) {
    return 'r';
  } else if(randomChoice == 1) {
    return 'p';
  } else {
    return 's';
  }
}
// Tracks, modifies, and displays the current score
let score = (addPlayerScore, addComputerScore) => {
    playerScore += addPlayerScore;
    computerScore += addComputerScore;

    return `\n\nThe score is: \nYou: ${playerScore} \nComputer: ${computerScore}`;
}
// Plays a single round of RPS when called.
let playRound = (playerSelection, computerSelection) => {
  let tie = "It's a tie!";
  let lose =  "Oh No!";
  let win =  "VICTORY!";
  let messageBox = document.querySelector('#results');
  
  if(playerSelection == 'rock' || playerSelection == 1) {
    if(computerSelection == 'r') {
      messageBox.textContent = tie + " You both played Rock!" + score(0, 0);
    } else if(computerSelection == 'p') {
      messageBox.textContent = lose + " Rock loses to Paper!" + score(0, 1);
    } else { 
      messageBox.textContent = win + " Rock beats Scissors!" + score(1, 0);
    }
  } else if(playerSelection == 'paper' || playerSelection == 2) {
      if(computerSelection == 'r') {
        messageBox.textContent = win + " Paper beats Rock!" + score(1, 0);
      } else if(computerSelection == 'p') {
        messageBox.textContent = tie + " You both played Paper!" + score(0, 0);
      } else if(computerSelection == 's') {
        messageBox.textContent = lose + " Paper loses to Scissors!" + score(0, 1);
      }
  } else if(playerSelection == 'scissors' || playerSelection == 3) {
      if(computerSelection == 'r') {
        messageBox.textContent = lose + " Rock beats Scissors!" + score(0, 1);
      } else if(computerSelection == 'p') {
        messageBox.textContent = win + " Scissors beat Paper!" + score(1, 0);
      } else if(computerSelection == 's') {
        messageBox.textContent = tie + " You both played Scissors!" + score(0, 0);
      }
  }
  if(playerScore >= winCondition || computerScore >= winCondition) {
    const victoryMessage = () => messageBox.textContent = `\n\nCongrats! You win!\nFINAL SCORES: You: ${playerScore} \nComputer: ${computerScore}`;
    const loseMessage = () => messageBox.textContent = `\n\nYou LOST!\nFINAL SCORES: You: ${playerScore} \nComputer: ${computerScore}`;
    
    if(playerScore >= winCondition)  {
      victoryMessage();
    }
    if(computerScore >= winCondition) {
      loseMessage();
    }
    playerScore = 0;
    computerScore = 0;
  }
}
let buttons = document.querySelectorAll('button');
let playerPlay = '';

buttons.forEach(button => button.addEventListener('click', () => {
  playerPlay = button.className;
  playRound(playerPlay, computerPlay());
}));


