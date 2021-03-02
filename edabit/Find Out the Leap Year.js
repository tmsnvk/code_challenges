// https://edabit.com/challenge/xKKwvL2zYC8pEvMLG

function leapYear(year) {
	if (year % 4 === 0 || year % 400 === 0) {
		return true;
	} else {
		return false;
	}
}