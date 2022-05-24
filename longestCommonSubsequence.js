const lcs = (str1, str2) => {
  const m = str1.length;
  const n = str2.length;
  const dp = new Array(m + 1).fill().map(() => new Array(n + 1).fill(-1));
  return lcsUtil(str1, str2, m, n, dp);
};

const lcsUtil = (str1, str2, m, n, dp) => {
  if (m == 0 || n == 0) {
    return 0;
  }

  if (dp[m][n] != -1) {
    return dp[m][n];
  }

  if (str1.charAt(m - 1) === str2.charAt(n - 1)) {
    dp[m][n] = 1 + lcsUtil(str1, str2, m - 1, n - 1, dp);
    return dp[m][n];
  } else {
    dp[m][n] = Math.max(
      lcsUtil(str1, str2, m, n - 1, dp),
      lcsUtil(str1, str2, m - 1, n, dp)
    );
    return dp[m][n];
  }
};

console.log(lcs("abc", "bcd"));
