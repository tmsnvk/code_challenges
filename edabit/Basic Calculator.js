// https://edabit.com/challenge/AtoWYYC9THAH5HbS2

function calculator(a, operator, b) {
	if (operator === "+") {
		return a + b;
	} else if (operator === "-") {
		return a - b;
	} else if (operator === "/" && b === 0) {
		return "Can't divide by 0!";
	} else if (operator === "/") {
		return a / b;
	} else if (operator === "*") {
		return a * b;
	} else {
		return null; 
	}
}