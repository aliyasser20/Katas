let repeatNumbers = function(data) {
  let outputString = "";
  for (let j = 0; j < data.length; j++) {
    for (let i = 1; i <= data[j][1]; i++) {
      outputString += data[j][0];
    }
    if (j != data.length - 1) {
      outputString += ", ";
    }
  }
  return outputString;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));