// https://edabit.com/challenge/2Jh8PyLgPeYA2iRNu

// Create a function that takes a number as an argument and returns the square root of that number cubed.

// Examples
// cubeSquareRoot(81) ➞ 729

// cubeSquareRoot(1646089) ➞ 2111932187

// cubeSquareRoot(695556) ➞ 580093704

function cubeSquareRoot(num) {
	let sqrt = Math.sqrt(num);
  let cube = Math.pow(sqrt, 3);
	
  return cube;
}