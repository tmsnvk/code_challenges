// https://edabit.com/challenge/GoXcArzHKTWaA8C2z

function uploadCount(dates, month) {
	return dates.filter((x) => x.includes(month)).length;
}