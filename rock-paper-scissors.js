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





function playGame(){
    var humanScore = 0;
    var computerScore = 0;
    let round = 0;

    function playRound(humanChoice, ComputerChoice) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
    
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
    
    while (round < 5) {
        playRound();
        console.log("The score is " + humanScore + " to " + computerScore)
        round++;
    }
}

playGame();