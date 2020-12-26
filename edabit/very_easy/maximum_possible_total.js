// https://edabit.com/challenge/Wg3pBiH8HQggcfaTg

function maxTotal(nums) {
	const x = nums.sort((a, b) => a - b);
	const y = x.slice(-5);
	
	const r = (z, c) => z + c;
	
	return y.reduce(r);
}
