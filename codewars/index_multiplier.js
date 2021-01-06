// https://edabit.com/challenge/3Efavz8YmSBia4p8s

function indexMultiplier(arr) {
	let a = 0;
	
	arr.forEach((x, index) => a += (x * index));
	
	return a;
}