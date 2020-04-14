// https://edabit.com/challenge/fiLc5x3x2bHzHvgK4

// Snail Race

function mauriceWins(mSnails, sSnails) {
	let m = 0;
	let s = 0;
	
	mSnails[0] > sSnails[2] ? m += 1 : s += 1;
	mSnails[1] > sSnails[0] ? m += 1 : s += 1;
	mSnails[2] > sSnails[1] ? m += 1 : s += 1;
	
	return m > s;
}
