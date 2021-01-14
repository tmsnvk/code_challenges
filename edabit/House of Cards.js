// https://edabit.com/challenge/6mYAoRAvLHJ5ypots

function cardsNeeded(n) {
	if (n < 0) return "invalid";
	
	return (n * (3 * n + 1)) / 2;
}