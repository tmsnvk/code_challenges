// https://edabit.com/challenge/zwPbeSJHoyiRT72h2

function findNaN(number) {
	let a = [];
	
	number.map((x, index) => isNaN(x) ? a.push(index) : null);
	
	return a.length === 1 ? a[0] : -1;
}