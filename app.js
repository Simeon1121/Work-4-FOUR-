"use strict";
let number = document.querySelector(".number");
let inpOfGuess = document.querySelector(".guess");
let checkBtn = document.querySelector(".btn-checker");
let message = document.querySelector(".message");
let againBtn = document.querySelector(".again");
let score = document.querySelector(".score");

// console.log(typeof inpOfGuess.value);
// function gamer(e) {
//   e.preventDefault();
//   let body = document.body.style;
//   let randomNumGen = Math.ceil(Math.random() * 6);

//   console.log(randomNumGen);
//   if (!inpOfGuess.value) {
//     message.textContent = "input field must not be empty";
//   } else if (Number(inpOfGuess.value) > randomNumGen) {
//     message.textContent = "you guessed higher";
//     number.textContent = randomNumGen;
//     score.textContent--;
//     body.backgroundColor = "blue";
//   } else if (Number(inpOfGuess.value) < randomNumGen) {
//     message.textContent = "You guessed lower";
//     number.textContent = randomNumGen;
//     score.textContent--;
//     body.backgroundColor = "yellow";
//   }
// }

// checkBtn.addEventListener("click", gamer);
// =============


function gamer(e) {
  e.preventDefault();
  let body = document.body.style;
  let randomNumGen = Math.ceil(Math.random() * 6);

  console.log(randomNumGen);
  if (!inpOfGuess.value) {
    message.textContent = "Input field must not be empty";
  } else if (Number(inpOfGuess.value) === randomNumGen) {
    message.textContent = "You guessed correctly, Game Over!";
    number.textContent = randomNumGen;
    body.backgroundColor = "green";
    checkBtn.disabled = true;
  } else if (Number(inpOfGuess.value) > randomNumGen) {
    message.textContent = "You guessed higher";
    number.textContent = randomNumGen;
    score.textContent--;
    body.backgroundColor = "blue";
  } else if (Number(inpOfGuess.value) < randomNumGen) {
    message.textContent = "You guessed lower";
    number.textContent = randomNumGen;
    score.textContent--;
    body.backgroundColor = "yellow";
  }
}
checkBtn.addEventListener("click", gamer);


