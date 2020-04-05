// https://edabit.com/challenge/dNZmjoi3Lip2j4emx

// Even Number Generator
// Create a function that finds all even numbers from 1 to the given number.

function findEvenNums(num) {
	const x = [];
	
	for (let i = 1; i <= num; i++) {
		if (i % 2 === 0) {
			x.push(i);
		}
	}
	return x;
}
