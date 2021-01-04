// https://edabit.com/challenge/exMRkWdmmc6hccYiS

function minimumRemovals(arr) {
	const r = (a, c) => a + c;
	const x = arr.reduce(r);
	
	return x % 2 == 0 ? 0 : 1;
}
