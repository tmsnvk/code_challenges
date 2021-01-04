// https://edabit.com/challenge/3zAT89ZAxg4CAQqsZ

const secondLargest = (arr) => {
	const a = arr.filter((item) => item !== Math.max(...arr));
	
	return Math.max(...a);
}