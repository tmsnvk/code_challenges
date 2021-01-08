// https://edabit.com/challenge/9a8rXCGo4JE36juoF

function lineLength([x1, y1], [x2, y2]) {
	let a = Math.abs(y2 - y1) ** 2;
	let b = Math.abs(x2 - x1) ** 2;
	
	return parseFloat(Math.sqrt(a + b).toFixed(2));
}