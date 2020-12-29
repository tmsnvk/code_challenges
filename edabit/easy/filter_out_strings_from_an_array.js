// https://edabit.com/challenge/b2NdDSdkjqFnCTfS8

const filterArray = arr => {
	const x = [];
	
	for (y of arr) {
		if (Number.isInteger(y)) {
			x.push(y);
		}
	}
	
	return x;
}
