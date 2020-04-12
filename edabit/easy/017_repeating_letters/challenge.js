// https://edabit.com/challenge/Mc6Xi4PRw7fDzeMDB

// Repeating Letters
// Create a function that takes a string and returns a string in which each character is repeated once.

const doubleChar = str => {
	const x = [];
	const y = str.split("");
	
	for (z of y) {
		x.push(z.repeat(2));
	}
	
	const t = x.join("");
	return t;
}
