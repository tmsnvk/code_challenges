// https://edabit.com/challenge/F3Jdoa5YBSboP4ucb

function nTablesPlusOne(n) {
	let a = [];

	for (let i = 1; i <= 10; i++) {
		a.push(i * n + 1);
	}

	return a.toString();
}