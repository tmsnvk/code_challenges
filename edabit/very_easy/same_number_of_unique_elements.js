// https://edabit.com/challenge/R6DX8wKMufT5hLRuK

const same = (a1, a2) => {
	const x = [...new Set(a1)];
	const y = [...new Set(a2)];
	
	return x.length === y.length ? true : false;
}
