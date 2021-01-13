// https://edabit.com/challenge/uYQs3cBqPEsk9mdZB

const sum = n => {
	const x = [];
	
	for (let i = 0; i <= n; i++) {
		x.push(i);	
	}
	
	const r = (a, c) => a + c;
	
	return x.reduce(r);
}
