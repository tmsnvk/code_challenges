// https://edabit.com/challenge/k5k3aXWp7aibft74n

const checkFactors = (factors, num) => {
	const x = [];
	
	for (let y of factors) {
		x.push(y);
	}
	
	if (x.every(a => num % a == 0)) {
		return true;
	}
	return false;
}
