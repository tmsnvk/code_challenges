// https://edabit.com/challenge/cHNEFGeQrH3nonwJw

// Clear the Fog
// Create a function which returns the word in the string, but with all the fog letters removed. 
// However, if the string is clear from fog, return "It's a clear day!".
// There won't be any fog inside of any of the actual words (won't include the letters f, o or g).
// Hidden words are always in lowercase.

const clearFog = str => {
	const x = /[fog]/g;
	
	if (str.match(/([fog])/g) === null) {
    return "It's a clear day!";
	}
	
	return str.replace(x, "");
}
