// https://edabit.com/challenge/7Qx4M32b94h3P4dyt

// Some basic arithmetic operators are +, -, *, /, and %. In this challenge you will be given three parameters, num1, num2, and an operator. Use the operator on number 1 and 2.

// Examples
// operate(1, 2, "+") ➞ 3
// // 1 + 2 = 3

// operate(7, 10, "-") ➞ -3
// // 7 - 10 = -3

// operate(20, 10, "%") ➞ 0
// // 20 % 10 = 0

const operate = (num1, num2, operator) => eval(`${num1} ${operator} ${num2}`);