// https://edabit.com/challenge/GW5kYFCvGWDZ6TRxd

// Return the Factorial
// Create a function that takes an integer and returns the factorial of that integer. 
// That is, the integer multiplied by all positive lower integers.

const factorial = int => {
	if (int === 0 || int === 1) {
		return 1;
	}	else {
		return (int * factorial(int - 1));
	}
}
