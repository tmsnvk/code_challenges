// https://edabit.com/challenge/WR3Q72Jbv7Kyzu6AT

function findFactors(num) {
	let a = [];
	
	for (let i = 0; i <= num; i++) {
		if (num % i === 0) {
			a.push(i);
		}
	}
	
	return a;
}