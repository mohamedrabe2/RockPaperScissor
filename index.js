let humanCount = 0;
let computerCount = 0;
let rounds = 0;
const maxRounds = 5;

const scoreDiv = document.getElementById("score");
const resultDiv = document.getElementById("result");
const finalDiv = document.getElementById("final");
const buttonsDiv = document.getElementById("buttons");
const restartBtn = document.getElementById("restart");

function getComputerChoice() {
  const arr = ["rock", "paper", "scissors"];
  const num = Math.floor(Math.random() * 3);
  return arr[num];
}

function getRound(humanChoice, computerChoice) {
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanCount++;
    return `You win this round! ${humanChoice} beats ${computerChoice}.`;
  } else if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "scissors" && humanChoice === "paper")
  ) {
    computerCount++;
    return `You lose this round! ${computerChoice} beats ${humanChoice}.`;
  } else if (computerChoice === humanChoice) {
    return `It's a tie! Both chose ${humanChoice}.`;
  } else {
    return "Invalid input.";
  }
}

function updateScore() {
  scoreDiv.textContent = `You: ${humanCount} - Computer: ${computerCount}`;
}

function endGame() {
  let message = "";
  if (humanCount > computerCount) {
    message = "Congratulations! You win the game!";
  } else if (computerCount > humanCount) {
    message = "You lose the game!";
  } else {
    message = "It's a tie game!";
  }
  finalDiv.textContent = message;
  buttonsDiv.style.display = "none";
  restartBtn.style.display = "inline-block";
}

function handleClick(e) {
  if (!e.target.dataset.choice) return;
  if (rounds >= maxRounds) return;
  const humanSelection = e.target.dataset.choice;
  const computerSelection = getComputerChoice();
  const roundResult = getRound(humanSelection, computerSelection);
  resultDiv.textContent = roundResult;
  rounds++;
  updateScore();
  if (rounds >= maxRounds) {
    endGame();
  }
}

function restartGame() {
  humanCount = 0;
  computerCount = 0;
  rounds = 0;
  updateScore();
  resultDiv.textContent = "";
  finalDiv.textContent = "";
  buttonsDiv.style.display = "block";
  restartBtn.style.display = "none";
}

buttonsDiv.addEventListener("click", handleClick);
restartBtn.addEventListener("click", restartGame);

updateScore();
