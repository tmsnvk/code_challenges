// https://edabit.com/challenge/Tu2PuZf8yXQAE6kFD

function abcmath(a, b, c) {
	for (let i = 0; i <= b; i++) {
		a += a
	}
	
	if (a % c === 0) {
		return true;
	} else {
		return false;
	}
}
