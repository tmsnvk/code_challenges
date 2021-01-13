// https://edabit.com/challenge/zLYbAPk8NMnwoPhjG

function factorize(num) {
	let a = [];
	
	for (let i = 0; i <= num; i++) {
		if (num % i === 0) a.push(i);
	}
	
	return a;
}