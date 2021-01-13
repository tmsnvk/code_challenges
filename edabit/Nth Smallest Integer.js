// https://edabit.com/challenge/T9nCQgLQJ9Pi9a9kH

function nthSmallest(arr, n) {
	if (n <= arr.length) {
		const x = arr.sort();
		
		return x[n - 1];
	} else {
		return null;
	}
}
