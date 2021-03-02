// https://edabit.com/challenge/zHutBxQaWvzhzGgxL

function sumFive(arr) {
	let x = [];
	
	arr.map((y) => y > 5 ? x.push(y) : null);
	
	return x.length !== 0 ? x.reduce((a, b) => a + b) : 0;
}