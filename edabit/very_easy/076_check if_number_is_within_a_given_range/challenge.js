// https://edabit.com/challenge/Wp8uSyh2tfpdzR4CP

// Check if Number is within a Given Range
// Given a number and an object with min and max properties, return true if the number lies within the given range (inclusive).

function isInRange(num, range) {
	return num <= range.max && num >= range.min;
}
