/// ComputerPlay that chooses the computer Selection

function computerPlay() {
    let randomNumber = Math.floor(Math.random()*3 + 1);
    if (randomNumber === 1) {
        console.log('computer played rock');
        computerPlayedPara.textContent = "کامبیوتر سنگ آورد"
        return 'rock';
    } else if (randomNumber === 2) {
        console.log('computer played paper');
        computerPlayedPara.textContent = "کامبیوتر کاغذ آورد"
        return 'paper';
    } else {
        console.log('computer played scissors');
        computerPlayedPara.textContent = "کامبیوتر قیچی آورد "
        return 'scissors';
    }
};

const computerPlayedPara = document.querySelector('.computer-playtext');
const roundWinnerPara = document.querySelector('.round-winner');
const gameWinnerPara = document.querySelector('.game-winner')

// Playing one round
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
        roundWinnerPara.textContent = "یک امتیاز گرفتی"
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        roundWinner = 'player';
        roundWinnerPara.textContent = "یک امتیاز گرفتی"
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        roundWinner = 'player';
        roundWinnerPara.textContent = "یک امتیاز گرفتی"
    } else {
        roundWinner = 'computer';
        roundWinnerPara.textContent = "یک امتیاز برای کامبیوتر "
    }

    
    if (pRoundsWon === 0 || cRoundsWon === 0) {
        gameWinnerPara.textContent= '';
    } 
}
let pRoundsWon = 0;
let cRoundsWon = 0;
let playerScore = document.querySelector('.player-score');
let computerScore = document.querySelector('.computer-score');

function updateScore() {
    if (roundWinner === 'player') {
        pRoundsWon += 1;
        playerScore.textContent = pRoundsWon;
    } else if (roundWinner === 'computer') {
        cRoundsWon += 1;
        computerScore.textContent = cRoundsWon;
    }
}

const buttons = Array.from(document.querySelectorAll('.btn'));

buttons.forEach(key => key.addEventListener('click', function () {
    btnOption = this.id;
    playRound();
    console.log(roundWinner)
    updateScore();
    determineWinner();
}));

function determineWinner() {
    if (pRoundsWon < 5 && cRoundsWon <5) {
        return;
    } else if ( pRoundsWon === 5) {
        gameWinnerPara.textContent = 'برنده ی بازی شدی'
        gameWinnerPara.classList.add('winner-para')
        } else if (cRoundsWon === 5){
            gameWinnerPara.textContent = 'به کامبیوتر باختی آفرین'
            gameWinnerPara.classList.add('loser-para')
    }
    clearScores();

}   

function clearScores() {
    pRoundsWon = 0;
    cRoundsWon = 0;
    playerScore.textContent = pRoundsWon;
    computerScore.textContent = cRoundsWon;
}
