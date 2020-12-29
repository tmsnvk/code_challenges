// https://edabit.com/challenge/arKLRM8qGzKZbCxCk

const getDecimalPlaces = num => {
	if (num.split(".").length === 1) { return 0; }
	
	return num.split(".")[1].length;
}
