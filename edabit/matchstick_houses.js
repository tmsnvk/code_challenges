// https://edabit.com/challenge/tYHkTdFrEmWfxpPKF

const matchHouses = step => {
	if (step === 1) {
		return step * 6;
	} else if (step === 0) {
		return 0;
	} else {
		return step * 6 - step + 1; 
	}
}
