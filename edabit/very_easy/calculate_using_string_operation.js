// https://edabit.com/challenge/vHWkiCsH8JRbP6rtM

function calculate(num1, num2, op) {
	switch (op) {
		case "+":
			return num1 + num2;
		case "-":
			return num1 - num2;
		case "*":
			return num1 * num2;
		case "/":
			return num1 / num2;
		case "%":
			return num1 % num2;
	}
}