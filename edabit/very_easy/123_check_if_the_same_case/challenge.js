// https://edabit.com/challenge/TDpT9tvwJK5uLn98h

// Check if the Same Case
// Create a function that returns true if an input string contains only uppercase or only lowercase letters.

function sameCase(str) {
	if (str.match(/^[a-z]+$/)) {
		return true;
	} else if (str.match(/^[A-Z]+$/)) {
		return true;
	} else { 
	return false;
	}
}
