// Defines initial scores
let userScore = 0;
let computerScore = 0;
// Defines the IDs
const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
// Adds a click listner to respond whenever user hits reset button
document.getElementById('reset').onclick = resetScores;
let userChoice
let computerChoice
let result

// Adds a EventListner which responds to what option the user clicks
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  // Runs the actual game
  generateComputerChoice()
  getResult()
}))
// Gets the computers choice
function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    computerChoice = 'rock'
  }
  if (randomNumber === 1) {
    computerChoice = 'scissors'
  }
  if (randomNumber === 2) {
    computerChoice = 'paper'
  }
  computerChoiceDisplay.innerHTML = computerChoice
}

// Runs the Main Game
function getResult() {
  if (computerChoice === userChoice) {
    result = 'its a draw!';
  }
  if (computerChoice === 'rock' && userChoice === "paper") {
    result = 'you win!';
    userScore++;
  }
  if (computerChoice === 'rock' && userChoice === "scissors") {
    result = 'you lose!';
    computerScore++;
  }
  if (computerChoice === 'paper' && userChoice === "scissors") {
    result = 'you win!';
    userScore++
  }
  if (computerChoice === 'paper' && userChoice === "rock") {
    result = 'you lose!';
    computerScore++;
  }
  if (computerChoice === 'scissors' && userChoice === "rock") {
    result = 'you win!';
    userScore++;
  }
  if (computerChoice === 'scissors' && userChoice === "paper") {
    result = 'you lose!';
    computerScore++;
  }
  // displays results
  resultDisplay.innerHTML = result
  //runs the updateScoreboard function everytime a point is earned 
  updateScoreboard();
}


// updates the scoreboard everytime GetResults function is run
function updateScoreboard() {
  document.getElementById('userScore').innerHTML = userScore;
  document.getElementById('computerScore').innerHTML = computerScore;
}

// Resets the scoreboard
function resetScores() {
  userScore = 0;
  computerScore = 0;
  document.getElementById('userScore').innerHTML = userScore;
  document.getElementById('computerScore').innerHTML = computerScore;
  document.getElementById('status').innerHTML = "";
}
