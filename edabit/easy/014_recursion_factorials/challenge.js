// https://edabit.com/challenge/rgXMMHEmbh2MCKSrM

// Recursion: Factorials
// Write a function that calculates the factorial of a number recursively.

const factorial = n => {
	if (n === 0 || n === 1) {
		return 1;
	}	else {
		return (n * factorial(n - 1));
	}
}
