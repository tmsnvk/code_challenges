// https://edabit.com/challenge/9fQ4KKTjAdKeTbYxm

function wumbo(words) {
	const x = /M/g;
	
	return words.replace(x, "W");
}
