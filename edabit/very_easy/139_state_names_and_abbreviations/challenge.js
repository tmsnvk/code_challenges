// https://edabit.com/challenge/8fnEAEj5vKNqAXNYA

// State Names and Abbreviations
// Create a function that filters out an array of state names into two categories based on the second parameter.
// Abbreviations abb
// Full names full

const filterStateNames = (arr, type) => {
	if (type === "abb") {
		return arr.filter(x => x.length == 2);
	}
	if (type === "full") {
		return arr.filter(x => x.length > 2);
	}
}
