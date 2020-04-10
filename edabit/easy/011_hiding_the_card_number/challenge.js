// https://edabit.com/challenge/rtpvAqFT3koqMoFCJ

// Hiding the Card Number
// Write a function that takes a credit card number and only displays the last four characters. 
The rest of the card number must be replaced by ************.

const cardHide = card => {
	const x = card.length;
	return `${"*".repeat(x - 4)}${card[x - 4]}${card[x - 3]}${card[x - 2]}${card[X - 1]}`;
}
