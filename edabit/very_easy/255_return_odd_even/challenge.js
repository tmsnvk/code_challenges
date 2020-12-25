// https://edabit.com/challenge/PqriC6CkLE5JW57aW

// Given an array, return true if there are more odd numbers than even numbers, otherwise return false.

// Examples
// oddeven([1, 2, 3, 4, 5, 6, 7, 8, 9]) ➞ true

// oddeven([1]) ➞ true

// oddeven([13452394823795273847528572346]) ➞ false

function oddeven(arr) {
	let a = 0;
	let b = 0;

	for (let i = 0; i < arr.length; i++) {
		arr[i] % 2 === 0 ? a++ : b++;
	}
	
	return b > a ? true : false;
}