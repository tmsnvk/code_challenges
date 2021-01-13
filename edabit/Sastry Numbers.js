// https://edabit.com/challenge/KjSae7LTFzYTC256A

function isSastry(number) {
	const a = String(number).concat(String(number + 1));
	
	return Number.isInteger(Math.sqrt(Number(a)));
}