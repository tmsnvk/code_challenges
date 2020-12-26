// https://edabit.com/challenge/3pJCxeSiKFC9gKtYt

function ageDifference(ages) {
	const agesSorted = ages.sort((x, y) => x < y ? 1 : -1);
	const result = agesSorted[0] - agesSorted[1];

	return result === 0 ? 'No age difference between spouses.' : result === 1 ? '1 year' : result + ' years';
}