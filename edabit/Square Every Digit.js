// https://edabit.com/challenge/Tnjbf6pdFsCjmaF8p

const squareDigits = (n) => {
	let a = [];
	const b = n.toString().split("");
	
	b.map((bb) => a.push(bb * bb));
	
	return Number(a.join(""));
}