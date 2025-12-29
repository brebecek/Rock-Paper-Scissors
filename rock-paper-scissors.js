function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    const results = document.querySelector("#results");
    const roundResults = document.createElement("p");

    if (humanChoice === computerChoice) {
        roundResults.textContent = "You tie!";
        results.appendChild(roundResults);
        }
    
    else if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            roundResults.textContent = "You win! Rock beats scissors.";
            results.appendChild(roundResults);

        }
        else if (computerChoice === "paper") {
           roundResults.textContent = "You lose! Paper beats rock.";
           results.appendChild(roundResults);
        }
    }

    else if (humanChoice === "paper"){
        if (computerChoice === "rock"){
            roundResults.textContent = "You win! Paper beats rock.";
            results.appendChild(roundResults);
                }
        else if (computerChoice === "scissors"){
            roundResults.textContent = "You lose! Scissors beats paper.";
            results.appendChild(roundResults);
                }
    }

    else if (humanChoice === "scissors"){
        if (computerChoice === "paper"){
            roundResults.textContent = "You win! Scissors beats paper.";
            results.appendChild(roundResults);
                }
        else if (computerChoice === "rock"){
            roundResults.textContent = "You lose! Rocks beats scissors.";
            results.appendChild(roundResults);
                }
    }
}
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let humanChoice = button.id;
        playRound(humanChoice);
    });
});



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
/*
function playGame(){
    var humanScore = 0;
    var computerScore = 0;
    let round = 0;
    function playRound(humanChoice, ComputerChoice) {
        //humanChoice = getHumanChoice();//
        //computerChoice = getComputerChoice();//
    
        if (humanChoice === computerChoice) {
            console.log("You tie!");
        }
    
        else if (humanChoice === "rock") {
            if (computerChoice === "scissors") {
                console.log("You win! Rock beats scissors.")
                humanScore++;
            }
            else if (computerChoice === "paper") {
                console.log("You lose! Paper beats rock.")
                computerScore++;
            }
        }
    
        else if (humanChoice === "paper"){
            if (computerChoice === "rock"){
                console.log("You win! Paper beats rock.")
                humanScore++;
            }
            else if (computerChoice === "scissors"){
                console.log("You lose! Scissors beats rock.")
                computerScore++;
            }
        }
    
        else if (humanChoice === "scissors"){
            if (computerChoice === "paper"){
                console.log("You win! Scissors beats paper.")
                humanScore++;
            }
            else if (computerChoice === "rock"){
                console.log("You lose! Rock beats scissors.")
                computerScore++;
            }
        }
    
    }
    
    /*while (round < 5) {
        playRound();
        console.log("The score is " + humanScore + " to " + computerScore)
        round++;
    }*/


//playGame();