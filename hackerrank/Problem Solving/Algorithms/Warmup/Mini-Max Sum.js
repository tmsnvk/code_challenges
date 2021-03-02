// https://www.hackerrank.com/challenges/mini-max-sum/problem?h_r=next-challenge&h_v=zen

function miniMaxSum(arr) {
  const a = arr.sort((a, b) => a - b);
  const x = a.reduce((i, j) => i + j);

  console.log(x - arr[arr.length - 1], x - arr[0]);
}