let sumLargestNumbers = function(data) {
  let largestNum = 0;
  let largestInd;
  for (let i = 0; i < data.length; i++) {
    if (data[i] > largestNum) {
      largestNum = data[i];
      largestInd = i;
    } 
  }
  data.splice(largestInd, 1);
  let secondLargestNum = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] > secondLargestNum) {
      secondLargestNum = data[i];
    } 
  }
  return largestNum + secondLargestNum;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));