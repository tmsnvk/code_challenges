// https://edabit.com/challenge/447bDYjW8ZBTtFG5M

// Both Zero, Negative or Positive
// Write a function that checks if two numbers are:

// Smaller than 0
// Greater than 0
// Exactly 0

function both(n1, n2) {
	if (n1 > 0 && n2 > 0) {
		return true;
	} else if (n1 < 0 && n2 < 0) {
		return true;
	} else if (n1 === 0 && n2 === 0) {
		return true;
	} else {
		return false;
	}
}
