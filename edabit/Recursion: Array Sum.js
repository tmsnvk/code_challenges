// https://edabit.com/challenge/reR3jdfJnREauJj8d

const sum = arr => {
	if (arr.length === 0) return 0;
	
	const r = (a, c) => a + c;
	
	return arr.reduce(r);
}
