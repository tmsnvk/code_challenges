// https://edabit.com/challenge/wvPTPAqARjE9fswCE

const getNumberOfApples = (n, p) => {
	const a = Math.floor(n - (n * (parseFloat(p) / 100)));
	return a > 0 ? a : "The children didn't get any apples";
}