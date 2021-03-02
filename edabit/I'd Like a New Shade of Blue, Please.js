// https://edabit.com/challenge/2rjHtbg32PrtZdF66

function howManyWalls(n, w, h) {
	const x = w * h;
	
	return Math.floor(n / x);
}