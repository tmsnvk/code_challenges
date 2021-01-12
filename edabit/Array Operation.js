// https://edabit.com/challenge/NFfYCBEQepsD5mfEk

function arrayOperation(x, y, n) {
	let a = [];
	
	for (let i = x; i <= y; i++) {
		if (i % n === 0) {
			a.push(i);
		}
	}
	
	return a;
}