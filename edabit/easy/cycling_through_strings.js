// https://edabit.com/challenge/gfm9nQFzogSYTE24t

function stringCycling(a, b) {
	let x = b.length;

	if (a.length > b.length) {
		return a.substring(0, x);
	} else {
		return a.padEnd(x, a);
	}
}