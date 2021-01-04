// https://edabit.com/challenge/S6zpG8RwDrxaFEQLE

function last(a, n) {
	if (n === 0) return [];
	if (n > a.length) return "invalid";
	
	return a.slice(-n);
}
