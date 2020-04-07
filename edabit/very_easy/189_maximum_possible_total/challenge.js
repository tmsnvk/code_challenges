// https://edabit.com/challenge/Wg3pBiH8HQggcfaTg

// Maximum Possible Total
// Given an array of 10 numbers, return the maximum possible total made by summing just 5 of the 10 numbers.

function maxTotal(nums) {
	const x = nums.sort((a, b) => a - b);
	const y = x.slice(-5);
	
	const r = (z, c) => z + c;
	
	return y.reduce(r);
}
