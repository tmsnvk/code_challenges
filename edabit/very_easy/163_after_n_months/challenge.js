// https://edabit.com/challenge/wF7PQGqevdvv6Fu24

// After N Months...
// Create a function that takes in year and months as input, then return what year it would be after n-months has elapsed.
// If no value is given for year or months, return "year missing" or "month missing".
// At least one value will be present.

const afterNMonths = (year, months) => {
	if (year === undefined) return "year missing";
	if (months === undefined) return "month missing";
	
	return year + Math.floor(months / 12);
}
