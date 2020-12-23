// https://edabit.com/challenge/7qWn4T684guHKqQvm

// Create a function that takes an angle in radians and converts it into degrees.

// Examples
// toDegree(Math.PI) ➞ 180

// toDegree(Math.PI/2) ➞ 90

// toDegree(Math.PI/4) ➞ 45

function toDegree(radian) {
	return Math.round((180 / Math.PI) * radian);
}