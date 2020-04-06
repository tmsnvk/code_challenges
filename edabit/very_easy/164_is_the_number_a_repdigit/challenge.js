// https://edabit.com/challenge/8vSpPNjNx6JBcvxdc

// Is the Number a Repdigit
// A repdigit is a positive number composed out of the same digit.
// Create a function that takes an integer and returns whether it's a repdigit or not.
// The number 0 should return true (even though it's not a positive number).

const isRepdigit = num => {
	if (num > 0) {
		const x = num.toString().split("");
		return x.every(y => y === x[0])
	} else if( num === 0) {
		return true;
	} else {
		return false;
	}
}
