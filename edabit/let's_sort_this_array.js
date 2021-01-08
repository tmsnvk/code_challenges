// https://edabit.com/challenge/vsoQiYJXRANcYrX3Z

function ascDesNone(arr, str) {
	if (str === "Asc") {
		return arr.sort((x, y) => x - y);
	} else if (str === "Des") {
		return arr.sort((x, y) => y - x);
	} else {
		return arr;
	}
}