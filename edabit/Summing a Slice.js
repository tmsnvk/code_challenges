// https://edabit.com/challenge/B3FR3P7g8NyTg7t8b

const sliceSum = (arr, n) => {
	const a = arr.slice(0, n);
	let b = 0;
	
	for (let i = 0; i < a.length; i++) {
		b += a[i];	
	}
	
	return b;
}