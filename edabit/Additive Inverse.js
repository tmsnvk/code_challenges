// https://edabit.com/challenge/Qbi3GuXjwW5fsoKRn

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
