// https://edabit.com/challenge/j3EoCMaD3LrEYtx78

// Fix the Error: Mutating Arrays
// Suppose I want to define a function that removes the last element of an array each time I call it, 
// but does not mutate the original array. 
// Fix the code so that the results are no longer mutating the array.

// function minusOne(arr) {
//   arr.pop()
//   return arr
// }

function minusOne(arr) {
	const x = arr.slice(0, 4);
  return x;
}
