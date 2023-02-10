let isPrime = (n) => {
  for (let i = 2; i <= n / 2; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const getPrimes = (m, n) => {
  const arr = [];
  let i = 2;
  while (arr.length < n) {
    if (i >= m && isPrime(i)) {
      arr.push(i);
    }
    i++;
  }
  return arr;
};

console.log(getPrimes(36, 5));
