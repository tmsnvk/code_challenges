// https://edabit.com/challenge/BEHiM4RTmhcLX7Cq6

// Repeat the Same Item Multiple Times
// Create a function that takes two arguments (item, times). 
// The first argument (item) is the item that needs repeating 
// while the second argument (times) is the number of times the item is to be repeated. Return the result in an array.
// item can be either a string or a number.
// times will always be a number.

function repeat(item, times) {
	const x = [];
	
	for (let i = 0; i < times; i++) {
		x.push(item);
	}
	return x;
}
