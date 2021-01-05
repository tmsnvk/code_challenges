// https://edabit.com/challenge/MsNyn2xmTzRWjFuMT

const evenOddTransform = (arr, n) => {
	let a = 0;
	
	for (let i = 0; i < n; i++) {
		a += 2;
	}

	return arr.map((b) => b % 2 === 0 ? b - a : b + a);	
}