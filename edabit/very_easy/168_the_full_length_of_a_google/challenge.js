// https://edabit.com/challenge/cWHToCQaAbnzNJzQw

// The Full Length of a Google
// Google's logo can be stretched depending on how many pages it lets you skip forward to.
// Let's say we wanted to change the amount of pages that Google could skip to. 
// Create a function where given a number of pages n, return the word 'Google' but with the correct number of "o"s.
// If n is equal to or less than 1, return invalid.

const googlify = n => {
	if (n <= 1) return "invalid";
	
	const o = "o";
	return `Go${o.repeat(n - 1)}gle`;
}
