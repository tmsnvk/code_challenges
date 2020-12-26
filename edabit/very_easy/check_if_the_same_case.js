// https://edabit.com/challenge/TDpT9tvwJK5uLn98h

function sameCase(str) {
	if (str.match(/^[a-z]+$/)) {
		return true;
	} else if (str.match(/^[A-Z]+$/)) {
		return true;
	} else { 
	return false;
	}
}
