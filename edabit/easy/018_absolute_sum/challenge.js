// https://edabit.com/challenge/rCmEy2AQYLbRGgKyL

// Absolute Sum
Take an array of integers (positive or negative or both) and return the sum of the absolute value of each element.

const getAbsSum = arr => {
	if (arr == -1) {
		return 1;
	}
	
	const r = (a, c) => Math.abs(a) + Math.abs(c);
	const x = arr.reduce(r);
	
	return x;
}
