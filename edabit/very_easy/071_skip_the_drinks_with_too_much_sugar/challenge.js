// https://edabit.com/challenge/dgf76hmQ5Yw4FATFi

// Skip the Drinks with Too Much Sugar
// The function skipTooMuchSugarDrinks() takes in an array of drinks. 
// Make sure the function only returns an array of drinks with no sugar in it or a little bit of sugar.
// Drinks that contain too much sugar (in this challenge) are:

// Cola
// Fanta

function skipTooMuchSugarDrinks(drinks) {
	const x = drinks.filter(elem => elem !== "cola" && elem !== "fanta");

	return x;
}
