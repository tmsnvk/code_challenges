// https://edabit.com/challenge/9fQ4KKTjAdKeTbYxm

// The Study of Wumbology
// Create a function that flips M's to W's (all uppercase).

function wumbo(words) {
	const x = /M/g;
	
	return words.replace(x, "W");
}
