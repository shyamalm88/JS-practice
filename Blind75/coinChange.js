const coinChange = function (coins, amount, dp) {
  let ans = Number.MAX_VALUE;
  if (amount === 0) return 0;
  for (let i = 0; i < coins.length; i++) {
    if (amount - coins[i] >= 0) {
      let subAns = 0;
      if (dp[amount - coins[i]] != -1) {
        subAns = dp[amount - coins[i]];
      } else {
        subAns = coinChange(coins, amount - coins[i], dp);
      }

      if (subAns != Number.MAX_VALUE && subAns + 1 < ans) {
        ans = subAns + 1;
      }
    }
  }
  return (ans = dp[amount]);
};

const amount = 7;
const dp = Array(amount + 1).fill(-1);
console.log(coinChange([1, 2, 3, 4, 5], 7, dp));
