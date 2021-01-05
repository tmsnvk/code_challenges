// https://edabit.com/challenge/ttiutYw6NyphfxuCG

function allTruthy(...args) {
	const a = (b) => b;

	return [...args].every(a);
}