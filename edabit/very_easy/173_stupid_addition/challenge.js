// https://edabit.com/challenge/GABaDpxGZGFBdQPjs

// Stupid Addition
// Create a function that takes two parameters and, if both parameters are strings, add them as if they were integers or 
// if the two parameters are integers, concatenate them.
// If the two parameters are different data types, return null.

const stupidAddition = (a, b) => {
	if (typeof a === "string" && typeof b === "string") {
		return parseInt(a) + parseInt(b);
	} else if (typeof a === "number" && typeof b === "number") {
		return a.toString() + b.toString();
	} else {
		return null;
	}
}
