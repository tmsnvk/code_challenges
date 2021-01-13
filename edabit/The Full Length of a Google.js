// https://edabit.com/challenge/cWHToCQaAbnzNJzQw

const googlify = n => {
	if (n <= 1) return "invalid";
	
	const o = "o";
	return `Go${o.repeat(n - 1)}gle`;
}
