// https://edabit.com/challenge/wu7DA5ud68NjPbXjb

function addOddToN(n) {
	const x = [];
	
	for (let i = n; i > 0; i--) {
		if (i % 2 !== 0) {
			x.push(i);
		}
	}

	return x.reduce((a, b) => a + b);
}
