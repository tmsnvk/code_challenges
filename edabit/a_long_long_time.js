// https://edabit.com/challenge/9fpBX9AFizhDeFk8R

const longestTime = (h, m, s) => {
	if (Math.max(h * 3600, m * 60, s) === h * 3600) {
		return h;
	} else if (Math.max(h * 3600, m * 60, s) === m * 60) {
		return m;
	} else {
		return s;
	}
}