// https://edabit.com/challenge/XKX5NHT92okxXCKW7

function filterArray(arr) {
	let result = [];

	for (let i = 0; i < arr.length; i++) {
		if (Number.isInteger(arr[i])) {
			result.push(arr[i]);
		}
	}

	return result;
}