// https://edabit.com/challenge/NMdKxEradTmpNnomZ

function drop(arr, val = 1) {
	for (let i = 0; i < val; i++) {
		arr.shift();
	}
	
	return arr;
}