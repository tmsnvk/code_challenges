// https://edabit.com/challenge/NL3ygNoPHcktc4mM6

// String or Integer?
// Create a function that checks if the argument is an integer or a string. Return int if it's an integer and str if it's a string.

function intOrString(param) {
	if (typeof param === "string") {
		return "str";
	}
	if (typeof param === "number") {
		return "int";
	}
}
