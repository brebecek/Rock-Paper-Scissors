const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let humanChoice = button.id;
        playRound(humanChoice);
    });
});
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    var computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0) {
        computerChoice = "rock";
    } else if (computerChoice === 1) {
        computerChoice = "paper";
    } else if (computerChoice === 2) {
        computerChoice = "scissors";
    }
    return computerChoice;
}

function playRound(humanChoice) {

    const results = document.querySelector("#results");
    const roundResults = document.createElement("p");

        let computerChoice = getComputerChoice();

        if (humanChoice === computerChoice) {
            roundResults.textContent = `You tie! Score is ${humanScore} to ${computerScore}.`;
            results.appendChild(roundResults);
        } else if (humanChoice === "rock") {
            if (computerChoice === "scissors") {
                humanScore++;
                if (humanScore == 5){
                    roundResults.textContent = `${humanChoice} beats ${computerChoice}. You win the game!`;
                    results.appendChild(roundResults);
                    humanScore = 0;
                    computerScore = 0;
                } else
                    roundResults.textContent = `You win! ${humanChoice} beats ${computerChoice}. Score is 
                    ${humanScore} to ${computerScore}.`;
                    results.appendChild(roundResults);

            } else if (computerChoice === "paper") {
                computerScore++;
                if (computerScore == 5){
                    roundResults.textContent = `${computerChoice} beats ${humanChoice}. You lose the game.`;
                    results.appendChild(roundResults);
                    humanScore = 0;
                    computerScore = 0;
                } else
                    roundResults.textContent = `You lose! ${computerChoice} beats ${humanChoice}. Score is 
                    ${humanScore} to ${computerScore}.`;
                    results.appendChild(roundResults);
            }
        } else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                humanScore++;
                if (humanScore == 5){
                    roundResults.textContent = `${humanChoice} beats ${computerChoice}. You win the game!`;
                    results.appendChild(roundResults);
                    humanScore = 0;
                    computerScore = 0;
                } else
                    roundResults.textContent = `You win! ${humanChoice} beats ${computerChoice}. Score is 
                    ${humanScore} to ${computerScore}.`;
                    results.appendChild(roundResults);
            } else if (computerChoice === "scissors") {
                computerScore++;
                if (computerScore == 5){
                    roundResults.textContent = `${computerChoice} beats ${humanChoice}. You lose the game.`;
                    results.appendChild(roundResults);
                    humanScore = 0;
                    computerScore = 0;
                } else
                    roundResults.textContent = `You lose! ${computerChoice} beats ${humanChoice}. Score is 
                    ${humanScore} to ${computerScore}.`;
                    results.appendChild(roundResults);
            }
        } else if (humanChoice === "scissors") {
            if (computerChoice === "paper") {
                humanScore++;
                if (humanScore == 5){
                    roundResults.textContent = `${humanChoice} beats ${computerChoice}. You win the game!`;
                    results.appendChild(roundResults);
                    humanScore = 0;
                    computerScore = 0;
                } else
                    roundResults.textContent = `You win! ${humanChoice} beats ${computerChoice}. Score is 
                    ${humanScore} to ${computerScore}.`;
                    results.appendChild(roundResults);
            } else if (computerChoice === "rock") {
                computerScore++;
                if (computerScore == 5){
                    roundResults.textContent = `${computerChoice} beats ${humanChoice}. You lose the game.`;
                    results.appendChild(roundResults);
                    humanScore = 0;
                    computerScore = 0;
                } else
                    roundResults.textContent = `You lose! ${computerChoice} beats ${humanChoice}. Score is 
                    ${humanScore} to ${computerScore}.`;
                    results.appendChild(roundResults);
            }
        }
    }
