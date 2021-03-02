// https://edabit.com/challenge/5L368ypvh5ZZ2HJSL

function invertArray(arr) {
	if (arr.length === 0) return arr;
	
	return arr.map((x) => x > 0 ? -Math.abs(x) : Math.abs(x));
}