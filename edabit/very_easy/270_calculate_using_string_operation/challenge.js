// https://edabit.com/challenge/vHWkiCsH8JRbP6rtM

// Create a function that takes two numbers and a mathematical operator and returns the result.

// Examples
// calculate(4, 9, "+") ➞ 13

// calculate(12, 5, "-") ➞ 7

// calculate(6, 3, "*") ➞ 18

// calculate(25, 5, "/") ➞ 5

// calculate(14, 3, "%") ➞ 2

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