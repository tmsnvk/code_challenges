// https://edabit.com/challenge/xr4Xf28xeSrc7XmCF

// Generate a Countdown of Numbers in an Array
// Create a function that takes a number as an argument and returns an array of numbers counting down from this number to zero.

function countdown(start) {
	const x = [];
	
	for (let i = start; i >= 0; i--) {
		x.push(i);
	}
	return x;
}
