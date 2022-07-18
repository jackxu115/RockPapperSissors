let computerSelection;
let playerSelection;

let rockImg = document.getElementById("rock");
let paperImg = document.getElementById("paper");
let scissorsImg = document.getElementById("scissors");

let result;
let finalResult;
let countPlay = 0;

rockImg.onclick = function () {
    playerSelection = rockImg.getAttribute("value");
    computerSelection = getComputerChoice();
    result = playRound(playerSelection, computerSelection);
    countPlay++;
}

paperImg.onclick = function () {
    playerSelection = paperImg.getAttribute("value");
    computerSelection = getComputerChoice();
    result = playRound(playerSelection, computerSelection);
    countPlay++
}

scissorsImg.onclick = function () {
    playerSelection = scissorsImg.getAttribute("value");
    computerSelection = getComputerChoice();
    result = playRound(playerSelection, computerSelection);
}

function getComputerChoice () {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return 'rock';
    } else if (randomNumber === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie"
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return "You Lose! Paper beats rock";
        } else {
            return "You Win! Rock bests scissors";
        }
    } else if (playerSelection ==="paper") {
        if (computerSelection === "rock") {
            return "You Win! Paper beats rock";
        } else {
            return "You Lose! Scissors bests paper";
        }
    } else {
        if (computerSelection === "scissors") {
            return "You Lose! Rock beats scissors";
        } else {
            return "You Win! Scissor bests paper";
        }
    }
}
