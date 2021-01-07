// https://edabit.com/challenge/qfAvihoTKivTuzapt

const isTriplet = (n1, n2, n3) => {
	let a = [];
	a.push(n1, n2, n3);
	a.sort((x, y) => x - y);

	return a[0] * a[0] + a[1] * a[1] === a[2] * a[2];
}