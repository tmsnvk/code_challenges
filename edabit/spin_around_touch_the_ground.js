// https://edabit.com/challenge/Z8QZZJzLF4LWPA5Xw

function spinAround(r) {
	let a = 0;
	
	r.map((x) => x === "right" ? a += 90 : a += -90);
	
	return Math.floor(Math.abs(a) / 360);
}