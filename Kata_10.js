const calculateChange = function(total, cash) {
  let changeAmount = cash - total;
  const changeBack = {};

  if (changeAmount / 2000 >= 1) {
    changeBack.twentyDollar =
      changeAmount / 2000 - (changeAmount % 2000) / 2000;
    changeAmount -= changeBack.twentyDollar * 2000;
  }

  if (changeAmount / 1000 >= 1) {
    changeBack.tenDollar = changeAmount / 1000 - (changeAmount % 1000) / 1000;
    changeAmount -= changeBack.tenDollar * 1000;
  }

  if (changeAmount / 500 >= 1) {
    changeBack.fiveDollar = changeAmount / 500 - (changeAmount % 500) / 500;
    changeAmount -= changeBack.fiveDollar * 500;
  }

  if (changeAmount / 200 >= 1) {
    changeBack.twoDollar = changeAmount / 200 - (changeAmount % 200) / 200;
    changeAmount -= changeBack.twoDollar * 200;
  }

  if (changeAmount / 100 >= 1) {
    changeBack.oneDollar = changeAmount / 100 - (changeAmount % 100) / 100;
    changeAmount -= changeBack.oneDollar * 100;
  }

  if (changeAmount / 25 >= 1) {
    changeBack.quarter = changeAmount / 25 - (changeAmount % 25) / 25;
    changeAmount -= changeBack.quarter * 25;
  }

  if (changeAmount / 10 >= 1) {
    changeBack.dime = changeAmount / 10 - (changeAmount % 10) / 10;
    changeAmount -= changeBack.dime * 10;
  }

  if (changeAmount / 5 >= 1) {
    changeBack.nickel = changeAmount / 5 - (changeAmount % 5) / 5;
    changeAmount -= changeBack.nickel * 5;
  }

  if (changeAmount / 1 >= 1) {
    changeBack.penny = changeAmount / 1 - (changeAmount % 1) / 1;
    changeAmount -= changeBack.penny * 1;
  }

  return changeBack;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
