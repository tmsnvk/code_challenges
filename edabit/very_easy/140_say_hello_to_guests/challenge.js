// https://edabit.com/challenge/r9uigYABnbPLY7zsz

// Say Hello to Guests
// In this exercise you will have to:

// Take a list of names.
// Add "Hello" to every name.
// Make one big string with all greetings.
// The solution should be one string with a comma in between every "Hello (Name)".

function greetPeople(names) {
	const y = [];
	
	for (x of names) {
		y.push(`Hello ${x}`);
	}
return y.join(", ");
}
