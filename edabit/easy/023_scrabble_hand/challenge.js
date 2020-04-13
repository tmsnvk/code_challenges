// https://edabit.com/challenge/i6YqzHcSiPiEQKjeX

// Scrabble Hand
// Given an array of scrabble tiles, create a function that outputs the maximum possible score a player can achieve 
// by summing up the total number of points for all the tiles in their hand. Each hand contains 7 scrabble tiles.

const maximumScore = tileHand => {
	let total = 0;
	
	for (let x of tileHand) {
		total += x.score;	
	}
	
	return total;
}
