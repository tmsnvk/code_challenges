// https://edabit.com/challenge/wNh9NaWY6EvA7sPDQ

function isNarcissistic(n) {
	const a = String(n).split("");
	let b = 0;

	a.map((x) => b += Math.pow(x, a.length));
	
	return n === b;
}