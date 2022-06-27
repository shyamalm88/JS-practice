const climbingStairs = function (n) {
  let stairs = new Array(n + 1);
  stairs[0] = 1; // this is the ground before climbing stairs
  stairs[1] = 1; // for stair 1, only one way (1 step)
  for (let i = 2; i <= n; i++) {
    //two ways: 1 step from stairs[i-1] or 2 steps from stairs[i-1];
    stairs[i] = stairs[i - 1] + stairs[i - 2];
  }
  return stairs[n];
};

const climbingStairsRecursion = function (n) {
  if (n === 0 || n === 1) return 1;
  let left = climbingStairsRecursion(n - 1);
  let right = climbingStairsRecursion(n - 2);
  return left + right;
};

console.log(climbingStairs(3));

console.log(climbingStairsRecursion(100));
