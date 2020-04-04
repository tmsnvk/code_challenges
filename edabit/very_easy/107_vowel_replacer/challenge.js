// https://edabit.com/challenge/5FhabpvT3FF75kgCi

// Vowel Replacer
// Create a function that replaces all the vowels in a string with a specified character.

const replaceVowels = (str, ch) => {
	const x = /[aeiou]/gi;
	
	return str.replace(x, ch);
}
