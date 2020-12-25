// https://edabit.com/challenge/94rJjLxQbRhoypdCa

// Create a function that takes a string road and returns the car that's in first place. The road will be made of "=", and cars will be represented by letters in the alphabet.

// Examples
// firstPlace("====b===O===e===U=A==") ➞ "A"

// firstPlace("e==B=Fe") ➞ "e"

// firstPlace("proeNeoOJGnfl") ➞ "l"

function firstPlace(road) {
	if (road === "") {
		return "No road available";
	}
	
	const a = road.split("=");
	const b = a.join("");

	if (b === "") {
		return "No car available";
	}
	
	return b.charAt(b.length - 1);
}