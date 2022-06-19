const coinChange = function (coins, amount, dp) {
  dp[0] = 0;
  if (amount === 0) return 0;
  let ans = Number.MAX_VALUE;
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
  return (dp[amount] = ans);
};

let amount = 18;
let dp = Array(amount + 1).fill(-1);
console.log(coinChange([7, 5, 1], 18, dp));
