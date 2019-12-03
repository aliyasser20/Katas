const urlEncode = function(text) {
  let textArray = text.split("");
  let textBack = "";
  
  // Remove extra spaces including before and after string
  for (let i = 0; i < textArray.length; i++) {
    if (textArray[i] === " " && textArray[i + 1] === " ") {
      textArray.splice(i, 1);
      i = i - 1;
    } else if (textArray[i] === " " && (i == 0 || i == textArray.length - 1)) {
      textArray.splice(i, 1);
      i = i - 1;
    }
  }

  // Replace remaining spaces with %20
  for (let i = 0; i < textArray.length; i++) {
    if (textArray[i] === " ") {
        textArray.splice(i, 1, "%20");
    }
  }

  // Array to string
  for (let i = 0; i < textArray.length; i++) {
    textBack += textArray[i];
  }

  return textBack;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));