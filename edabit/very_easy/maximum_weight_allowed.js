// https://edabit.com/challenge/J3aRjEJoJoJ5yGBgR

function weightAllowed(car, p, maxWeight) {
	return car + p.reduce((a, b) => a + b, 0) < maxWeight / 0.453592;
}