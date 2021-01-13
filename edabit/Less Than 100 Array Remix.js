// https://edabit.com/challenge/yks7uNNSRJFWDuj3m

function arrayLessThan100(arr) {
	const reducer = (accumulator, currentValue) => accumulator + currentValue;
	return arr.reduce(reducer) < 100 ? true : false;
}