/// ComputerPlay that chooses the computer Selection

function computerPlay() {
    let randomNumber = Math.floor(Math.random()*3 + 1);
    if (randomNumber === 1) {
        computerPlayedPara.textContent = "کامپیوتر سنگ آورد"
        return 'rock';
    } else if (randomNumber === 2) {
        computerPlayedPara.textContent = "کامپیوتر کاغذ آورد"
        return 'paper';
    } else {
        computerPlayedPara.textContent = "کامپیوتر قیچی آورد "
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

    if (playerSelection === computerSelection) {
        roundWinner = 'tie';
        roundWinnerPara.textContent = "مثل هم آوردین! کسی امتیاز نگرفت"
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
        roundWinnerPara.textContent = "یک امتیاز برای کامپیوتر "
    }

    
    if (pRoundsWon === 0 || cRoundsWon === 0) {
        gameWinnerPara.textContent= '';
        gameWinnerPara.classList.remove('loser-para')
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

function clearScores() {
    pRoundsWon = 0;
    cRoundsWon = 0;
    playerScore.textContent = pRoundsWon;
    computerScore.textContent = cRoundsWon;
}

function determineWinner() {
    if (pRoundsWon < 5 && cRoundsWon <5) {
        return;
    } else if ( pRoundsWon === 5) {
        gameWinnerPara.textContent = 'برنده ی بازی شدی'
        gameWinnerPara.classList.add('winner-para')
        } else if (cRoundsWon === 5){
            gameWinnerPara.textContent = 'به کامپیوتر باختی آفرین'
            gameWinnerPara.classList.add('loser-para')
    }
    clearScores();

}   

const buttons = Array.from(document.querySelectorAll('.btn'));

buttons.forEach(key => key.addEventListener('click', function () {
    btnOption = this.id;
    playRound();
    updateScore();
    determineWinner();
}));
