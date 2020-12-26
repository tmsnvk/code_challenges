// https://edabit.com/challenge/kKZ8icWBuMFaSXbfr

function dartsScoring(x, y) {
	if (Math.hypot(x, y) > 10) {
		return 0;
	} else if (5 < Math.hypot(x, y) && Math.hypot(x, y) <= 10) {
		return 1;
	} else if (1 < Math.hypot(x, y) && Math.hypot(x, y) <= 5) {
		return 5;
	} else {
		return 10;
	}
}