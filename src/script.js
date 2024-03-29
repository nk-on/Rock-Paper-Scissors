const optionButtons = document.querySelectorAll(".option-button");
const choosenOption = document.querySelectorAll(".Choosen-option");
const playerScoreContainer = document.querySelector(".Player-score");
const computerScoreContainer = document.querySelector(".Computer-score");
const popUp = document.querySelector(".pop-up ");
const winnerContainer = document.querySelector(".winner");
const playAgainButton = document.querySelector(".play-again-button");
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
    const playerChoice = this.getAttribute("data-option");
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
    for (let i = 0; i < pairs.length; i++) {
        const pair = pairs[i];
        const choice = pair.choice;
        const beats = pair.beats;
        if (choice === playerChoice && beats === computerChoice) {
            gameFunction("Player won");
            return;
        } else if (choice === computerChoice && beats === playerChoice) {
            gameFunction("Computer won");
            return;
        }
    }
    gameFunction("it's draw");
};
function game() {
    let playerScore = 0;
    let computerScore = 0;
    return (result) => {
        //block of code which is responsible for increasing and displaying both player's scores
        if (result === "Player won") {
            playerScore++;
        } else if (result === "Computer won") {
            computerScore++;
        }
        //block of code which is responsible for declaring winner by comparing both player's scores
        if (playerScore >= 5 || computerScore >= 5) {
            let winner = "Computer"
            if (playerScore > computerScore) {
                winner = "Player"
            }
            playerScore = computerScore = 0;
            displayPopUp(winner);
        };
        playerScoreContainer.textContent = playerScore;
        computerScoreContainer.textContent = computerScore;
    };
};
function displayPopUp(winner) {
    popUp.showModal();
    winnerContainer.textContent = `${winner} won !`
};
function playAgain() {
    popUp.close();
    choosenOption[0].textContent = "?";
    choosenOption[1].textContent = "?";
};
optionButtons.forEach(
    (button) => {
        button.addEventListener("click", playRound);
    }
);
playAgainButton.addEventListener("click", playAgain);