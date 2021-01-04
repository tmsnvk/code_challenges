// https://edabit.com/challenge/uSfPtCRcjhE9daPok

function matchesProperty_myVersion(key, value) {
	return function(x) {
		return x[key] === value;
	}
}