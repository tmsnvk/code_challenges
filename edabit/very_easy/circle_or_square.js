// https://edabit.com/challenge/D8DDFMFK8RaWWmcGY

function circle_or_square(rad, area) {
	return 2 * 3.14 * rad > Math.sqrt(area) + Math.sqrt(area) + Math.sqrt(area) + Math.sqrt(area);
}