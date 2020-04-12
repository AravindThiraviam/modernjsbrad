/*
GAME FUNCTIONS
-player must guess a number between a min and max
-player gets a certain amount of guesses
-notify player of guesses remaining
-notify player the correct answer if lose
-let player choose to play
*/

//game values
let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessLeft = 3;

//UI elements
const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

//assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//play again event listener
game.addEventListener("mousedown", function () {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

//listen for guess
guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);
  console.log(guess);

  //validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please Enter a Number between ${min} and ${max}`, "red");
  }

  //check if won
  if (guess === winningNum) {
    //game over won
    gameOver(true, `${winningNum} is correct, YOU WIN !!`);

    //change border color
    guessInput.style.borderColor = "green";
  } else {
    //wrong number
    guessLeft -= 1;

    if (guessLeft === 0) {
      //game over lost
      gameOver(
        false,
        `Game Over, you lost. The correct number was ${winningNum}`
      );
    } else {
      //game continues - answer wrong

      //change border color
      guessInput.style.borderColor = "red";

      //clear input
      guessInput.value = "";

      //tell user its the wrong number
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, `red`);
    }
  }
});

//game over
function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");

  //disable input
  guessInput.disable = true;
  //change border color
  guessInput.style.borderColor = "color";
  //set text color
  message.style.color = color;
  //set message
  setMessage(msg);

  //play agia
  guessBtn.value = "Play Again";
  guessBtn.className += "play-again";
}

//get winning number
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//set messsage
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
