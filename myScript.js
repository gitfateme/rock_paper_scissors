/// Computer play that chooses the computer Selection

function computerPlay() {
    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors";
    let randomNumber = Math.floor(Math.random()*3 + 1);
    if (randomNumber === 1) {
        return rock;
    } else if (randomNumber === 2) {
        return paper;
    } else {
        return scissors;
    }
}

const computerSelection = computerPlay();
console.log(computerSelection);

// Ask  for the player's Selection

let playerSelection = prompt('Rock, Paper, Scissors ?').toLowerCase();

while (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors')  {
    alert('incorrect');
    playerSelection= prompt('Rock, Paper, Scissors ?').toLowerCase();
}

console.log(playerSelection);

// Playing one round

function playRound (playerSelection,computerSelection) {
    if (playerSelection === computerSelection) {
        return 'its a tie!';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'you won with your paper!';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'you won with your rock!';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'you won with your rusty scissors!';
    } else {
        return 'the stupid computer won!';
    }
}

console.log(playRound(playerSelection, computerSelection));

// Playing a best of 5 game

