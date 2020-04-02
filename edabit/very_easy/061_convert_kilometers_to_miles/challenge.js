// https://edabit.com/challenge/G6iPEYEesayG5eko8

// Convert Kilometers to Miles
// In this challenge, you have to implement a function that returns the given distance kilometers converted into miles. 
// You have to round the result up to the fifth decimal digit.

function kmtomiles(kilometers) {
	const x = Number((kilometers * 0.62137119).toFixed(5));
	return x;
}
