// https://edabit.com/challenge/WacpbmmhwWJ2Wgmy9

const mean = nums => {
	const r = (acc, cur) => (acc + cur);
	const x = nums.reduce(r) / nums.length;
	
	return parseFloat(x.toFixed(1));
}
