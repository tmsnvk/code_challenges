// https://edabit.com/challenge/arzsQcGsstJxHAnGi

function isAvgWhole(arr) {
	let x = 0;
	
	for (y of arr) {
		x += y;
	}
	
	if (Number.isInteger(x / arr.length)) {
		return true;
	}
	
	return false;
}
