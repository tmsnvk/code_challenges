// https://edabit.com/challenge/RGtTrNLpckt6bdmSx

function edaBit(start, end) {
	let a = [];

	for (let i = start; i <= end; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			a.push("EdaBit");
		} else if (i % 3 === 0) {
			a.push("Eda");
		} else if (i % 5 === 0) {
			a.push("Bit");
		} else {
			a.push(i);
		}
	}

	return a;
}