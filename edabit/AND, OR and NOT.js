// https://edabit.com/challenge/yuCSeYGAngyT77gsm

function NOT(n) {
	return n === 0 ? 1 : 0;
}

function AND(a, b) {
	if (a === 1 && b === 1) return 1;
	if (a === 0 && b === 0 ) return 0;
	return 0;
}

function OR(a, b) {
	return a === 1 || b === 1 ? 1 : 0;
}