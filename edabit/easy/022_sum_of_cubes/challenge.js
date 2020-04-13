// https://edabit.com/challenge/XdAR3KohR5w7rjrFg

// Sum of Cubes
// Create a function that takes in an array of numbers and returns the sum of its cubes.
// If given an empty array, return 0.

const sumOfCubes = nums => {
	if (nums.length === 0) return 0;
	
	const x = nums.map(x => Math.pow(x, 3));
	const r = (a, c) => a + c;

	return x.reduce(r);
}
