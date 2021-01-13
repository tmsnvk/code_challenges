// https://edabit.com/challenge/RQtF47HMPbHDGBeW6

function lastDig(a, b, c) {
	let x = Number(String(a).split("").pop());
	let y = Number(String(b).split("").pop());
	let z = Number(String(c).split("").pop());

	return Number(String(x * y).split("").pop()) === z;
}