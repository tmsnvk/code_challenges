// https://edabit.com/challenge/RPBqWjEa7iyo9p54F

function numberSyllables(word) {
	const x = /-/g;
	return word.match(x).length + 1;
}
