// https://edabit.com/challenge/ceHuvcrXpKF6Ev4Nc

function countUnique(s1, s2) {
	const x = s1.concat(s2);
	let y = [...new Set(x)];

	return y.length;
}
