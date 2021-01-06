// https://edabit.com/challenge/igEBCD9MzBfKfEMog

function mysteryFunc(num) {
	let a = 1;
	
	String(num).split("").map((x) => a *= Number(x));
	
	return a;
}