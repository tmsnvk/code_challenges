// https://edabit.com/challenge/LEPFNs6sgeAnJ7qqo

function evenlyDivisible(a, b, c) {
	let x = 0;
	
	for(let i = a; i <= b; i++) {
		if (i % c == 0){
			x += i;
		}
	}

	return x;
}