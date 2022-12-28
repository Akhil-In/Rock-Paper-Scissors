// UI for Player Choice and Computer Choice

let playerUi = document.querySelector(".playerUi");
let computerUi = document.querySelector(".computerUi");
let resultContent = document.querySelector(".resultContent");
let user_point = document.querySelector(".User-Point");
let winnerUi = document.querySelector(".won");

let computer_point = document.querySelector(".Computer-Point");

// Buttons for Induvidual Tools of R.P.S
let buttons = document.querySelectorAll(".btn");

var userPoint = 0;

var computerPoint = 0;
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var audio = new Audio("sound/interface-1-126517.mp3");
    audio.play();
    const playerSelection = this.classList[1];
    const computerSelection = getComputerChoice();
    // ----------------------------------------------------------
    let currentButton = document.querySelector(`.${playerSelection}`);
    currentButton.classList.add("shadow");

    setTimeout(function () {
      currentButton.classList.remove("shadow");
    }, 200);

    playerUi.style.cssText = `
        background-image: url("images/${playerSelection}_symbol.png");
        background-size: contain;
        background-repeat: no-repeat;
        `;
    computerUi.style.cssText = `
        background-image: url("images/${computerSelection.toLocaleLowerCase()}_symbol_right.png");
        background-size: contain;
        background-repeat: no-repeat;
        `;
    // ------------------------------------------------------------------------

    let result = playRound(playerSelection, computerSelection);
    resultContent.textContent = result[0];
    console.log(userPoint);

    if (result[1] === 1) {
      resultContent.textContent = "🏆" + result[0] + "🏆";
      resultContent.style.cssText = `color: green;`;
      userPoint += 1;
      user_point.textContent = userPoint;

      if (userPoint === 5) {
        var audio = new Audio("sound/crowd-cheer-ii-6263.mp3");
        audio.play();
        setTimeout(function () {
          location.reload();
        }, 2200);
        winnerUi.innerHTML = `<img src="images/winner-cracker-unscreen.gif">`;
      }
    } else if (result[1] === -1) {
      resultContent.textContent = "😔" + result[0] + "😔";
      resultContent.style.cssText = `color: red;`;
      computerPoint += 1;
      computer_point.textContent = `${computerPoint}`;

      if (computerPoint === 5) {
        var audio = new Audio("sound/mixkit-retro-arcade-lose-2027.wav");
        audio.play();
        setTimeout(function () {
          location.reload();
        }, 2200);
        winnerUi.innerHTML = `<img src="images/youloose.gif" height="500" width="600">`;

      }
    }else if (result[1] === 0){
      resultContent.textContent = "😕" + result[0] + "😕";
      resultContent.style.cssText = `
            color: orange;
            `;
    }
  });
}

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
function getComputerChoice() {
  let tools = ["Rock", "Paper", "Scissor"];
  let randomNum = Math.floor(Math.random() * 3);
  return tools[randomNum];
}

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
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

// function for playing for five rounds

// function game() {
//   let userPoint = 0;
//   let computerPoint = 0;
//   for (let i = 1; i < 6; i++) {
//     const playerSelection = prompt("Enter your Choice for Round: " + i);
//     console.log("Player Choice: " + playerSelection);
//     const computerSelection = getComputerChoice();
//     console.log("Computer Choice: " + computerSelection);
//     const gameResult = playRound(playerSelection, computerSelection);
//     console.log("Round: " + i + " Result is: " + gameResult[0]);

//     if (gameResult[1] === 1) {
//       userPoint += 1;
//     } else if (gameResult[1] === -1) {
//       computerPoint += 1;
//     } else {
//       continue;
//     }
//   }

//   if (userPoint > computerPoint) {
//     const point = userPoint - computerPoint;
//     return "You won by: " + point + " Points";
//   } else if (computerPoint > userPoint) {
//     const wonPont = computerPoint - userPoint;
//     return "You loose by: " + wonPont + " Points";
//   } else {
//     return "Draw: " + userPoint + " " + computerPoint;
//   }
// }
