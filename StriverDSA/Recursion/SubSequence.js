const SubSeqOfGivenArray = (arr, n) => {
  let i = 0;
  SubSeq(i, [], arr, n);
};

const SubSeq = (index, result, arr, n) => {
  if (index == n) {
    console.log(result);
    return;
  }
  result.push(arr[index]);
  SubSeq(index + 1, result, arr, n);
  result.pop();
  SubSeq(index + 1, result, arr, n);
};

const arr = [3, 1, 2];
SubSeqOfGivenArray(arr, 3);
