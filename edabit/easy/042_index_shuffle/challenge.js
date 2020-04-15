// https://edabit.com/challenge/ATbswTsEaMJb37Ez2

// Index Shuffle
// Write a function that takes all even-indexed characters and odd-indexed characters from a string and concatenates them together.

const indexShuffle = str => {
	let x = "";
	let y = "";
	
	for (let i = 0; i < str.length; i++) {
		if (i % 2 === 0) {
		x += str[i];
		} else {
		y += str[i];
		}
	}
	
	return x + y;
}
