const optionButtons = document.querySelectorAll(".option-button");
const choosenOption = document.querySelectorAll(".Choosen-option");
const playerScoreContainer = document.querySelector(".Player-score");
const computerScoreContainer = document.querySelector(".Computer-score");
const gameFunction = game();
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
    let result;
    const playerChoice = this.getAttribute("data-option");;
    const computerChoice = getComputerChoice();
    /*Block of code which is responsible for rendering emoji 
      corresponding to the choosen option
    */
    pairs.forEach((pair) => {
        let choice = pair.choice;
        if (choice === playerChoice) {
            choosenOption[0].textContent = pair.emoji;
        };
        if (choice === computerChoice) {
            choosenOption[1].textContent = pair.emoji;
        };
    });
    // Determine the winner based on the choices
    pairs.forEach((pair) => {
        let choice = pair.choice;
        let beats = pair.beats;
        if (choice === playerChoice && beats === computerChoice) {
            result = "Player Won";
        } else if (choice === computerChoice && beats === playerChoice) {
            result = "Computer won";
        } else {
            result = "It's Draw";
        }
    });
    console.log(result);
    gameFunction(result);
};
function game() {
    let playerScore = 0;
    let computerScore = 0;
    return (result)=>{
        if (result === "Player won") {
            playerScore++;
        } else if (result === "Computer won") {
            computerScore++;
        }
        playerScoreContainer.textContent = playerScore;
        computerScoreContainer.textContent = computerScore
        if (playerScore > computerScore) {
            return "Player Won"
        }
        return "Computer won";
    };
}

optionButtons.forEach(
    (button) => {
        button.addEventListener("click", playRound);
    }
);
