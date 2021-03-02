// https://www.hackerrank.com/challenges/alternating-characters/problem

function alternatingCharacters(s) {
  const a = s.split("");
  let b = 0;
  
  for (let i = 0; i < a.length; i++) {
      if (a[i] === "A" && a[i + 1] === "A" || a[i] === "B" && a[i + 1] === "B") {
          a[i].replace("");
          b++
      }
  }

  return b;
}