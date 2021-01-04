// https://edabit.com/challenge/XyXCXHu7uZRJRveg4

const basicCalculator = (a, o, b) => {
	if (o === "+") {
		return a + b;
	} else if (o === "-") {
		return a - b;
	} else if (o === "/" && b === 0) {
		return null;
	} else if (o === "/") {
		return a / b;
	} else if (o === "*") {
		return a * b;
	} else {
		return null; 
	}
}