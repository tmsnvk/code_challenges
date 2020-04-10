// https://edabit.com/challenge/rtpvAqFT3koqMoFCJ

// Hiding the Card Number
// Write a function that takes a credit card number and only displays the last four characters. 
// The rest of the card number must be replaced by ************.

const cardHide = card => `${"*".repeat(card.length - 4)}${card[card.length - 4]}${card[card.length - 3]}${card[card.length - 2]}${card[card.length - 1]}`;
