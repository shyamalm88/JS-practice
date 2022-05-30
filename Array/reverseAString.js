const string = "GeeksForGeeks";

const reverse = (string) => {
  if (string.length == 0) return string;
  const s = string.split("");
  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    [s[i], s[j]] = [s[j], s[i]];
    i++;
    j--;
  }
  return s.join("");
};

const reverseRecursion = (string) => {
  let i = string.length;
  if (i === 0) {
    return "";
  }
  return string.charAt(i - 1) + reverseRecursion(string.substring(0, i - 1));
};

console.log(reverse(string));
console.log(reverseRecursion(string));
