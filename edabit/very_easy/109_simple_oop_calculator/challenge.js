// https://edabit.com/challenge/yxKoCKemzacK6PECM

// Simple OOP Calculator
// Create functions for the Calculator class that can do the following:

// Add two numbers.
// Subtract two numbers.
// Multiply two numbers.
// Divide two numbers.

class Calculator {
	constructor(x, y) {
    this.x = x;
    this.y = y;
  }
	
	add(x, y) {
		return x + y; 
	}
	
	subtract(x, y) {
		return x - y;
	}
	
	multiply(x, y) {
		return x * y;
	}
	
	divide(x, y) {
		return x / y;
	}
}
