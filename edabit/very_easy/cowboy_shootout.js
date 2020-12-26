// https://edabit.com/challenge/9TWhGHCeytQEBCbc9

function rogerShots(arr) {
	let y = 0;
	
	for (x of arr) {
		if (x === "Bang!" || x === "BangBang!") {
			y += 0.5;
		} 
	}
	return y;
}
