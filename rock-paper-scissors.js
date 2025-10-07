function getComputerChoice() {
    var computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0) {
        computerChoice = "rock"; 
    }
    else if (computerChoice === 1) {
        computerChoice = "paper";
    }

    else if(computerChoice === 2) {
        computerChoice = "scissors";
    }
    return computerChoice;
}

function getHumanChoice() {
    var humanChoice = prompt('Please enter "rock", "paper", or "scissors"!');
    humanChoiceanChoice = humanChoice.toLowerCase();
    return humanChoice;
}

var humanScore = 0;
var computerScore = 0;

function playRound(humanChoice, ComputerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        console.log("You tie!");
    }

    else if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            console.log("You win! Rock beats scissors.")
        }
        else if (computerChoice === "paper") {
            console.log("You lose! Paper beats rock.")
        }
    }

    else if (humanChoice === "paper"){
        if (computerChoice === "rock"){
            console.log("You win! Paper beats rock.")
        }
        else if (computerChoice === "scissors"){
            console.log("You lose! Scissors beats rock.")
        }
    }

    else if (humanChoice === "scissors"){
        if (computerChoice === "paper"){
            console.log("You win! Scissors beats paper.")
        }
        else if (computerChoice === "rock"){
            console.log("You lose! Rock beats scissors.")
        }
    }

}
playRound();
console.log(computerChoice);