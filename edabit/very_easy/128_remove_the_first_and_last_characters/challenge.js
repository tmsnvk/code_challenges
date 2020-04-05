// https://edabit.com/challenge/Wq3Q5ewau9Fu2GN9i

// Remove the First and Last Characters
// Create a function that removes the first and last characters from a string.
// If the string is 2 or fewer characters long, return the string itself.

const removeFirstLast = str => {
	if (str.length <= 2) return str;
	
	if (str.length > 2) {
		const x = str.split("");
		x.pop();
		x.shift();
		return x.join("");
	}
}
