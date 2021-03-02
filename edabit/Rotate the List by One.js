// https://edabit.com/challenge/ciuEF8N3NNegxbasd

function rotateByOne(arr) {
	const a = arr.pop();

	return [a, ...arr];
}