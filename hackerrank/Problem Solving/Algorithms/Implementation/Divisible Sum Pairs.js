// https://www.hackerrank.com/challenges/divisible-sum-pairs/problem

function divisibleSumPairs(n, k, ar) {
  let a = 0;

  for (let i = 0; i < n; i += 1) {
    for (let j = i + 1; j < n; j += 1) {
      if ((i < j) && ((ar[i] + ar[j]) % k === 0)) a += 1;
    }
  }

  return a;
}