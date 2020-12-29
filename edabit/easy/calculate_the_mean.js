// https://edabit.com/challenge/8zBhNfrQv7CWKvcx3

const mean = arr => {
	let x = 0;
	
	for (y of arr) {
		x += y;
	}
	
	return parseFloat((x / arr.length).toFixed(2));
}
