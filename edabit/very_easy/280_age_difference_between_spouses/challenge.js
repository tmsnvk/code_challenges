// https://edabit.com/challenge/3pJCxeSiKFC9gKtYt

// Create a function that determines the age difference between spouses in a household. The ages ages in years of the parents and their children are given in an array.

// If there is no difference in age between the parents, return "No age difference between spouses.". Otherwise, return the difference in years. Check the examples for more clarification.

// Examples
// ageDifference([29, 1, 6, 8, 28]) ➞ "1 year"

// ageDifference([43, 86, 49, 86]) ➞ "No age difference between spouses."

// ageDifference([2, 4, 6, 32, 27]) ➞ "5 years"

function ageDifference(ages) {
	const agesSorted = ages.sort((x, y) => x < y ? 1 : -1);
	const result = agesSorted[0] - agesSorted[1];

	return result === 0 ? 'No age difference between spouses.' : result === 1 ? '1 year' : result + ' years';
}