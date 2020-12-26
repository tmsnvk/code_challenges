// https://edabit.com/challenge/dgf76hmQ5Yw4FATFi

function skipTooMuchSugarDrinks(drinks) {
	const x = drinks.filter(elem => elem !== "cola" && elem !== "fanta");

	return x;
}
