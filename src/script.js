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
            beats: "Rock",
        },
    ];
    playerSelection = playerSelection.toLocaleLowerCase();
    computerSelection = computerSelection.toLocaleLowerCase();
    for (let i = 0; i < pairs.length; i++) {
        let pair = pairs[i];
        let choise = pair.choise.toLocaleLowerCase();
        let beats = pair.beats.toLocaleLowerCase();
        if (choise === playerSelection && beats === computerSelection) {
            return 'Player won'
        }
        if (choise === computerSelection && beats === playerSelection) {
            return "Computer won"
        };
    }
    return "It's Draw";
};
let playerSelection = "rock";
let computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));


