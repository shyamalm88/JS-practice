//*Implement atoi which converts a string to an integer.
//*The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.
//*The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.
//*If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.
//*If no valid conversion could be performed, a zero value is returned.

const stringToInt = (str) => {
  let sign = 1;
  let MAX = 2147483647;
  let MIN = MAX - 1;
  let i = 0;
  let res = 0;

  while (str[i] == " ") i++;
  if (str[i] == "+" || str[i] == -1) {
    sign = str[i] === "+" ? 1 : -1;
    i++;
  }

  while (str[i] >= "0" && str[i] <= "9") {
    res = res * 10 + (str[i] - 0);
    if (sign === 1 && res > MAX) return MAX;
    if (sign === -1 && res > MAX + 1) return MIN;
    i++;
  }
  return res * sign;
};

console.log(stringToInt("89ABC"));
