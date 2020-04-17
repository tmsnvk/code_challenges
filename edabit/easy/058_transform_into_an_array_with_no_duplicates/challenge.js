// https://edabit.com/challenge/Mo6Coy4PpTbZgtDKd

// Transform into an Array with No Duplicates
// A set is a collection of unique items. A set can be formed from an array from removing all duplicate items.
// Create a function that sorts an array and removes all duplicate items from it.

const set = arr => {
	let x = new Set(arr);
	
	return Array.from(x);
}
