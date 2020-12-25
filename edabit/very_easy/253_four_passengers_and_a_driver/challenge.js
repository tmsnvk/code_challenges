// https://edabit.com/challenge/Eu3Q3dGe47c2YssKq

// A typical car can hold four passengers and one driver, allowing five people to travel around. Given n number of people, return how many cars are needed to seat everyone comfortably.

// Examples
// carsNeeded(5) ➞ 1

// carsNeeded(11) ➞ 3

// carsNeeded(0) ➞ 0

const carsNeeded = (n) => n === 0 ? 0 : Math.ceil(n / 5);