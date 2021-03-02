// https://edabit.com/challenge/wBYQnCytRFNxsL4Gr

function leapYear(year) {
	if (year % 4 === 0 || year % 400 === 0) {
		return true;
	} else {
		return false;
	}
}