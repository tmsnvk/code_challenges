// https://edabit.com/challenge/hD3euqPHM82Cbr7R8

const largestSwap = num => {
	const x = num.toString().split("").reverse().join("");

	if (num >= x) {
		return true;
	} else {
		return false;
	}
}
