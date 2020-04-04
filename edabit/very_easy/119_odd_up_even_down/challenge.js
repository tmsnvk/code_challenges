// https://edabit.com/challenge/dWNPtNeQgyn6mS8FA

// Odd Up, Even Down
// Create a function that goes through the array, incrementing (+1) for each odd number and decrementing (-1) for each even number.

const transform = arr => {
	const x = [];
	
	for (y of arr) {
		if (y % 2 === 0) {
			x.push(y - 1);
		} else {
			x.push(y + 1);
		}
	}
	
	return x;
}
