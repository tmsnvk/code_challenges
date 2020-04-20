// https://edabit.com/challenge/8n9RyHThC3dNEPCng

// Move Capital Letters to the Front
// Create a function that moves all capital letters to the front of a word.
// Keep the original relative order of the upper and lower case letters the same.

const capToFront = s => {
	let y = Array.from(s);
	let caps = y.filter(x => x === x.toUpperCase());
	let small = y.filter(x => x === x.toLowerCase());
	
	return caps.concat(small).join("");
}
