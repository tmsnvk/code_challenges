// https://edabit.com/challenge/4LnwAC3kgTctc7r3k

function oddProduct(arr) {
	const x = [];
	
	for (y of arr) {
		if (y % 2 !== 0) {
			x.push(y);
		}
	}
	
	const r = (a, c) => a * c;
	return x.reduce(r);
}