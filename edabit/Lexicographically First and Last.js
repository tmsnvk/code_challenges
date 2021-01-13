// https://edabit.com/challenge/m6GYKsereS6JdARGW

function firstAndLast(s) {
	const x = s.split("");
	const y = x.sort().join("");
	const z = x.sort().reverse().join("");
	
	return [y, z];
}
