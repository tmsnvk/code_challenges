// https://edabit.com/challenge/Qbi3GuXjwW5fsoKRn

// Additive Inverse
// A number added with its additive inverse equals zero. Create a function that returns an array of additive inverses.

function additiveInverse(arr) {
	const x = [];
	
	for (y of arr) {
		if (y < 0) {
			const a = y - (y * 2);
			x.push(a);
		} else if (y > 0) {
			const c = (y + (y * 2)) / -3;
			x.push(c);
		}
	}
	
	return x;
}
