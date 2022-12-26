function getComputerChoice() {
  let tools = ["Rock", "Paper", "Scissor"];
  let randomNum = Math.floor(Math.random() * 3);
  return tools[randomNum];
}

const playerSelection = "paper";
const computerSelection = getComputerChoice();
let result = playRound(playerSelection, computerSelection);

console.log("Computer Choice :" + computerSelection);
console.log("User Choice :" + playerSelection);
console.log(result);

function playRound(playerSelection, computerSelection) {
  let playerSelect = playerSelection.toLowerCase();
  let computerSelect = computerSelection.toLowerCase();
  if (playerSelect === computerSelect) {
    let message = ["Draw", 0];
    return message;
  } else if (playerSelect === "paper" && computerSelect === "rock") {
    let message = ["You won,  Paper beats Rock", 1];
    return message;
  } else if (playerSelect === "scissor" && computerSelect === "paper") {
    let message = ["You won,  scissor beats Paper", 1];
    return message;
  } else if (playerSelect === "rock" && computerSelect === "scissor") {
    let message = ["You won,  Rock beats scissor", 1];
    return message;
  } else if (playerSelect === "paper" && computerSelect === "scissor") {
    let message = ["You Loose,  scissor beats Paper", -1];
    return message;
  } else if (playerSelect === "rock" && computerSelect === "paper") {
    let message = ["You Loose,  Paper beats rock", -1];
    return message;
  } else if (playerSelect === "scissor" && computerSelect === "rock") {
    let message = ["You Loose,  Rock  beats scissor", -1];
    return message;
  }
}

function game() {
  let userPoint = 0;
  let computerPoint = 0;
  for (let i = 1; i < 6; i++) {
    const playerSelection = prompt("Enter your Choice for Round: " + i);
    console.log("Player Choice: " + playerSelection);
    const computerSelection = getComputerChoice();
    console.log("Computer Choice: " + computerSelection);
    const gameResult = playRound(playerSelection, computerSelection);
    console.log("Round: " + i + " Result is: " + gameResult[0]);

    if (gameResult[1] === 1) {
      userPoint += 1;
    } else if (gameResult[1] === -1) {
      computerPoint += 1;
    } else {
      continue;
    }
  }

  if (userPoint > computerPoint) {
    const point = userPoint - computerPoint;
    return "You won by: " + point + " Points";
  } else if (computerPoint > userPoint) {
    const wonPont = computerPoint - userPoint;
    return "You loose by: " + wonPont + " Points";
  } else {
    return "Draw: " + userPoint + " " + computerPoint;
  }
}
