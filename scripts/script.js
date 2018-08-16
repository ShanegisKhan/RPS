var playerScore = 0;
var computerScore = 0;
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
// Prompts the player for choice
let playerPlay = () => prompt("Choose 1.(R)ock, 2.(P)aper, 3.(S)cissors, or (Q)uit.").toLowerCase();

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
      alert(tie() + " You both played Rock!" + score(0, 0));
    } else if(computerSelection == 'p') {
      alert(lose() + " Rock loses to Paper!" + score(0, 1));
    } else {
      alert(win() + " Rock beats Scissors!" + score(1, 0));
    }
  } else if(playerSelection == 'p' || playerSelection == 2) {
      if(computerSelection == 'r') {
        alert(win() + " Paper beats Rock!" + score(1, 0));
      } else if(computerSelection == 'p') {
        alert(tie() + " You both played Paper!" + score(0, 0));
      } else if(computerSelection == 's') {
        alert(lose() + " Paper loses to Scissors!" + score(0, 1));
      }
  } else if(playerSelection == 's' || playerSelection == 3) {
      if(computerSelection == 'r') {
        alert(lose() + " Rock beats Scissors!" + score(0, 1));
      } else if(computerSelection == 'p') {
        alert(win() + " Scissors beat Paper!" + score(1, 0));
      } else if(computerSelection == 's') {
        alert(tie() + " You both played Scissors!" + score(0, 0));
      }
  }
}
/* Defines the game loop. If the player selects 'q' the game quits,
   otherwise it continues indefinitely */
let game = () => {
  while (true) {
    if(playRound(playerPlay(), computerPlay()) == 'q') {
      return 0;
    }
  }
}

game();
