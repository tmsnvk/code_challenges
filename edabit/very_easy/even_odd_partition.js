// https://edabit.com/challenge/BsCHQ6fyzmrTYLNsR

const evenOddPartition = arr => {
	const x = [[], []];
	
	for (y of arr) {
		if (y % 2 === 0) {
			x[0].push(y);
		}
		if (y % 2 !== 0) {
			x[1].push(y);
		}
	}
	
	return x;
}
