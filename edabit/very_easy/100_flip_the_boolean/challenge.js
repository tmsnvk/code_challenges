// https://edabit.com/challenge/noqGmqk6StwApSGwa

// Flip the Boolean
// Create a function that reverses a boolean value and returns the string "boolean expected" if another variable type is given.

const reverse = bool => {
	if (bool === true || bool === false) {
		return !bool;
	} else {
	return "boolean expected";
	}
}
