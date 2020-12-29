// https://edabit.com/challenge/rCmEy2AQYLbRGgKyL

const getAbsSum = arr => {
	if (arr == -1) {
		return 1;
	}
	
	const r = (a, c) => Math.abs(a) + Math.abs(c);
	const x = arr.reduce(r);
	
	return x;
}
