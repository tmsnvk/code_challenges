// https://edabit.com/challenge/xtDkfWxEh2hbmAHvn

const afterNYears = (names, n) => {
	for (let x in names) {
		names[x] = names[x] + Math.abs(n);
	}
	
	return names;
}
