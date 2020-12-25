// https://edabit.com/challenge/fy5rEBBtnhAN7FzzE

// Create a function that determines if the temp of the water is considered boiling or not. temp will be measured in fahrenheit and celsius.

// Examples
// isBoiling("212F") ➞ true

// isBoiling("100C") ➞ true

// isBoiling("0F") ➞ false

function isBoiling(temp) {
	return temp >= "212F" || temp >= "100C" ? true : false;
}