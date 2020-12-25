// https://edabit.com/challenge/XKX5NHT92okxXCKW7

// Create a function that takes an array of strings and numbers, and filters out the array so that it returns an array of integers only.

// Examples
// filterArray([1, 2, 3, "a", "b", 4]) ➞ [1, 2, 3, 4]

// filterArray(["A", 0, "Edabit", 1729, "Python", "1729"]) ➞ [0, 1729]

// filterArray(["Nothing", "here"]) ➞ []

function filterArray(arr) {
	let result = [];
	
	for (let i = 0; i < arr.length; i++) {
		if (Number.isInteger(arr[i])) {
			result.push(arr[i]);
		}
	}
	
	return result;
}