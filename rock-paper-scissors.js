function gameOverWin(humanChoice, computerChoice) {
    humanScore = 0;
    computerScore = 0;
    return `${humanChoice} beats ${computerChoice}. You win the game!`;
}

function gameOverLose(humanChoice, computerChoice){
    humanScore = 0;
    computerScore = 0;
    return `${computerChoice} beats ${humanChoice}. You lose the game.`;
}
function roundWin(humanChoice, computerChoice, humanScore, computerScore) {
    return `You win! ${humanChoice} beats ${computerChoice}. Score is ${humanScore} to ${computerScore}.`;
}
function roundLose(humanChoice, computerChoice, humanScore, computerScore) {
    return `You lose! ${computerChoice} beats ${humanChoice}. Score is ${humanScore} to ${computerScore}.`;
}

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0) {
        computerChoice = "Rock";
    } else if (computerChoice === 1) {
        computerChoice = "Paper";
    } else if (computerChoice === 2) {
        computerChoice = "Scissors";
    }
    return computerChoice;
}

function playRound(humanChoice) {

    const results = document.querySelector("#results");
    const roundResults = document.createElement("p");
    
    let computerChoice = getComputerChoice();
    if ((humanChoice == "Rock" && computerChoice == "Scissors") || (humanChoice == "Scissors" && computerChoice == "Paper") || (humanChoice == "Paper" && computerChoice == "Rock")) {
        humanScore++;
        if (humanScore < 5) {
            roundResults.textContent = roundWin(humanChoice, computerChoice, humanScore, computerScore);
        } else roundResults.textContent = gameOverWin(humanChoice, computerChoice);
        results.appendChild(roundResults);
    } else if ((humanChoice == "Rock" && computerChoice == "Paper") || (humanChoice == "Scissors" && computerChoice == "Rock") || (humanChoice == "Paper" && computerChoice == "Scissors")) {
        computerScore++;
        if (computerScore < 5) {
            roundResults.textContent = roundLose(humanChoice, computerChoice, humanScore, computerScore);
        } else roundResults.textContent = gameOverLose(humanChoice, computerChoice);
        results.appendChild(roundResults);
    } else {
        roundResults.textContent = `You tie! Score is ${humanScore} to ${computerScore}.`;
        results.appendChild(roundResults);
    }
}

let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let humanChoice = button.id;
        playRound(humanChoice);
    });
});

