// https://www.hackerrank.com/challenges/tutorial-intro/problem

function introTutorial(V, arr) {
  let x = 0;
  
  arr.filter((a, i) => a === V ? x += i: null);
  
  return x;
}