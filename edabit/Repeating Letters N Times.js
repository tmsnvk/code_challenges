// https://edabit.com/challenge/pggD9dH8Nwuac7fPE

const repeat = (str, n) => {
	const x = [];
	
	for (y of str) {
		x.push(y.repeat(n).toString());
	}
	
	return x.join("");
}
