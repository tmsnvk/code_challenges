// https://www.hackerrank.com/challenges/mars-exploration/problem

function marsExploration(s) {
  let x = 0;
  const a = s.match(/.{1,3}/g);

  const b = a.filter((c) => {
    c.charAt(0) === "S" ? null : x++;
    c.charAt(1) === "O" ? null : x++;
    c.charAt(2) === "S" ? null : x++;
  });

  return x;
}