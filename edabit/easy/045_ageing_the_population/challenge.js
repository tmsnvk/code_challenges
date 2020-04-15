// https://edabit.com/challenge/xtDkfWxEh2hbmAHvn

// Ageing the Population...
// Given an object of people and their ages, return how old the people would be after n years have passed. 
// Use the absolute value of n.

const afterNYears = (names, n) => {
	for (let x in names) {
		names[x] = names[x] + Math.abs(n);
	}
	
	return names;
}
