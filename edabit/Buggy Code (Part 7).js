// https://edabit.com/challenge/CCGBig9eRPFzAHv46

function swap(a, b) {
	const tempA = a;
	const tempB = b;

	b = tempA;
	a = tempB;

	return [a, b];
}