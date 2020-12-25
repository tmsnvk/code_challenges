// https://edabit.com/challenge/8rhnqxJFiJm5tS4G7

// Create a function that takes an angle in radians and returns the corresponding angle in degrees.

// Examples
// radiansToDegrees(1) ➞ 57.29577951308232

// radiansToDegrees(20) ➞ 1145.9155902616465

// radiansToDegrees(50) ➞ 2864.7889756541163

function radiansToDegrees(rad) {
	return rad * (180 / Math.PI)
}