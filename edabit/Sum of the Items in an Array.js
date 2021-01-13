// https://edabit.com/challenge/27Toh4rACcmRvRLrb

function sumArray(arr) {
	const reducer = (accumulator, currentValue) => accumulator + currentValue;

	return arr.flat(2).reduce(reducer);
}