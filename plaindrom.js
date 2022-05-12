let str = "radar";

isPalindrome = (str) => {
  let reverse = str.split("").reverse().join("");
  if (reverse === str) {
    return true;
  } else {
    return false;
  }
};

isPalindromeLoop = (str) => {
  str = str.split("");
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome(str));
console.log(isPalindromeLoop(str));
