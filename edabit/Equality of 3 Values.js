// https://edabit.com/challenge/PKiTjA7SLK99ZZ8GK

function equal(a, b, c) {
	if (a === b && b === c && a === c) {
		return 3;
	} else if (a === b || b === c || a === c) {
		return 2;
	} else {
		return 0;
	}
}