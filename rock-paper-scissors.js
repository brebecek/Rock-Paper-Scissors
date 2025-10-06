function getComputerChoice() {
    var ComputerChoice;
    if (Math.floor(Math.random() * 3) === 0) {
        ComputerChoice = "rock"; 
    }
    else if (Math.floor(Math.random() * 3) === 1) {
        ComputerChoice = "paper";
    }

    else if(Math.floor(Math.random() * 3) === 2) {
        ComputerChoice = "scissors";
    }
    return ComputerChoice;
}

function getHumanChoice() {
    var HumanChoice = prompt('Please enter "rock", "paper", or "scissors"!');
    HumanChoice = HumanChoice.toLowerCase();
    return HumanChoice;
}

console.log(getHumanChoice());