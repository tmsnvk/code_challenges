// https://edabit.com/challenge/dzdoYrTL5vws4dFud

function nextElement(arr) {
	const x = arr[1] - arr[0];
	const y = arr[arr.length - 1] + x;
	
	return y;
}
