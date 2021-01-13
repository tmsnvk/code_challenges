// https://edabit.com/challenge/LSPPZKTuQJhqW2Rwb

const isScalable = (arr) => {
	let a = [];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i + 1] - arr[i] > 5) {
			a.push(false);
		}
	}

	return !a.includes(false);
}