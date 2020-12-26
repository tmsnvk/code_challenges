// https://edabit.com/challenge/dWNPtNeQgyn6mS8FA

const transform = arr => {
	const x = [];
	
	for (y of arr) {
		if (y % 2 === 0) {
			x.push(y - 1);
		} else {
			x.push(y + 1);
		}
	}
	
	return x;
}
