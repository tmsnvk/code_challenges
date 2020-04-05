// https://edabit.com/challenge/BK7ydsgqXKggohdc6

// Give Me the Even Numbers
// Create a function that takes two parameters (start, stop), and returns the sum of all even numbers in the range.
// Remember that the start and stop values are inclusive.

function sumEvenNumsInRange(start, stop) {
	const x = [];
	
	for (i = start; i <= stop; i++) {
		if (i % 2 === 0) {
			x.push(i);
		}
	}
	
	const y = (acc, cur) => acc + cur;
	return x.reduce(y);
}
