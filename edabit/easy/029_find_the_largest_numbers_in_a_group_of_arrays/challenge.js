// https://edabit.com/challenge/h7LTMAFeNz79rXB2Y

// Find the Largest Numbers in a Group of Arrays
// Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.

const findLargestNums = arr => {
	const x = [];
	
	for (let i = 0; i < arr.length; i ++) {
		x.push(Math.max(...arr[i]))
	}
	
	return x;
}
