// https://edabit.com/challenge/r2MbSxquAGPnDkjQx

// The challenge is to try and fix this buggy code, given the inputs true and false. See the examples below for the expected output.

// Examples
// has_bugs(true) ➞ "sad days"

// has_bugs(false) ➞ "it's a good day"

function has_bugs(buggy_code) {
	if (buggy_code) {
		return "sad days";
	} else {
		return "it's a good day";
	}
}