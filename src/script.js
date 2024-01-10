function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    let randomIdx = Math.floor(Math.random() * options.length);
    return options[randomIdx];
};
function playRound(playerSelection, computerSelection) {
    let pairs = [
        {
            choise: "Rock",
            beats: "Scissors",
        },
        {
            choise: "Paper",
            beats: "Rock",
        },
        {
            choise: "Scissors",
            beats: "Paper",
        },
    ];
    playerSelection = playerSelection.toLocaleLowerCase();
    computerSelection = computerSelection.toLocaleLowerCase();
    for (let i = 0; i < pairs.length; i++) {
        let pair = pairs[i];
        let choise = pair.choise.toLocaleLowerCase();
        let beats = pair.beats.toLocaleLowerCase();
        if (choise === playerSelection && beats === computerSelection) {
            return "Player won"
        }
        if (choise === computerSelection && beats === playerSelection) {
            return "Computer won"
        };
    }
    return "It's Draw";
};
function game() {
    let playerScore = 0;
    let computerScore = 0;
    while (playerScore < 5 && computerScore < 5) {
        let playerChoice = prompt("Enter you choice");
        let computerChoice = getComputerChoice();
        const result = playRound(playerChoice, computerChoice);
        console.log(playerChoice, computerChoice)
        if (result === "Player won") {
            playerScore++;
        } else if (result === "Computer won") {
            computerScore++;
        }
        console.log(playerScore, computerScore)
    };
    if(playerScore > computerScore){
        return "Player Won"
    }
    return "Computer won"
};
console.log(game());