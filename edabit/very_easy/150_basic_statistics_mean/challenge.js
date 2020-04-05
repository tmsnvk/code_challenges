// https://edabit.com/challenge/WacpbmmhwWJ2Wgmy9

// Basic Statistics: Mean
// The mean of a group of numbers is calculated by summing all numbers, 
// and dividing this sum by the total count of numbers in the group. 
// Given a sorted array of numbers, return the mean (rounded to one decimal place).

const mean = nums => {
	const r = (acc, cur) => (acc + cur);
	const x = nums.reduce(r) / nums.length;
	
	return parseFloat(x.toFixed(1));
}
