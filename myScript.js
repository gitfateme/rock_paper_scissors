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
};

// Playing one round

const computerPlayedPara = document.querySelector('.computer-playtext');
const roundWinnerPara = document.querySelector('.round-winner');


let roundWinner;

function playRound () {
    let computerSelection = computerPlay()
    playerSelection = btnOption;
    console.log('you played ' + playerSelection);

    if (playerSelection === computerSelection) {
        roundWinner = 'tie';
        roundWinnerPara.textContent = "مساوی شدین"
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        roundWinner = 'player';
        roundWinnerPara.textContent = "برنده شدی"
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        roundWinner = 'player';
        roundWinnerPara.textContent = "برنده شدی"
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        roundWinner = 'player';
        roundWinnerPara.textContent = "برنده شدی"
    } else {
        roundWinner = 'computer';
        roundWinnerPara.textContent = " باختی و ضایع شدی"
    } 
}
let pRoundsWon = 0;
let cRoundsWon = 0;
let playerScore = document.querySelector('.player-score');
let computerScore = document.querySelector('.computer-score');


const buttons = Array.from(document.querySelectorAll('.btn'));
buttons.forEach(key => key.addEventListener('click', function () {
    btnOption = this.id;
    playRound();
    console.log(roundWinner)
    updateScore();
}));

function updateScore() {


    if (roundWinner === 'player') {
        pRoundsWon += 1;
        playerScore.textContent = pRoundsWon;
    } else if (roundWinner === 'computer') {
        cRoundsWon += 1;
        computerScore.textContent = cRoundsWon;
    }
}