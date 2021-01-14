// https://edabit.com/challenge/WoFZTyrayj9f2FPwD

function billSplit(spicy, cost) {
	let a = 0;
	let b = 0;
	
	for (let i = 0; i < spicy.length; i++) {
		if (spicy[i] === "S") {
			a += cost[i];
		} else {
			a += cost[i] / 2;
			b += cost[i] / 2;
		}
	}
	
	return [a, b];
}