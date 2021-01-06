// https://edabit.com/challenge/hxyvTffvdT4E238CY

function testJackpot(result) {
	let a = new Set();
	
	result.map((x) => a.add(x));
	return a.size === 1;
}