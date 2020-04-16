// https://edabit.com/challenge/QXWM2oo7rQNiyDsip

// Printer Levels
// Given an object of how many more pages each ink color can print, 
// output the maximum number of pages the printer can print before any of the colors run out.
// A single printed page uses each color once, so that no prints are possible if there's no more ink in any of the slots.

const inkLevels = inks => {
	const x = Object.values(inks);

	return Math.min(...x);
}
