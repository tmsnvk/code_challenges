// https://edabit.com/challenge/qWhoswdp35f8xzqGw

function makeRug(m, n, s = "#") {
	let a = [];
	
	for (let i = 0; i < m; i++) {
		a.push(`${s.repeat(n)}`)
	}

	return a;
}