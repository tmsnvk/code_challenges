// https://www.hackerrank.com/challenges/gem-stones/problem

function gemstones(arr) {
  let a = 0;

  for (let i = 97; i <= 122; i = i + 1) {
    if (arr.every((b) => b.includes(String.fromCharCode(i)))) a++;
  }

  return a;
}