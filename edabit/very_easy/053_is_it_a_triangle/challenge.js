// https://edabit.com/challenge/k5uod5qGNgHwPaWzA

// Is It a Triangle?
// Create a function that takes three numbers as arguments and returns true if it's a triangle and false if not.

function isTriangle(a, b, c) {
	return ((a + b > c) && (a + c > b) && (b + c > a));
}
