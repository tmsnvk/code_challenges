// https://edabit.com/challenge/e9oMvkS7Fb72kSehT

function fracRound(frac, n) {
	const a = frac.split("/");

	return `${frac} rounded to ${n} decimal places is ${Number(a[0] / a[1]).toFixed(n)}`;
}