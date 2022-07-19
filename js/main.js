let computerSelection
let playerSelection

let rockImg = document.getElementById("rock")
let paperImg = document.getElementById("paper")
let scissorsImg = document.getElementById("scissors")
let restartBtn = document.getElementById("restart")


let countPlay = 5
let playerScore = 0
let computerScore = 0


rockImg.onclick = () => click()
paperImg.onclick = () => click()
scissorsImg.onclick = () => click()

function click () {
    playerSelection = scissorsImg.getAttribute("value")
    computerSelection = getComputerChoice()
    playRound(playerSelection, computerSelection)
    countPlay--
    document.getElementById("numPlay").innerHTML = countPlay
    game()
}

restartBtn.onclick = function () {
    restart ()
}

function restart () {
    countPlay = 5
    playerScore = 0
    computerScore = 0
    document.getElementById("playerScore").innerHTML = playerScore
    document.getElementById("computerScore").innerHTML = computerScore
    document.getElementById("restart").style.display = 'none'
    document.getElementById("finalResult").innerHTML= ''
    document.getElementById("singleResult").innerHTML = ''
    document.getElementById("numPlay").innerHTML = countPlay
    rockImg.onclick = () => click()
    paperImg.onclick = () => click()
    scissorsImg.onclick = () => click()
    rockImg.style.cursor = 'pointer'
    paperImg.style.cursor = 'pointer'
    scissorsImg.style.cursor = 'pointer'
}

function getComputerChoice () {
    let randomNumber = Math.floor(Math.random() * 3)
    if (randomNumber === 0) {
        return 'rock'
    } else if (randomNumber === 1) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        document.getElementById("singleResult").innerHTML = "Tie Game"
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            computerScore++
            document.getElementById("computerScore").innerHTML = computerScore
            document.getElementById("singleResult").innerHTML = "You Lose! Paper beats rock"
        } else {
            playerScore++
            document.getElementById("playerScore").innerHTML = playerScore
            document.getElementById("singleResult").innerHTML = "You Win! Rock bests scissors"
        }
    } else if (playerSelection ==="paper") {
        if (computerSelection === "rock") {
            playerScore++
            document.getElementById("playerScore").innerHTML = playerScore
            document.getElementById("singleResult").innerHTML = "You Win! Paper beats rock"
        } else {
            computerScore++
            document.getElementById("computerScore").innerHTML = computerScore
            document.getElementById("singleResult").innerHTML = "You Lose! Scissors bests paper"
        }
    } else {
        if (computerSelection === "rock") {
            computerScore++
            document.getElementById("computerScore").innerHTML = computerScore
            document.getElementById("singleResult").innerHTML = "You Lose! Rock beats scissors"
        } else {
            playerScore++
            document.getElementById("playerScore").innerHTML = playerScore
            document.getElementById("singleResult").innerHTML = "You Win! Scissor bests paper"
        }
    }
}


function finalResult() {
    if (playerScore === computerScore) {
        document.getElementById("finalResult").innerHTML = "It is a tie game"
    } else if (playerScore > computerScore) {
        document.getElementById("finalResult").innerHTML =  "You Win the game"
    } else {
        document.getElementById("finalResult").innerHTML = "You lost the game"
    }
}

function game() {
    if (countPlay === 0) {
        finalResult()
        document.getElementById("restart").style.display = 'block'
        rockImg.style.cursor = 'default'
        paperImg.style.cursor = 'default'
        scissorsImg.style.cursor = 'default'
        rockImg.onclick = function (e) {e.stopPropagation()}
        paperImg.onclick = function (e) {e.stopPropagation()}
        scissorsImg.onclick = function (e) {e.stopPropagation()}
    }
}

