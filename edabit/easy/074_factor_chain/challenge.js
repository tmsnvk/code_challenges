// https://edabit.com/challenge/FtZGQEonGwyozeCna

// Factor Chain
// A factor chain is an array where each previous element is a factor of the next consecutive element. 
// Create a function that determines whether or not an array is a factor chain.

const factorChain = arr => {
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i + 1] % arr[i] !== 0) {
			return false;
		}
	}
	return true;
}
