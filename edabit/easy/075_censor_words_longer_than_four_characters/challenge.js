// https://edabit.com/challenge/huiJkoQzegoc5qeCJ

// Censor Words Longer Than Four Characters
// Create a function that takes a string and censors words over four characters with *.
// Don't censor words with exactly four characters.
// If all words have four characters or less, return the original string.
// The amount of * is the same as the length of the word.

const censor = (str) => {
	const arr = str.split(" ");
	const res = arr.map(x => x.length < 5 ?  x : "*".repeat(x.length));
	return res.join(" ");
}
