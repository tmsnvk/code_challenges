// https://edabit.com/challenge/32mN4NsXypmqtuYkA

function maskify(str) {
	if (str.length <= 4) return str;
	
	const a = str.slice(0, str.length - 4).length;
	return `${`#`.repeat(a)}${str.slice(-4)}`;
}