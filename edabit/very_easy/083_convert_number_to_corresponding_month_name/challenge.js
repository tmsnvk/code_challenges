// https://edabit.com/challenge/NKknKNfeaJxLDfJuZ

// Convert Number to Corresponding Month Name
// Create a function that takes a number (from 1 to 12) and returns its corresponding month name as a string. 
// For example, if you're given 3 as input, your function should return "March", because March is the 3rd month.

const monthName = (num) => {
	const x = ["January", "February", "March", "April", "May", "June", "July", 
  "August", "September", "October", "November", "December"];
	
	return x[num - 1];
}
