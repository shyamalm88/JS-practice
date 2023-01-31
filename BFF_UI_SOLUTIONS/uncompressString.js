const isNumeric = (str) => !isNaN(parseFloat(str)) && isFinite(Number(str));

function uncompress(str) {
  const stack = [];

  for (const char of str) {
    if (char !== ")") {
      stack.push(char);
    } else {
      let word = "";
      let count = "";

      while (stack.length && stack[stack.length - 1] !== "(")
        word = stack.pop() + word;
      stack.pop();

      while (stack.length && isNumeric(stack[stack.length - 1]))
        count = stack.pop() + count;
      stack.push(word.repeat(Number(count)));
    }
  }

  return stack.join("");
}

console.log(uncompress("3(ab2(c))"));
