const squareCode = function(message) {
  let regularExpression = / /g;
  let squareBox = [];
  let outputString = "";

  // Remove all spaces
  message = message.replace(regularExpression, "");

  let numberOfColumns = Math.ceil(Math.sqrt(message.length));

  // Create square box
  for (let i = 0; i < message.length; i = i + numberOfColumns) {
    squareBox.push(message.substring(i, i + numberOfColumns));
  }

  // Create string from reading square box in a certain way
  for (let j = 0; j < numberOfColumns; j++) {
    for (let i = 0; i < squareBox.length; i++) {
      let indexString = squareBox[i].toString();
      if (indexString[j] != undefined) {
        outputString += indexString[j];
      }
    }
    outputString += " ";
  }

  return outputString;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));