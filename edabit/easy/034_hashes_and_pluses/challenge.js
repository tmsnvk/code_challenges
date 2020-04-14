// https://edabit.com/challenge/ydBcGvv3n447nbxCy

// Hashes and Pluses
// Create a function that returns the number of hashes and pluses in a string.
// Return [0, 0] for an empty string.
// Return in the order of [hashes, pluses].

const hashPlusCount = str => {
	let y = 0;
	let z = 0;
	
	const x = str.split("");
	
	for (let a of x) {
		if (a === "#") {
			y += 1;
		} else {
			z += 1;
		}
	}
	
	return [y, z];
}
