// https://edabit.com/challenge/6QNPoEjY8DLGKPiqr

function letterCounter(arr, letter) {
	let a = 0;
	
	arr.flat().map((b) => b === letter ? a++ : null);
	
	return a;
}