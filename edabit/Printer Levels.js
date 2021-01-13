// https://edabit.com/challenge/QXWM2oo7rQNiyDsip

const inkLevels = inks => {
	const x = Object.values(inks);

	return Math.min(...x);
}
