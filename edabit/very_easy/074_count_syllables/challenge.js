// https://edabit.com/challenge/RPBqWjEa7iyo9p54F

// Count Syllables
// Create a function that counts the number of syllables a word has. Each syllable is separated with a dash `-`.

function numberSyllables(word) {
	const x = /-/g;
	return word.match(x).length + 1;
}
