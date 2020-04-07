// https://edabit.com/challenge/Tu2PuZf8yXQAE6kFD

// Multi-division
// Create a function, that will for a given a, b, c, do the following:

// Add a to itself b times.
// Check if the result is divisible by c.

function abcmath(a, b, c) {
	for (let i = 0; i <= b; i++) {
		a += a
	}
	
	if (a % c === 0) {
		return true;
	} else {
		return false;
	}
}
