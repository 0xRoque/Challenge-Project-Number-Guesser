let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

console.log(generateTarget());

const compareGuesses = (human, computerGuess, targetGuess) => {
  if (Math.abs(human - targetGuess) <= Math.abs(computerGuess - targetGuess)) {
    return true;
  } else {
    return false;
  }
};

const updateScore = (winner) => {
  if (winner === "human") {
    humanScore++;
  } else if (winner === "computer") {
    computerScore++;
  }
};

const advanceRound = () => currentRoundNumber++;
