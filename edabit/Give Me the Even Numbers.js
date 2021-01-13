// https://edabit.com/challenge/BK7ydsgqXKggohdc6

function sumEvenNumsInRange(start, stop) {
	const x = [];
	
	for (i = start; i <= stop; i++) {
		if (i % 2 === 0) {
			x.push(i);
		}
	}
	
	const y = (acc, cur) => acc + cur;
	return x.reduce(y);
}
