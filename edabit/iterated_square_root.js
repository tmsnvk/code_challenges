// https://edabit.com/challenge/FFdZPWBpBWvBjuGdr

function iSqrt(n) {
	if (n < 0) return "invalid";

	let a = 0;
	
	while (n >= 2) {
		n = Math.sqrt(n);
		a++;
	}
	
	return a;
}