// https://edabit.com/challenge/Ju7AK9rAGjz86hjxo

const factorial = z => {
	if (z === 0 || z === 1) {
		return 1;
	}	else {
		return (z * factorial(z - 1));
	}
}
