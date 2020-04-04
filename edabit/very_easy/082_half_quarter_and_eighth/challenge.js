// https://edabit.com/challenge/M9EfvGwTqvSZ5XbRM

// Half, Quarter and Eighth
// Create a function that takes a number and return an array of three numbers: 
// half of the number, quarter of the number and an eighth of the number.

const halfQuarterEighth = (n) => {
	const arr = [];
	
	const x = arr.push(n/2);
	const y = arr.push(n/4);
	const z = arr.push(n/8);
	
	return arr;
}
