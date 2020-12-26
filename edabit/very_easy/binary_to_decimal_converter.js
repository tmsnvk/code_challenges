// https://edabit.com/challenge/8bNad58igHWorsf6S

const binaryToDecimal = binary => {
	const x = binary.toString().replace(/,/g, "");
	return Number.parseInt(x, 2); 
}
