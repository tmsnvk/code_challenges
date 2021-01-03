// https://edabit.com/challenge/JDkyQJqNfJNhvjmRW

function seriesResistance(arr) {
	const reducer = (accumulator, currentValue) => accumulator + currentValue;

	const a = arr.reduce(reducer);
	
	return a <= 1 ? `${a} ohm` : `${a} ohms`;
}