// https://edabit.com/challenge/TTu48ECaTRwZDj69x

function sumFoundIndexes(arr, n) {
	let a = 0;
	
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === n) {
			a += i;
		}
	}
	
	return a;
}