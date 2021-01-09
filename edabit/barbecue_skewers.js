// https://edabit.com/challenge/uAGzHNBWbNj2iNqLr

const bbqSkewers = (grill) => {
	let a = 0;
	let b = 0;
	
	for (let i = 0; i < grill.length; i++) {
		if (!grill[i].includes("x")) {
			a++;
		} else {
			b++;
		}
	}
	
	return [a, b];
}