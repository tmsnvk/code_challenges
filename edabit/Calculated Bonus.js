// https://edabit.com/challenge/cYcKEFos6DjYQpGS7

function calculateBonus(days) {
	if (days <= 32) {
		return 0;
	} else if (days <= 40) {
		return (days - 32) * 325;
	} else if (days <= 48) {
		return (days - 40) * 550 + (days - 32 - (days - 40)) * 325;
	} else {
		return (days - 48) * 600 + (days - 40 - (days - 48)) * 550 + (days - 32 - (days - 40)) * 325;
	}
}