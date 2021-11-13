/// ComputerPlay that chooses the computer Selection

function computerPlay() {
    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors";
    let randomNumber = Math.floor(Math.random()*3 + 1);
    if (randomNumber === 1) {
        console.log('computer played rock');
        computerPlayedPara.textContent = "کامبیوتر سنگ آورد"
        return rock;
    } else if (randomNumber === 2) {
        console.log('computer played paper');
        computerPlayedPara.textContent = "کامبیوتر کاغذ آورد"

        return paper;
    } else {
        console.log('computer played scissors');
        computerPlayedPara.textContent = "کامبیوتر قیچی آورد "
        return scissors;
    }

}

// Playing one round
let playerWins = 'u won';
let computerWins = 'comp won';
let gameTie = 'tie';

const computerPlayedPara = document.querySelector('.computer-playtext');
const roundWinnerPara = document.querySelector('.round-winner');


function playRound () {
    let computerSelection = computerPlay()
    playerSelection = buttn;
    console.log('you played ' + playerSelection);

    if (playerSelection === computerSelection) {
        roundWinnerPara.textContent = "مساوی شدین"
        console.log(gameTie);
        gameTie;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        roundWinnerPara.textContent = "برنده شدی"
        console.log(playerWins);
        playerWins;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        roundWinnerPara.textContent = "برنده شدی"
        console.log(playerWins);
        playerWins;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        roundWinnerPara.textContent = "برنده شدی"
        console.log(playerWins);
        playerWins;
    } else {
        console.log(computerWins);
        roundWinnerPara.textContent = " باختی و ضایع شدی"
        computerWins;
    } 
}

// Playing a best of 5 game
// ta vaghti bazi mikonan ke majmooe wine yeki be 3 berese

// function game() { 
//     let computerRoundsWon = 0;
//     let playerRoundsWon = 0;

//     while (computerRoundsWon < 3 && playerRoundsWon < 3) {
//     let computerSelection = computerPlay()
//     let playerSelection = askPlayer()

//     if (playRound(playerSelection,computerSelection) === computerWins && computerRoundsWon === 2) {
//         computerRoundsWon += 1
//         console.log('computer won the bo5 game')
//     }
//     else if     (playRound(playerSelection,computerSelection) === playerWins && playerRoundsWon === 2) {
//         playerRoundsWon += 1
//         console.log('player won the bo5 game')
//     }
//      else if (playRound(playerSelection,computerSelection) === computerWins && computerRoundsWon < 3) {
//         console.log(computerWins)
//         computerRoundsWon += 1
//         console.log(computerRoundsWon)
//     } 
//     else if (playRound(playerSelection,computerSelection) === playerWins && playerRoundsWon < 3 ) {
//         console.log(playerWins)
//         playerRoundsWon += 1
//         console.log(playerRoundsWon)
//     }
//     else  {
//         console.log('it was a tie! doesnt add any points')
//     } 
// }};


const buttons = Array.from(document.querySelectorAll('.btn'));
// buttons.forEach(btn => btn.addEventListener("click", function() {
//     playerSelection = btn.id;
//     playRound();
// }));
let buttn = ""
// playerSelection = buttons.forEach(btn => btn.addEventListener('click', playRound))
buttons.forEach(btn => btn.addEventListener('click', function() {
    buttn = btn.id;
    playRound();
}));

//play untill 5 wins

