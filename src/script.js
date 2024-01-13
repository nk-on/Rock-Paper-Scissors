const optionButtons = document.querySelectorAll(".option-button");
const choosenOption = document.querySelectorAll(".Choosen-option");
const playerScore = document.querySelectorAll(".score");
optionButtons.forEach(
    (button) => {
        button.addEventListener("click", playRound)
    }
);
/* Function to get the computer's choice in a Rock, Paper, Scissors game.
  returns The randomly selected choice (Rock, Paper, or Scissors).
*/
function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    let randomIdx = Math.floor(Math.random() * options.length);
    return options[randomIdx];
};
/*
 Function to play a round of Rock, Paper, Scissors game. 
 Determines the winner between the player  and the computer in particular cound, 
 and renders chosen options' emojis in the UI.
 */
function playRound() {
    let pairs = [
        {
            emoji: "✊",
            choice: "Rock",
            beats: "Scissors",
        },
        {
            emoji: "✋",
            choice: "Paper",
            beats: "Rock",
        },
        {
            emoji: '✌️',
            choice: "Scissors",
            beats: "Paper",
        },
    ];
    const playerSelection = this.dataset.option;
    const computerSelection = getComputerChoice();
    /*Block of code which is responsible for rendering emoji 
      corresponding to the choosen option
    */
    pairs.forEach((pair) => {
        let choise = pair.choice;
        if (choise === playerSelection) {
            choosenOption[0].textContent = pair.emoji;
        };
        if (choise === computerSelection) {
            choosenOption[1].textContent = pair.emoji;
        };
    });
    // Determine the winner based on the choices
    for (let i = 0; i < pairs.length; i++) {
        let pair = pairs[i];
        let choise = pair.choice;
        let beats = pair.beats;
        if (choise === playerSelection && beats === computerSelection) {
            return "Player won"
        }
        if (choise === computerSelection && beats === playerSelection) {
            return "Computer won"
        };
    }
    return "It's Draw";
};
// function game() {
//     let playerScore = 0;
//     let computerScore = 0;
//     while (playerScore < 5 && computerScore < 5) {
//         // let playerChoice = prompt("Enter you choice");
//         let computerChoice = getComputerChoice();
//         const result = playRound(playerChoice, computerChoice);
//         console.log(playerChoice, computerChoice)
//         if (result === "Player won") {
//             playerScore++;
//         } else if (result === "Computer won") {
//             computerScore++;
//         }
//         console.log(playerScore, computerScore)
//     };
//     if (playerScore > computerScore) {
//         return "Player Won"
//     }
//     return "Computer won"
// };
// console.log(game());