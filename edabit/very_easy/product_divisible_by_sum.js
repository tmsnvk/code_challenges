// https://edabit.com/challenge/aJzvBZgp8nzwSk94A

const divisible = arr => {
	const r1 = (a1, c1) => a1 * c1;
	const r2 = (a2, c2) => a2 + c2;

	return arr.reduce(r1) % arr.reduce(r2) === 0;

}
