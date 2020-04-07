// https://edabit.com/challenge/6dbpFcrW4schC6zDP

// Check if a Number is a Palindrome
// Write a function that returns true if a number is a palindrome.

const isPalindrome = n => {
	const x = n.toString();
	const y = x.split("").reverse().join("");
	
	return x === y;
}
