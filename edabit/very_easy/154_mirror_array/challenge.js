// https://edabit.com/challenge/GMh85YdL7kAutJ5YN

// Mirror Array
// Given an array, transform that array into a mirror.

function mirror(arr) { 
	const a = arr.reverse().slice(1);
	
	return arr.reverse().concat(a);
}
