// https://edabit.com/challenge/5FhabpvT3FF75kgCi

// Vowel Replacer
// Create a function that replaces all the vowels in a string with a specified character.

const replaceVowels = (str, ch) => {
	const x = /[aeiou]/;
	
	return str.split("").map(str => str.replace(x, ch)).join("");
}
