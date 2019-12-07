const urlDecode = function(text) {
  let encodedObject = {};
  let arrayOfKeys = [];
  let arrayOfValues = [];
  let loopCompleted = false;
  let regularExpression = /%20/g;

  // Create an array for keys and an array for values
  while (loopCompleted === false) {
    for (let i = 0; i < text.length; i++) {
      switch (text[i]) {
        case "=":
          arrayOfKeys.push(text.substring(0, i));
          text = text.substring(i + 1);
          i = 0;
          break;
        case "&":
          arrayOfValues.push(text.substring(0, i));
          text = text.substring(i + 1);
          i = 0;
          break;
      }

      if (i + 1 === text.length) {
        arrayOfValues.push(text.substring(0, text.length));
        loopCompleted = true;
      }
    }
  }
  
  // Convert all %20 to spaces for keys and values
  for (let i = 0; i < arrayOfKeys.length; i++) {
    let keyString = arrayOfKeys[i].toString().replace(regularExpression, " ");
    arrayOfKeys[i] = keyString;
    let valueString = arrayOfValues[i].toString().replace(regularExpression, " ");
    arrayOfValues[i] = valueString;
  }

  // Create an object with the keys and the corresponding values
  for (let i = 0; i < arrayOfKeys.length; i++) {
    encodedObject[arrayOfKeys[i]] = arrayOfValues[i];
  }

  return encodedObject;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);