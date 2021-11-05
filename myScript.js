/// ComputerPlay that chooses the computer Selection

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



// Ask  for the player's Selection

function askPlayer() {
let slc = prompt('Rock, Paper, Scissors ?').toLowerCase();

while (slc !== 'rock' && slc !== 'paper' && slc !== 'scissors')  {
    alert('incorrect');
    slc= prompt('Rock, Paper, Scissors ?').toLowerCase();

}
return slc;
}




// Playing one round

let playerWins = 'u won';
let computerWins = 'comp won';
let gameTie = 'tie';

function playRound (playerSelection,computerSelection) {
    if (playerSelection === computerSelection) {
        return gameTie;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return playerWins;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return playerWins;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return playerWins;
    } else {
        return computerWins;
    }
}



// Playing a best of 5 game
// ta vaghti bazi mikonan ke majmooe wine yeki be 3 berese
let computerRoundsWon = 0;
let playerRoundsWon = 0;

function game() { 
    

    while (computerRoundsWon < 3 && playerRoundsWon < 3) {

     
    let computerSelection = computerPlay()
    let playerSelection = askPlayer()

    if (playRound(playerSelection,computerSelection) === computerWins && computerRoundsWon === 2) {
        computerRoundsWon += 1
        console.log('computer won the bo5 game')


    } 
    
    else if     (playRound(playerSelection,computerSelection) === playerWins && playerRoundsWon === 2) {
        playerRoundsWon += 1
        console.log('player won the bo5 game')
    }
    


     else if (playRound(playerSelection,computerSelection) === computerWins && computerRoundsWon < 3) {
        console.log(computerWins)
        computerRoundsWon += 1
        console.log(computerRoundsWon)
    } 
    
    else if (playRound(playerSelection,computerSelection) === playerWins && playerRoundsWon < 3 ) {
        console.log(playerWins)
        playerRoundsWon += 1
        console.log(playerRoundsWon)
    }
    


    else  {
        console.log('it was a tie! doesnt add any points')
    } 


}


}

game()