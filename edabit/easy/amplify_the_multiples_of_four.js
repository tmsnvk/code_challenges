// https://edabit.com/challenge/FPHnbisnLwrQFYyAg

const amplify = (num) => {
	let a = [];
	
	for (let i = 1; i <= num; i++) {
		if (i % 4 === 0) {
			a.push(i * 10);
		} else {
			a.push(i);
		}
	}
	
	return a;
}