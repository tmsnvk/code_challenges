// https://edabit.com/challenge/R6DX8wKMufT5hLRuK

// Same Number of Unique Elements
// Write a function that returns true if two arrays have the same number of unique elements, and false otherwise.
// To illustrate:

// arr1 = [1, 3, 4, 4, 4]
// arr2 = [2, 5, 7]

// In arr1, the number 4 appears three times, which means it contains three unique elements: [1, 3, 4]. 
// Since arr1 and arr2 both contain the same number of unique elements, this example would return true.

const same = (a1, a2) => {
	const x = [...new Set(a1)];
	const y = [...new Set(a2)];
	
	return x.length === y.length ? true : false;
}
