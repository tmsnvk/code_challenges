// https://edabit.com/challenge/AYpxyzbnbS7BGSgvd

// First and Last Index
// Given a word, write a function that returns the first index and the last index of a character.
// If the character does not exist in the word, return undefined.
// If only one instance of the character exists, the first and last index will be the same.

const charIndex = (word, char) => {
	if (word.indexOf(char) === -1) { return undefined; }
	
	let x = [];
	
	x.push(word.indexOf(char));
	x.push(word.lastIndexOf(char));
	
	return x;
}
