// Functions //
function makeCamelCase(input) {
  let modifiedString = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] === " ") {
      modifiedString += input[i + 1].toUpperCase();
      i += 1;
    } else {
      modifiedString += input[i];
    }
  }
  return modifiedString;
}

function makePascalCase(input) {
  let modifiedString = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] === " ") {
      modifiedString += input[i + 1].toUpperCase();
      i += 1;
    } else if (i === 0) {
      modifiedString += input[i].toUpperCase();
    } else {
      modifiedString += input[i];
    }
  }
  return modifiedString;
}

function makeSnakeCase(input) {
  let modifiedString = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] === " ") {
      modifiedString += "_";
    } else {
      modifiedString += input[i];
    }
  }
  return modifiedString;
}

function makeKebabCase(input) {
  let modifiedString = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] === " ") {
      modifiedString += "-";
    } else {
      modifiedString += input[i];
    }
  }
  return modifiedString;
}

function makeTitleCase(input) {
  let modifiedString = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] === " ") {
      modifiedString += ` ${input[i + 1].toUpperCase()}`;
      i += 1;
    } else if (i === 0) {
      modifiedString += input[i].toUpperCase();
    } else {
      modifiedString += input[i];
    }
  }
  return modifiedString;
}

function makeVowelCase(input) {
  let modifiedString = "";
  for (let i = 0; i < input.length; i++) {
    if (
      input[i] === "a" ||
      input[i] === "e" ||
      input[i] === "i" ||
      input[i] === "o" ||
      input[i] === "u"
    ) {
      modifiedString += input[i].toUpperCase();
    } else {
      modifiedString += input[i];
    }
  }
  return modifiedString;
}

function makeConsonantCase(input) {
  let modifiedString = "";
  for (let i = 0; i < input.length; i++) {
    if (
      input[i] === "a" ||
      input[i] === "e" ||
      input[i] === "i" ||
      input[i] === "o" ||
      input[i] === "u"
    ) {
      modifiedString += input[i];
    } else {
      modifiedString += input[i].toUpperCase();
    }
  }
  return modifiedString;
}

function makeUpperCase(input) {
  const modifiedString = input.toUpperCase();
  return modifiedString;
}

function makeLowerCase(input) {
  const modifiedString = input.toLowerCase();
  return modifiedString;
}

// Main Function //
const makeCase = function(input, givenCase) {
  if (typeof givenCase === "string") {
    switch (givenCase) {
      case "camel":
        return makeCamelCase(input);
        break;
      case "pascal":
        return makePascalCase(input);
        break;
      case "snake":
        return makeSnakeCase(input);
        break;
      case "kebab":
        return makeKebabCase(input);
        break;
      case "title":
        return makeTitleCase(input);
        break;
      case "vowel":
        return makeVowelCase(input);
        break;
      case "consonant":
        return makeConsonantCase(input);
        break;
      case "upper":
        return makeUpperCase(input);
        break;
      case "lower":
        return makeLowerCase(input);
        break;
      default:
        break;
    }
  } else {
    let iteratedString = input;
    let modifiedString = "";
    for (let i = 0; i < input.length; i++) {
      switch (givenCase[i]) {
        case "camel":
          modifiedString = makeCamelCase(iteratedString);
          break;
        case "pascal":
          modifiedString = makePascalCase(iteratedString);
          break;
        case "snake":
          modifiedString = makeSnakeCase(iteratedString);
          break;
        case "kebab":
          modifiedString = makeKebabCase(iteratedString);
          break;
        case "title":
          modifiedString = makeTitleCase(iteratedString);
          break;
        case "vowel":
          modifiedString = makeVowelCase(iteratedString);
          break;
        case "consonant":
          modifiedString = makeConsonantCase(iteratedString);
          break;
        case "upper":
          modifiedString = makeUpperCase(iteratedString);
          break;
        case "lower":
          modifiedString = makeLowerCase(iteratedString);
          break;
        default:
          break;
      }
      iteratedString = modifiedString;
    }
    return iteratedString;
  }
};

// Input //
console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
