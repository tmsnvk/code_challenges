// https://edabit.com/challenge/exMRkWdmmc6hccYiS

// Create a function that returns the minimum number of removals to make the sum of all elements in an array even.
// The output will be either 0 or 1.
 If the sum is already even, return 0.
 
function minimumRemovals(arr) {
	const r = (a, c) => a + c;
	const x = arr.reduce(r);
	
	return x % 2 == 0 ? 0 : 1;
}
