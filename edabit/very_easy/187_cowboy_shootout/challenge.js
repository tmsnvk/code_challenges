// https://edabit.com/challenge/9TWhGHCeytQEBCbc9

// Cowboy Shootout
// Wild Roger is tasked with shooting down 6 bottles with 6 shots as fast as possible. 
// Here are the different types of shots he could make:

// He could use one pistol to shoot a bottle with a "Bang!" in 0.5 seconds.
// Or he could use both pistols at once with a "BangBang!" to shoot two bottles in 0.5 seconds.

// Given an array of strings, return the time (in seconds) it took to shoot down all 6 bottles. 
// Make sure to only count Bangs and BangBangs. Anything else doesn't count.

function rogerShots(arr) {
	let y = 0;
	
	for (x of arr) {
		if (x === "Bang!" || x === "BangBang!") {
			y += 0.5;
		} 
	}
	return y;
}
