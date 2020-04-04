// https://edabit.com/challenge/Y24efzo7NaACt3GvX

// Free Coffee Cups
// Per 6 coffee cups I buy, I get a 7th cup free. In total, I get 7 cups. 
// Create a function that takes n cups bought and return as an integer the total number of cups I would get.

function totalCups(n) {
	return n + (Math.floor(n / 6));
}