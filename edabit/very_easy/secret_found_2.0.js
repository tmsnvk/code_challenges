// https://edabit.com/challenge/eKNJGfjAAYgEsCerC

function secret(text) {
	const a = text.split("*");
	
	return `<${a[0]}></${a[0]}>`.repeat(a[1]);
}