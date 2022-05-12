const lastLetters = (word) => {
  let lastTwo = word.slice(-2).split("").reverse().join(" ");
  return lastTwo;
};

console.log(lastLetters("bat"));
