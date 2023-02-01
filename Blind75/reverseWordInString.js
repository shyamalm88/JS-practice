const reverseWord = (str) => {
  return str.split(" ").map(reverse).join(" ");
};

const reverse = (word) => {
  return word.split("").reverse().join("");
};

console.log(reverseWord("Let's take LeetCode contest"));
