// https://edabit.com/challenge/8bNad58igHWorsf6S

// Binary to Decimal Converter
// You are given one input: An array containing eight 1's and/or 0's. 
// Write a function that takes an 8 bit binary number and convert it to decimal.

const binaryToDecimal = binary => {
	const x = binary.toString().replace(/,/g, "");
	return Number.parseInt(x, 2); 
}
