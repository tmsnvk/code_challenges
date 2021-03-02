// https://edabit.com/challenge/5RiZh6yJKeGEo4P3z

function sumMinimums(arr) {
	let x = [];
	
	arr.map((y) => x.push(Math.min(...y)));
	
	return x.reduce((a, b) => a + b);
}