// https://edabit.com/challenge/WCMC8X9z7758hq4gP

function numLayers(n) {
	let a = 0;
	let i = 0.0005;
	
	while (a < n) {
		i *= 2;
		a++;
	}
	
	return `${i}m`;
}