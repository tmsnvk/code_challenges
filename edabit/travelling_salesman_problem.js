// https://edabit.com/challenge/r453y7c3vBQz4Rrbn

function paths(n) {
	if (n === 0) {
		return 1;
	}
	
	return n * paths(n - 1);
}