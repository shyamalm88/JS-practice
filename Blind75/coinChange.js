const coinChange = function (coins, amount) {
  let dp = Array(amount + 1).fill(-1);
  dp[0] = 0;
  if (amount < 0) return -1;
  if (amount === 0) return 0;

  for (let i = 0; i < coins.length; i++) {
    for (let j = 1; j <= amount; j++) {
      if (j >= coins[i]) {
        dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1);
      }
    }
  }
  return dp[amount] > amount ? -1 : dp[amount];
};

console.log(coinChange([1, 2, 5], 11));
