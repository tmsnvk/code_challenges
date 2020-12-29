// https://edabit.com/challenge/XdAR3KohR5w7rjrFg

const sumOfCubes = nums => {
	if (nums.length === 0) return 0;
	
	const x = nums.map(x => Math.pow(x, 3));
	const r = (a, c) => a + c;

	return x.reduce(r);
}
