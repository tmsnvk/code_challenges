// https://edabit.com/challenge/hD3euqPHM82Cbr7R8

// Largest Swap
// Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.

const largestSwap = num => {
	const x = num.toString().split("").reverse().join("");

	if (num >= x) {
		return true;
	} else {
		return false;
	}
}
