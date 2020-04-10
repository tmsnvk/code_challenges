// https://edabit.com/challenge/tYHkTdFrEmWfxpPKF

// Matchstick Houses
// Create a function that takes a number (step) as an argument and returns the amount of matchsticks in that step. 
// Step 0 returns 0 matchsticks.

const matchHouses = step => {
	if (step === 1) {
		return step * 6;
	} else if (step === 0) {
		return 0;
	} else {
		return step * 6 - step + 1; 
	}
}
