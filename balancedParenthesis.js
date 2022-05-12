checkBalancedParenthesis = (str) => {
  let stack = [];
  let bracketArr = str.split("");
  for (let i = 0; i < bracketArr.length; i++) {
    if (
      bracketArr[i] === "(" ||
      bracketArr[i] === "{" ||
      bracketArr[i] === "["
    ) {
      stack.push(bracketArr[i]);
      continue;
    }

    if (stack.length == 0) {
      return false;
    }

    let check;
    switch (bracketArr[i]) {
      case ")":
        check = stack.pop();
        if (check === "{" || check === "[") {
          return false;
        }
        break;

      case "}":
        check = stack.pop();
        if (check === "(" || check === "[") {
          return false;
        }
        break;

      case "]":
        check = stack.pop();
        if (check === "(" || check === "{") {
          return false;
        }
        break;
    }
  }
  return stack.length === 0 ? true : false;
};

console.log(checkBalancedParenthesis("[()]{}{[()()]()"));
