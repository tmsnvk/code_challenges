// https://edabit.com/challenge/jipHTDkabftop5irE

// Help fix all the bugs in the function incrementItems! It is intended to add 1 to every element in the array!

// Examples
// incrementItems([0, 1, 2, 3]) ➞ [1, 2, 3, 4]

// incrementItems([2, 4, 6, 8]) ➞ [3, 5, 7, 9]

// incrementItems([-1, -2, -3, -4]) ➞ [0, -1, -2, -3]

function incrementItems(arr) {
	for (let i = 0; i < arr.length; i++) {
		arr[i] = arr[i] + 1;
	}
	return arr;
}