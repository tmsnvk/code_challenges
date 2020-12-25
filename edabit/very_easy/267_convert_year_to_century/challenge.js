// https://edabit.com/challenge/H3fKTSK4dgwXRbfTP

// Write a function that takes a year and returns its corresponding century.

// Examples
// centuryFromYear(2005) ➞ 21

// centuryFromYear(1950) ➞ 20

// centuryFromYear(1900) ➞ 19

function centuryFromYear(year) {
	return Math.ceil(year / 100);
}