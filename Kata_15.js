const whiteQueen = [0, 5];
const blackQueen = [5, 0];

function generateBoard() {
  const boardUnderGeneration = [];
  for (let i = 0; i < 8; i++) {
    const rowUnderGeneration = [];
    for (let j = 0; j < 8; j++) {
      if (i === whiteQueen[0] && j === whiteQueen[1]) {
        rowUnderGeneration.push(1);
      } else if (i === blackQueen[0] && j === blackQueen[1]) {
        rowUnderGeneration.push(1);
      } else {
        rowUnderGeneration.push(0);
      }
    }
    boardUnderGeneration.push(rowUnderGeneration);
  }
  return boardUnderGeneration;
}

const generatedBoard = generateBoard(whiteQueen, blackQueen);

const queenThreat = function() {
  let output;
  // Check rows and columns
  while (output === undefined) {
    // Check each row
    for (let i = 0; i < 8; i++) {
      const sumRows = generatedBoard[i].reduce(function(
        accumulator,
        currentValue
      ) {
        return accumulator + currentValue;
      });
      if (sumRows === 2) {
        output = true;
      }
    }
    // Check each column
    for (let j = 0; j < 8; j++) {
      let sumColumns = 0;
      for (let i = 0; i < 8; i++) {
        sumColumns += generatedBoard[i][j];
      }
      if (sumColumns === 2) {
        output = true;
      }
    }
    if (output !== true) {
      output = false;
    }
  }
  // Check diagonals \\\ Top
  for (let x = 0; x < 7; x++) {
    let sumDiagonals = 0;
    for (let i = 0; i < 8; i++) {
      if (i + x < 8 && i + x >= 0) {
        sumDiagonals += generatedBoard[i][i + x];
      }
    }
    if (sumDiagonals === 2) {
      output = true;
    }
  }
  // Check diagonals \\\ Bottom
  for (let x = 1; x < 7; x++) {
    let sumDiagonals = 0;
    for (let i = 0; i < 8; i++) {
      if (i + x < 8 && i + x >= 0) {
        sumDiagonals += generatedBoard[i + x][i];
      }
    }
    if (sumDiagonals === 2) {
      output = true;
    }
  }
  // Check diagonals /// Top
  for (let x = 7; x > 0; x -= 1) {
    let sumDiagonals = 0;
    for (let i = 0; i < 8; i++) {
      if (x - i < 8 && x - i >= 0) {
        sumDiagonals += generatedBoard[i][x - i];
      }
    }
    if (sumDiagonals === 2) {
      output = true;
    }
  }
  // Check diagonals /// Bottom
  for (let x = 8; x < 13; x++) {
    let sumDiagonals = 0;
    for (let i = 7; i > 0; i -= 1) {
      if (x - i < 8 && x - i >= 0) {
        sumDiagonals += generatedBoard[x - i][i];
      }
    }
    if (sumDiagonals === 2) {
      output = true;
    }
  }
  return output;
};

console.log(generatedBoard);
console.log(queenThreat());
