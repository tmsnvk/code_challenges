// https://edabit.com/challenge/GW5kYFCvGWDZ6TRxd

const factorial = int => {
	if (int === 0 || int === 1) {
		return 1;
	}	else {
		return (int * factorial(int - 1));
	}
}
