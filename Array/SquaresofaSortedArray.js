// input [-4,-1,0,3,10]
//output [0,1,9,16,100]

squareOfSortedArr = (nums) => {
  let res = [];
  let i = 0;
  let j = nums.length - 1;
  let p = j;

  while (i <= j) {
    if (nums[i] ** 2 > nums[j] ** 2) {
      res[p] = nums[i] ** 2;
      i++;
      p--;
      //   console.log("if", res);
    } else {
      res[p] = nums[j] ** 2;
      j--;
      p--;
      //   console.log("else", res);
    }
    // console.log(res);
  }
  return res;
};

console.log(squareOfSortedArr([4, 3, 2, 1, 0, -1]));
