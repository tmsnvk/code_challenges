// https://edabit.com/challenge/k5k3aXWp7aibft74n

// Check Factors
// Write a function that returns true if all integers in an array are factors of a number, and false otherwise.

const checkFactors = (factors, num) => {
	const x = [];
	
	for (let y of factors) {
		x.push(y);
	}
	
	if (x.every(a => num % a == 0)) {
		return true;
	}
	return false;
}
