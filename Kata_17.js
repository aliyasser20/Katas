let prompt = require("prompt-sync")();
let randomNumber = Math.ceil(Math.random() * 100);
let answer = 0;
let attempts = 0;
let previousAnswers = [];

while (answer != randomNumber) {
  answer = prompt("Guess a number: ");
  let isNumber = undefined;

  // Check if input is a number because default prompt input is of type string
  for (let i = 0; i < answer.length; i++) {
    if (answer[i] == "0" || answer[i] == "1" || answer[i] == "2" || answer[i] == "3" || answer[i] == "4" || answer[i] == "5" || answer[i] == "6" || answer[i] == "7" || answer[i] == "8" || answer[i] == "9") {
      isNumber = true;
    } else {
      isNumber = false;
    }
  }
  // 

  if (isNumber == true) {
    if (previousAnswers.includes(answer) == false) {
      if (answer > randomNumber) {
        attempts += 1;
        previousAnswers.push(answer);
        console.log("Too High!");
      } else if (answer < randomNumber) {
        attempts += 1;
        previousAnswers.push(answer);
        console.log("Too Low!");
      } else if (answer == randomNumber) {
        attempts += 1;
        console.log("You got it. You took " + attempts + " attempts!");
      }
    } else {
      console.log("Already Guessed!");
    }
  } 
  else {
    console.log("Not a number! Try again!");
  }
}
