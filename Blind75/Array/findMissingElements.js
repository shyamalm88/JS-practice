const findMissingElement = (arr) => {
  let sum = 0;
  //find expectedNumber of elements;
  let expectedNumberOfElements = arr.length + 1;
  //this is the formula to figure out expected sum; formula is (n*n+1)/2 here n is length+1
  let expectedSum =
    (expectedNumberOfElements * (expectedNumberOfElements + 1)) / 2;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return expectedSum - sum;
};

console.log(findMissingElement([1, 2, 3, 4, 6]));
