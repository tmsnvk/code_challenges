// https://edabit.com/challenge/JAgtuPDXj6BrDMxa5

const mean = (num) => {
	let a = 0;
	const b = String(num).split("");

	for (let i = 0; i < b.length; i++) {
		a += Number(b[i]);
	}
	
	return a / b.length;
}