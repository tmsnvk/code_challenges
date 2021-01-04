// https://edabit.com/challenge/wF7PQGqevdvv6Fu24

const afterNMonths = (year, months) => {
	if (year === undefined) return "year missing";
	if (months === undefined) return "month missing";
	
	return year + Math.floor(months / 12);
}
