// https://www.hackerrank.com/challenges/camelcase/problem

function camelcase(s) {
  let a = 0;

  const b = s.split("");
  b.forEach((c) => c === c.toUpperCase() ? a++ : null);
  
  return a + 1;
}