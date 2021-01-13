// https://edabit.com/challenge/MjqneMZ7aZa8AxXZG

const repetition = (txt, n) => {
	if (n === 1) {
		return txt;
	} else {
		return txt + repetition(txt, n - 1);
	}
}