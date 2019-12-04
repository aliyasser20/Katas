let camelCase = function(input) {
  let output = "";

  for (let i = 0; i < input.length; i++) {
    if (input[i] === " " && input[i + 1] === " ") {
      output += "";
    } else if (input[i] === " ") {
      output += input[i + 1].toUpperCase();
      i += 1;
    } else {
      output += input[i];
    }
  }

  return output; 
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));