// https://edabit.com/challenge/pggD9dH8Nwuac7fPE

// Repeating Letters N Times
// Create a function that repeats each character in a string n times.

const repeat = (str, n) => {
	const x = [];
	
	for (y of str) {
		x.push(y.repeat(n).toString());
	}
	
	return x.join("");
}
