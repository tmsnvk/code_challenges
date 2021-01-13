// https://edabit.com/challenge/Aofd78q72sAtgCyEY

function warOfNumbers(arr) {
	let a = 0;
	let b = 0;
	
	arr.map((x) => x % 2 === 0 ? a += x : b += x);
					
	return a > b ? a - b : b - a;
}