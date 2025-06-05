let icons = document.querySelectorAll('.icon');
let resetButton = document.querySelector('.reset');
let playerScore = document.querySelector('#playerScore');
let computerScore = document.querySelector('#compScore');
let resultText = document.querySelector('.resultText');
let playerChoice = '';
let computerChoice = '';
let choices = ['rock', 'paper', 'scissors'];
let randomNumber = 0;


console.log(resultText);
for (let i = 0; i < icons.length; i++) {
    icons[i].addEventListener('mouseover', () => {
        icons[i].style.transition = 'transform 0.2s ease-in-out';
    })
    icons[i].addEventListener('click', () => {
        resetButton.className = 'resetButton';
        if (i === 0) {
            playerChoice = 'rock';
        } else if (i === 1) {
            playerChoice = 'paper';
        } else if (i === 2) {
            playerChoice = 'scissors';
        }

        randomNumber = Math.floor(Math.random() * 3) + 1;

        if (randomNumber === 1) {
            computerChoice = 'rock';
        } else if (randomNumber === 2) {
            computerChoice = 'paper';
        } else if (randomNumber === 3) {
            computerChoice = 'scissors';
        }
        console.log(playerChoice, computerChoice);

        if (playerChoice !== '' && computerChoice !== '') {
            if (playerChoice === computerChoice) {
                resultText.className = 'resultText';
                resultText.innerText = "It's a draw!";
            } else if ( (playerChoice === 'rock' && computerChoice === 'scissors') || (playerChoice === 'paper' && computerChoice === 'rock') || (playerChoice === 'scissors' && computerChoice === 'paper')) {
                resultText.className = 'resultTextWin';
                resultText.innerText = `You won! ${playerChoice} beats ${computerChoice}`;
                playerScore.innerText = parseInt(playerScore.innerText) + 1;
            } else {
                resultText.className = 'resultTextLost';
                resultText.innerText = `You lost! ${computerChoice} beats ${playerChoice}`;
                computerScore.innerText = parseInt(computerScore.innerText) + 1;
            } 

}
    }
    )
}

resetButton.addEventListener('click', () => {
    playerScore.innerText = 0;
    computerScore.innerText = 0;
    resultText.className = 'resultText';
    resultText.innerText = 'Choose it!';
    playerChoice = '';
    computerChoice = '';
    randomNumber = 0;
    resetButton.className = 'reset';

})