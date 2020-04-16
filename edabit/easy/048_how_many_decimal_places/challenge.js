// https://edabit.com/challenge/arKLRM8qGzKZbCxCk

// How Many Decimal Places?
// Create a function that returns the number of decimal places a number (given as a string) has. 
// Any zeros after the decimal point count towards the number of decimal places.
// Return 0 if the number doesn't have any decimal places.

const getDecimalPlaces = num => {
	if (num.split(".").length === 1) { return 0; }
	
	return num.split(".")[1].length;
}
