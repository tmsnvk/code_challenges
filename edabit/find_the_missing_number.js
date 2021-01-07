// https://edabit.com/challenge/rgdT9sZ4QhsKhaSw9

function missingNum(arr) {
	const a = arr.reduce((x, y) => x + y);
	
	return 55 - a;
}