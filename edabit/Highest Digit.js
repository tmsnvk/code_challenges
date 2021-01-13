// https://edabit.com/challenge/YJuhHKSmNCaKNHcD3

const highestDigit = (number) => {
	let a = 0;
	const b = number.toString().split("");
	
	for (let i = 0; i < b.length; i++) {
		if (b[i] >= a) {
			a = b[i];
		}
	}
	
	return parseFloat(a);
}