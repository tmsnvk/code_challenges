// https://edabit.com/challenge/wu7DA5ud68NjPbXjb

// Sum of the Odd Numbers
// Create a function which returns the total of all odd numbers up to and including n. n will be given as an odd number.

function addOddToN(n) {
	const x = [];
	
	for (let i = n; i > 0; i--) {
		if (i % 2 !== 0) {
			x.push(i);
		}
	}

	return x.reduce((a, b) => a + b);
}
