// https://edabit.com/challenge/zJserqaeu9cM9Qjib

function endCorona(recovers, newCases, activeCases) {
	let days = 0;
	let active = activeCases;
	
		do {
			active = active + newCases - recovers;
			days += 1;
		}
		while (active > 0);
	
	return days;
}