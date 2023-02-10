const containsDuplicate = (nums) => {
  const map = {};
  for (num of nums) {
    if (map[num]) {
      return true;
    }
    map[num] = 1;
  }
  return false;
};
