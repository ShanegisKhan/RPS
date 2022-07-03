var playerScore = 0;
var computerScore = 0;
const maxRounds = 5;
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

let buttons = document.querySelectorAll('button');
let playerPlay = '';


let tie = () => "It's a tie!";
let lose = () => "Oh No!";
let win = () => "VICTORY!";
// Tracks, modifies, and displays the current score
let score = (addPlayerScore, addComputerScore) => {
    playerScore += addPlayerScore;
    computerScore += addComputerScore;

    return `\n\nThe score is: \nYou: ${playerScore} \nComputer: ${computerScore}`;
}
// Plays a single round of RPS when called.
let playRound = (playerSelection, computerSelection) => {
/* Allower player to type full name of choice and converts it to
   a single letter representation. */
  if(playerSelection == 'rock') {
    playerSelection = 'r';
  } else if(playerSelection == 'paper') {
    playerSelection = 'p';
  } else if(playerSelection == 'scissors') {
    playerSelection = 's';
  } else if(playerSelection == 'q') {
    return 'q';
  }
  
  if(playerSelection == 'r' || playerSelection == 1) {
    if(computerSelection == 'r') {
      // alert(tie() + " You both played Rock!" + score(0, 0));
      document.querySelector('#results').textContent = tie() + " You both played Rock!" + score(0, 0);
    } else if(computerSelection == 'p') {
      // alert(lose() + " Rock loses to Paper!" + score(0, 1));
      document.querySelector('#results').textContent = lose() + " Rock loses to Paper!" + score(0, 1);
    } else {
      // alert(win() + " Rock beats Scissors!" + score(1, 0));
      document.querySelector('#results').textContent = win() + " Rock beats Scissors!" + score(1, 0);
    }
  } else if(playerSelection == 'p' || playerSelection == 2) {
      if(computerSelection == 'r') {
        // alert(win() + " Paper beats Rock!" + score(1, 0));
        document.querySelector('#results').textContent = win() + " Paper beats Rock!" + score(1, 0);
      } else if(computerSelection == 'p') {
        // alert(tie() + " You both played Paper!" + score(0, 0));
        document.querySelector('#results').textContent = tie() + " You both played Paper!" + score(0, 0);
      } else if(computerSelection == 's') {
        // alert(lose() + " Paper loses to Scissors!" + score(0, 1));
        document.querySelector('#results').textContent = lose() + " Paper loses to Scissors!" + score(0, 1);
      }
  } else if(playerSelection == 's' || playerSelection == 3) {
      if(computerSelection == 'r') {
        // alert(lose() + " Rock beats Scissors!" + score(0, 1));
        document.querySelector('#results').textContent = lose() + " Rock beats Scissors!" + score(0, 1);
      } else if(computerSelection == 'p') {
        // alert(win() + " Scissors beat Paper!" + score(1, 0));
        document.querySelector('#results').textContent = win() + " Scissors beat Paper!" + score(1, 0);
      } else if(computerSelection == 's') {
        // alert(tie() + " You both played Scissors!" + score(0, 0));
        document.querySelector('#results').textContent = tie() + " You both played Scissors!" + score(0, 0);
      }
  }
  if(playerScore >= maxRounds || computerScore >= maxRounds) {
    const victoryMessage = () => document.querySelector('#results').textContent = `\n\nCongrats! You win!\nFINAL SCORES: You: ${playerScore} \nComputer: ${computerScore}`;
    const loseMessage = () => document.querySelector('#results').textContent = `\n\nYou LOST!\nFINAL SCORES: You: ${playerScore} \nComputer: ${computerScore}`;
    
    if(playerScore >= maxRounds)  {
      victoryMessage();
    }
    if(computerScore >= maxRounds) {
      loseMessage();
    }
    playerScore = 0;
    computerScore = 0;
  }
}

buttons.forEach(button => button.addEventListener('click', () => {
  playerPlay = button.className;
  playRound(playerPlay, computerPlay());
}));


