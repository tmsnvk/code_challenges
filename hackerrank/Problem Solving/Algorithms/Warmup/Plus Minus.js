// https://www.hackerrank.com/challenges/plus-minus/problem

function plusMinus(arr) {
  let a = 0;
  let b = 0;
  let c = 0;
  
  arr.map((element) => {
      if (element > 0) {
          a ++;
      } else if (element < 0) {
          b++;
      } else {
          c++;
      }
  });
  
  console.log((a / arr.length).toFixed(6));
  console.log((b / arr.length).toFixed(6));
  console.log((c / arr.length).toFixed(6));
}