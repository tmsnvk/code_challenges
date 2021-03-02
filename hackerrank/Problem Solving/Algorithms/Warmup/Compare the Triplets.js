// https://www.hackerrank.com/challenges/compare-the-triplets/problem

function compareTriplets(a, b) {
  let x = 0;
  let y = 0;
  
  for (let i = 0; i <= 2; i++) {
    if (a[i] > b[i]) {
      x++;
    } else if (a[i] < b[i]) {
      y++;
    } else {
      x += 0;
      y += 0;
    }
  }

  return [x, y];
}