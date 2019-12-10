const multiplicationTable = function(maxValue) {
  const multiplicationRow = [];
  const multiplicationArray = [];
  let outputString = "";

  for (let i = 1; i <= maxValue; i++) {
    for (let j = 1; j <= maxValue; j++) {
      multiplicationRow[j - 1] = j;
    }
    multiplicationArray[i - 1] = multiplicationRow.map(function(x) {
      return x * i;
    });
  }

  for (let k = 0; k < multiplicationArray.length; k++) {
    for (let z = 0; z < multiplicationArray.length; z++) {
      outputString += multiplicationArray[k][z];
      outputString += " ";
    }
    outputString += "\n";
  }

  return outputString;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
