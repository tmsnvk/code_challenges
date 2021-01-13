// https://edabit.com/challenge/R3649PDvoFf6wGxyg

function getMiddle(str) {
	if (str.length === 1) {
		return str;
	} else if (str.length % 2 === 0) {
		return str.slice(((str.length / 2) - 1), str.length / 2 + 1);
	} else {
		return str.slice(str.length / 2, str.length / 2 + 1);
	}
}